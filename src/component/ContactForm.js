import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xldrzvoz");
    if (state.succeeded) {
        return <div className="form-submit-container">
            <p className='form-submit-text'>Thank you for your message!<br /> I’ll get back to you shortly. 👩🏽‍💻</p>
            <button className="reset-button" onClick={() => window.location.reload()} >
                <FontAwesomeIcon icon={faRotateRight} />Reset</button>
        </div>;
    }
    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Send Me a Message 📮
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
