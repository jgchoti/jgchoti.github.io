import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

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
