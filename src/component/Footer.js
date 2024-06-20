import React from 'react';

function Footer() {
    return (
        <footer className="d-flex align-items-center justify-content-center">
            <div>
                <div className="socials text-center my-2">
                    <a
                        href="https://github.com/chotirat"
                        className="text-decoration-none fs-2"
                        target="_blank"
                        title="Visit Choti's GitHub profile" rel="noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chotirat-jonggrit/"
                        className="text-decoration-none fs-2 mx-3"
                        target="_blank"
                        title="Visit Choti's LinkedIn profile" rel="noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://twitter.com/ChotiJon"
                        className="text-decoration-none fs-2"
                        target="_blank"
                        title="Visit Choti's Twitter profile" rel="noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="copyright text-center m-5">
                    &copy; 2024 | Designed with ❤️ by
                    <img src={process.env.PUBLIC_URL + '/assets/images/logo_choti.png'} alt="Choti Logo" className="logo" />
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
