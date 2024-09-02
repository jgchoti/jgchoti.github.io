import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'

function SubHeader() {
    return (
        <div className='sub-header'>
            <div className="row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-3 text-center ">
                    <img
                        className="profile-illustration img-fluid"
                        src={process.env.PUBLIC_URL + '/assets/images/profile_illustration.png'}
                        alt="chotirat profile illustration"
                    />
                </div>
                <div className="col-lg-6 text-center sub-header-text">
                    <h3>
                        From web development to app design, I've tackled a wide range of coding
                        challenges and have gained invaluable experience along the way. Explore
                        my portfolio to see what I've created OR learn more about "<Link
                            className="link"
                            to="/about"
                            title="About Choti"
                        >my journey</Link>"!
                    </h3>
                </div>
                <div className="col-lg-1">
                </div>
            </div>
            <div className='wave-container'>
                <Wave fill='#fff'
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


