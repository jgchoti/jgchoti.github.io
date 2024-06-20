import React from 'react';
import { Link } from 'react-router-dom';

function ContactBox() {
    return (
        <div className="contact-box d-flex justify-content-between">
            <div>
                <h4>Work Inquiry</h4>
                <p className="text-muted">Interested in working together?</p>
            </div>
            <div>
                <Link
                    to="/contact"
                    className="btn btn-branding"
                    title="Contact Choti"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
}

export default ContactBox;

