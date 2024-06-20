import React from 'react';

function AboutContent() {
    return (
        <div className="container content-container">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <img className="profile-photo img-fluid" src={process.env.PUBLIC_URL + '/assets/images/profile_photo.png'} alt="chotirat photo" />
                </div>
                <div className="col-lg-6 description">
                    <h1>Hi I am Chotirat Jonggrit</h1>
                    <h2>I'm on a Coding Journey</h2>
                    <h2>Based in Belgium 🇧🇪</h2>
                    <br />
                    <p className="mt-3">
                        Currently, I'm training in full-stack development with <a href="https://www.hackyourfuturebelgium.be/">HackYourFuture Belgium</a>, driven by a passion for continuous learning and embracing new challenges.
                        <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className="link read-more" title="read more">Read More...</a>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <p>
                            With a background in the tourism industry, I've resided in Switzerland, Denmark, Slovenia, Spain, the Maldives, and Malaysia, immersing myself in diverse cultures and experiences. Following a rewarding hiatus to relocate to Belgium, master a new language (Dutch!) and embark on motherhood, I'm excited to apply my skills and expertise to the vibrant IT sector.
                        </p>
                    </div>
                    <p className="mb-5">
                        I present my diverse portfolio of projects, where creativity and determination meet. See what I've created! Curious to explore?
                    </p>
                    <a href="/pages/project.html" className="btn btn-branding" title="Choti's Projects">See My Projects</a>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
