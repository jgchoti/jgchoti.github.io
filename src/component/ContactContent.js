import React from 'react';
import { contactInfo } from '../data/contactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function ContactContent() {
    return (
        <div className="container content-container">
            <div className="row">
                <div className="col-lg-6 content">
                    <h1>Get in touch!</h1>
                    <h2 className="mb-5">Contact Me</h2>

                    {contactInfo.map((info, index) => (
                        <div className="ml-5 mb-4" key={index}>
                            <h4>{info.platform}</h4>
                            <p>
                                <FontAwesomeIcon icon={info.icon} />
                                <a
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={info.title}
                                    className="contact-link"
                                >
                                    {info.name}
                                </a>
                            </p>
                        </div>
                    ))}
                    <div className="ml-5 mb-4">
                        <h4>Based in</h4>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            Antwerp, Belgium
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img
                        className="profile-photo img-fluid"
                        src={process.env.PUBLIC_URL + '/assets/images/choti_photo.jpeg'}
                        alt="chotirat profile"
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactContent;
