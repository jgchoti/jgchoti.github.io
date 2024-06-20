import React from 'react';
import Navbar from './Navbar';
import ContactBox from './ContactBox';
import Footer from './Footer';
import AboutContent from './AboutContent';

function About() {
    return (
        <div>
            <Navbar />
            <AboutContent />
            <ContactBox />
            <Footer />
        </div>
    );
}

export default About;
