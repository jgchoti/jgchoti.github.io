import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import Wave from 'react-wavify'
import CodingExperience from './CodingExperience'

function Hero() {
    return (
        <div className="hero position-relative text-center w-100">
            <div className="content-wrapper container">
                <p>
                    <ReactTyped
                        strings={["Hello! I am", "สวัสดีค่ะ ฉันชื่อ", "Hallo! Ik ben", "Hi! My name is", "Dag! Mijn naam is"]}
                        typeSpeed={100}
                        loop
                    />
                </p>
                <h1>Chotirat Jonggrit</h1>
                <CodingExperience />
                <Link to="/contact" className="btn-branding mb-4" title="Contact Choti">Say Hello</Link>
            </div>

        </div>
    );
}

export default Hero;
