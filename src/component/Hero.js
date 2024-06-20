import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero">
            <p>Hi! I am</p>
            <h1>Chotirat Jonggrit</h1>
            <h2>Discover My Project Portfolio!</h2>
            <Link to="/contact" className="btn-branding" title="Contact Choti">Contact Me</Link>
        </div>
    );
}

export default Hero;
