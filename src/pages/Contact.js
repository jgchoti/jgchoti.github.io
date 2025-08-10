import React from 'react';
import Footer from '../component/Footer';
import ContactContent from '../component/ContactContent';
import ContactForm from '../component/ContactForm';
import '../style/index.css';

function Contact() {
    return (
        <div>
            <ContactContent />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Contact;
