import React from 'react';
import { contactInfo } from '../data/contactInfo.js';
import SocialMediaLinks from './SocialMediaLinks';
import chotiLogo from '../assets/images/logo_choti.png';

function Footer() {

    return (
        <footer className="d-flex align-items-center justify-content-center">
            <div>
                <div className="socials text-center my-2">
                    {contactInfo.map((contact, index) => (
                        <SocialMediaLinks
                            key={index}
                            title={contact.title}
                            link={contact.link}
                            icon={contact.icon}
                        />
                    ))}

                </div>
                <div className="copyright text-center m-5">
                    &copy; 2024 | Designed by
                    <img src={chotiLogo} alt="Choti Logo" className="logo" />
                    <p className="m-5 d-none d-md-block">
                        Let's keep the creative vibes flowing! This
                        website is
                        <a
                            href="https://github.com/jgchoti/jgchoti.github.io"
                            target="_blank"
                            title="Portfolio Project on GitHub" rel="noreferrer"
                        > open-source </a
                        >, so feel free to peek under the hood.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
