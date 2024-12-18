import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/images/profile_photo.png';
import chotiLogo from '../assets/images/logo_choti.png';

function AboutContent() {

    return (
        <div className="container content-container">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <img className="profile-photo img-fluid" src={profilePhoto} alt="Chotirat profile" />
                </div>
                <div className="col-lg-6 description">
                    <h1>About Me</h1>
                    <img src={chotiLogo} alt="Choti Logo" className="about-logo" />
                    <h3>Based in Belgium 🇧🇪</h3>

                    <p className="mt-3">
                        Hi, I'm Choti, a tech enthusiast with a global mindset and a strong foundation in <strong>web development</strong>, <strong>project management</strong>, and <strong>data analysis</strong>. Having lived and worked across multiple countries and industries, I bring a unique perspective to delivering innovative digital solutions that drive results. 🌍✨
                    </p>

                    {/* Accordion for "Read More" sections */}
                    <div className="accordion mt-4" id="aboutAccordion">

                        {/* Journey Section */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingJourney">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJourney" aria-expanded="false" aria-controls="collapseJourney">
                                    What’s My Story Across the Globe?
                                </button>
                            </h2>
                            <div id="collapseJourney" className="accordion-collapse collapse" aria-labelledby="headingJourney" data-bs-parent="#aboutAccordion">
                                <div className="accordion-body"><p>
                                    <strong>🌱 My Journey</strong><br />
                                    Since June 2024, I've worked as a freelance <strong>web developer</strong>, helping small businesses build engaging websites and elevate their online presence. Currently, I am further advancing my skills in <strong>full-stack development</strong> at <a href="https://www.hackyourfuture.be/" target="_blank" rel="noopener noreferrer"><strong>HackYourFuture Belgium</strong></a>, driven by a commitment to continuous learning and growth in the tech space.
                                    <br /><br />
                                    My career and education have taken me to Switzerland 🇨🇭, the United Kingdom 🇬🇧, Denmark 🇩🇰, Slovenia 🇸🇮, Spain 🇪🇸, the Maldives 🇲🇻, and Malaysia 🇲🇾, where I gained valuable intercultural insights and refined my adaptability. Now, having relocated to Belgium, learned Dutch, and embraced motherhood, I’m eager to apply my unique skill set and global perspective to the world of IT.
                                </p></div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSkills">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
                                    What Can I Do for You?
                                </button>
                            </h2>
                            <div id="collapseSkills" className="accordion-collapse collapse" aria-labelledby="headingSkills" data-bs-parent="#aboutAccordion">
                                <div className="accordion-body">
                                    <p>
                                        <strong>💼 What I Do</strong><br />
                                        I specialize in:
                                        <ul className='text-start'>
                                            <li>Building web applications using <strong>JavaScript</strong> and <strong>SQL</strong>, with a focus on creating innovative digital solutions for business growth and transformation 🛠️</li>
                                            <li>Creating and optimizing websites for small businesses using platforms like <strong>Squarespace</strong> 🌐</li>
                                            <li>Leveraging technical expertise to deliver scalable web solutions that enhance user experiences and meet client needs 🌐</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Beyond Code Section */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingBeyondCode">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBeyondCode" aria-expanded="false" aria-controls="collapseBeyondCode">
                                    What Am I Passionate About Beyond Tech?
                                </button>
                            </h2>
                            <div id="collapseBeyondCode" className="accordion-collapse collapse" aria-labelledby="headingBeyondCode" data-bs-parent="#aboutAccordion">
                                <div className="accordion-body">
                                    <p>
                                        <strong>🌟 Beyond the Code</strong><br />
                                        Outside of work, I’m passionate about exploring the latest tech trends, learning new languages, and engaging in sustainability initiatives.♻️🌍</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mb-5 mt-3">
                        I present my diverse portfolio of projects. See what I've created! Curious to explore?
                    </p>
                    <Link to="/project" className="btn-branding btn-mobile" title="Choti's Projects">See Projects</Link>
                    <a href="/blog" className="btn-branding-case btn-mobile" title="Choti's Case Study" target="_blank" rel="noopener noreferrer">
                        See Case Study
                    </a>
                </div>
            </div>
        </div >
    );
}

export default AboutContent;

