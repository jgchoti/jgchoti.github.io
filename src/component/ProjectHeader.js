import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

function ProjectHeader() {
    return (
        <div className="hero mt-4 mb-4">
            <h1>Explore My Project</h1>
            <div className='scroll-text-wrapper'>
                <FontAwesomeIcon icon={faAnglesDown} />
                <h4>scroll down to see more</h4>
            </div>
        </div>
    );
}

export default ProjectHeader;
