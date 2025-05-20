import { motion, useScroll, useSpring } from "framer-motion";
import profilePhoto from "../assets/images/profile_photo.png";
import profilePhotoDataTheme from "../assets/images/profile_photo_data.png";
// import { Link } from "react-router-dom";
import { profileData } from "../data/profileData";
import TechnologySum from "./TechnologySum";
import { useTheme } from '../component/Theme.js';
const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutContent() {
    const theme = useTheme()
    console.log(theme)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <div className="container content-container">
            <motion.div
                className="line-scroll"
                style={{
                    scaleX: scaleX,
                }}
            />
            {/* Profile Photo Section */}
            <motion.div
                className="row justify-content-center mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="col-lg-6 text-center">
                    <img className="profile-photo img-fluid mt-0" src={theme.theme === "web" ? profilePhoto : profilePhotoDataTheme} alt="Chotirat profile" />
                </div>
            </motion.div>

            {profileData.map(({ id, title, subtitle, content }) => (
                <motion.div
                    key={id}
                    className="row mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="col-lg-8 offset-lg-2 about-content">
                        {id === "intro" ? (<h1>{title}</h1>) : (<h2>{title}</h2>)}
                        {subtitle && <h3>{subtitle}</h3>}
                        <p>
                            {content}
                        </p>
                    </div>
                </motion.div>
            ))}
            <motion.div
                className="row mt-5 mb-5 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="col">
                    <TechnologySum />
                </div>
            </motion.div>
        </div>
    );
}
