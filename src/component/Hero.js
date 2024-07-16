import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

function Hero() {
    return (
        <div className="hero">
            <p><ReactTyped strings={["Hello! I am", "สวัสดีค่ะ ฉันชื่อ", "Hallo! Ik ben", "Hi! My name is", "Dag! Mijn naam is"]} typeSpeed={100} loop /></p>
            <h1>Chotirat Jonggrit</h1>
            <h2>Discover My Project Portfolio!</h2>
            <Link to="/contact" className="btn-branding" title="Contact Choti">Contact Me</Link>
        </div>
    );
}

export default Hero;
