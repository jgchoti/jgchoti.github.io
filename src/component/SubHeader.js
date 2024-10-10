import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'
import profileIllustration from '../assets/images/profile_illustration.png';

function SubHeader() {
    return (
        <div className='sub-header container-fluid w-100 m-0'>
            <div className="row ">
                <div className="col-lg-1">
                </div>
                <div className="col-lg-5 text-center sub-header-text">
                    <h3>I’m always learning, building, and improving.</h3>
                </div>
                <div className="col-lg-5 text-center sub-header-text">
                    <ul>
                        <li>Take a look around</li>
                        <li><a href="/project" className="button-link"><strong >Project</strong></a> Explore my latest projects.</li>
                        <li><a href="/about" className="button-link"><strong >About</strong></a> Get to know me</li>
                        <li><a href="/blog" className="button-link"><strong >Blog</strong></a> Read my latest posts on problem-solving.</li>
                    </ul>
                </div>
                <div className="col-lg-1">
                </div>
            </div>
            <div className='wave-container container-fluid'>
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
        </div >

    );
}

export default SubHeader;


