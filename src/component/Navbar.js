import React from 'react';
import ScrollToTop from "../logic/ScrollToTop.js"
import { NavLink } from 'react-router-dom';
import chotiLogo from '../assets/images/logo_choti.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top">
            <div className="navbar-container container-fluid">
                <NavLink className="navbar-brand" to="/" title="Homepage">
                    <img src={chotiLogo} alt="Choti Logo" className="logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact className="nav-link" to="/" title="Homepage">Home</NavLink>
                        <NavLink className="nav-link" to="/project" title="Choti's Projects">Work</NavLink>
                        <NavLink className="nav-link" to="/about" title="About Choti">About</NavLink>
                        <NavLink className="nav-link" to="/contact" title="Contact Choti">Contact</NavLink>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </nav>
    );
}

export default Navbar;
