import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import chotiLogo from "../assets/images/logo_choti.png";
import ScrollToTop from "../logic/ScrollToTop.js";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const useDimensions = (ref) => {
        const dimensions = useRef({ width: 0, height: 0 });
        useEffect(() => {
            if (ref.current) {
                dimensions.current.width = ref.current.offsetWidth;
                dimensions.current.height = ref.current.offsetHeight;
            }
        }, [ref]);
        return dimensions.current;
    };

    const { height } = useDimensions(containerRef);

    return (
        <div>
            <div className="navbar-toggle-wrapper">
                <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {!isOpen && <div className="navbar-header">
                    <NavLink to="/" title="Homepage" onClick={() => setIsOpen(false)}>
                        <img src={chotiLogo} alt="Choti Logo" className="logo" />
                    </NavLink>
                </div>}
            </div>
            <div className={`navbar-wrapper ${isOpen ? "open" : "closed"}`}>


                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                    className="navbar-motion"
                >
                    <motion.div className="navbar-background" variants={sidebarVariants} />

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                key="navbar-list"
                                className="navbar-list"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={navVariants}
                            >
                                <NavItem to="/" title="Home" onClick={() => setIsOpen(false)} />
                                <NavItem to="/data" title="Data Lab" onClick={() => setIsOpen(false)} />
                                <NavItem to="/project" title="Web Works" onClick={() => setIsOpen(false)} />
                                <NavItem to="/blog" title="Blog" onClick={() => setIsOpen(false)} />
                                <NavItem to="/about" title="About" onClick={() => setIsOpen(false)} />
                                <NavItem to="/contact" title="Contact" onClick={() => setIsOpen(false)} />
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </motion.nav>


                <ScrollToTop />
            </div>
        </div>
    );
}

function NavItem({ to, title, onClick }) {
    return (
        <motion.li
            className="navbar-list-item"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <NavLink to={to} className="nav-link" onClick={onClick} end>
                {title}
            </NavLink>
        </motion.li>
    );
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

function MenuToggle({ toggle, isOpen }) {
    return (
        <button className="menu-toggle" onClick={toggle} aria-label="Toggle menu">
            <motion.svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                animate={isOpen ? "open" : "closed"}
            >
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </motion.svg>
        </button>
    );
}
