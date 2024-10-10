import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ContactContent from '../component/ContactContent';
import ContactForm from '../component/ContactForm';

function Contact() {
    return (
        <div>
            <Navbar />
            <ContactContent />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Contact;
