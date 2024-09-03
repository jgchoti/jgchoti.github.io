import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'
import profileIllustration from '../assets/images/profile_illustration.png';

function SubHeader() {
    return (
        <div className='sub-header w-100 m-0'>
            <div className="row">
                <div className="col-lg-2 ">
                </div>
                <div className="col-lg-3 text-center ">
                    <img
                        className="profile-illustration img-fluid"
                        src={profileIllustration}
                        alt="chotirat profile illustration"
                    />
                </div>
                <div className="col-lg-6 text-center sub-header-text">
                    <h3>
                        I'm always learning something new. Check
                        "<Link
                            className="link"
                            to="/project"
                            title="projects"
                        >work</Link>" to see what I've created OR learn more about "<Link
                            className="link"
                            to="/about"
                            title="About Choti"
                        >my journey</Link>"!
                    </h3>
                </div>
                <div className="col-lg-1">
                </div>
            </div>
            <div className='wave-container container-fluid p-0'>
                <Wave fill='#F5F5DA'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3,

                    }}
                />
            </div>
        </div>

    );
}

export default SubHeader;


