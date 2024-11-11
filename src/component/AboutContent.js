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
                        Hi, I'm Choti, a globally-minded tech enthusiast with a strong foundation in <strong>web development</strong>, <strong>project management</strong>, and <strong>data analysis</strong>. My journey spans multiple countries and industries, enriching my perspective and approach to transforming ideas into impactful digital solutions. 🌍✨
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
                                <div className="accordion-body">
                                    <strong>🌱 My Journey</strong><br />
                                    Since June 2024, I've worked as a freelance <strong>web developer</strong>, helping small businesses build engaging websites and elevate their online presence. Currently, I am further advancing my skills in <strong>full-stack development</strong> at <a href="https://www.hackyourfuture.be/" target="_blank" rel="noopener noreferrer"><strong>HackYourFuture Belgium</strong></a>, driven by a commitment to continuous learning and growth in the tech space.
                                    <br /><br />
                                    My career has taken me across <strong>Switzerland 🇨🇭, Denmark 🇩🇰, Slovenia 🇸🇮, Spain 🇪🇸, the Maldives 🇲🇻, and Malaysia 🇲🇾</strong>, where I gained intercultural insights and honed my adaptability. Now, after relocating to Belgium, learning Dutch, and embracing motherhood, I’m excited to bring my unique skill set and global perspective to the world of <strong>IT</strong>.
                                </div>
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
                                    <strong>💼 What I Do</strong><br />
                                    I specialize in:
                                    <ul className='text-start'>
                                        <li>Programming with <strong>JavaScript</strong>, <strong>SQL</strong>, and <strong>IoT solutions</strong> for digital transformation projects 🛠️</li>
                                        <li>Creating and optimizing websites for small businesses using platforms like <strong>Squarespace</strong> 🌐</li>
                                        <li>Developing data-driven digital strategies that help clients reach their goals 📊</li>
                                    </ul>
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
                                    <strong>🌟 Beyond the Code</strong><br />
                                    Outside of work, I’m passionate about exploring the latest tech trends, learning new languages, and engaging in sustainability initiatives. ♻️🌍
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

