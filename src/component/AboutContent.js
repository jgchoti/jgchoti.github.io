import React from 'react';
import { Link } from 'react-router-dom';


function AboutContent() {

    return (
        <div className="container content-container">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <img className="profile-photo img-fluid" src={process.env.PUBLIC_URL + '/assets/images/profile_photo.png'} alt="chotirat profile" />
                </div>
                <div className="col-lg-6 description">
                    <h1>About Me</h1>
                    <img src={process.env.PUBLIC_URL + '/assets/images/logo_choti.png'} alt="Choti Logo" className="about-logo" />
                    <h3>Based in Belgium 🇧🇪</h3>

                    <p className="mt-3">
                        Since June 2024, I have been partnering with small businesses as a freelance web developer to build their online presence using website builders. I am also currently advancing in full-stack development with <a href="https://www.hackyourfuturebelgium.be/">HackYourFuture Belgium</a>, driven by a passion for continuous learning.<br />
                        <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className="read-more" title="read more">Read More...</a>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <p>
                            With a background in the tourism industry, I've resided in Switzerland, Denmark, Slovenia, Spain, the Maldives, and Malaysia, immersing myself in diverse cultures and experiences. Following a rewarding hiatus to relocate to Belgium, master a new language (Dutch!) and embark on motherhood, I'm excited to apply my skills and expertise to the vibrant IT sector.
                        </p>
                    </div>
                    <p className="mb-5">
                        I present my diverse portfolio of projects. See what I've created! Curious to explore?
                    </p>
                    <Link to="/project" className="btn-branding btn-mobile" title="Choti's Projects">See Projects</Link>
                    <a href="#" className="btn-branding-case btn-mobile" title="Choti's case study" target="_blank" rel="noopener noreferrer">
                        See Case Study
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
