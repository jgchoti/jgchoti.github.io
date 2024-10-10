import React from 'react';
import Navbar from '../component/Navbar';
import ContactBox from '../component/ContactBox'
import Footer from '../component/Footer';
import AboutContent from '../component/AboutContent';

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
