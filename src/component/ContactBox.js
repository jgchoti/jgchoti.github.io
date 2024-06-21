import React from 'react';
import { Link } from 'react-router-dom';

function ContactBox() {
    return (
        <div className="contact-box d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <div className='d-flex flex-column flex-sm-row align-items-center mb-3 mb-sm-0'>
                <h4 className="mb-1 mb-sm-0 me-sm-3">Work Inquiry</h4>
                <p className="text-muted mb-0">Interested in working together?</p>
            </div>
            <div className='d-flex flex-column flex-sm-row align-items-center'>
                <Link
                    to="/contact"
                    className="btn-branding"
                    title="Contact Choti"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
}

export default ContactBox;
