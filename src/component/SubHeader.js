import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify'
import profileIllustration from '../assets/images/profile_illustration.png';

function SubHeader() {
    return (
        <div className='sub-header container-fluid w-100 m-0'>
            <div className="text-center sub-header-text">
                <h4>I build and share innovative solutions through tech projects and case studies.</h4>
                <h4>Discover my <a href="/project" className="button-link"><strong >Project</strong></a>, learn <a href="/about" className="button-link"><strong >About Me</strong></a>, or dive into my <a href="/blog" className="button-link"><strong >Blog</strong></a></h4>
            </div>
            <div className="col-lg-1">
            </div>

        </div >

    );
}

export default SubHeader;


