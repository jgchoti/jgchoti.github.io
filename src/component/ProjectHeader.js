import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from './Theme';

function ProjectHeader() {
    const theme = useTheme()
    const isWeb = theme.theme === 'web';

    return (
        <div className="hero mb-4">
            <h1>
                {isWeb ? 'Pixels & Interaction — Web Projects' : 'Patterns & Insights — Data Lab'}
            </h1>
            <div className='scroll-text-wrapper'>
                <FontAwesomeIcon icon={faAnglesDown} />
                <h4>scroll down to see more</h4>
            </div>
        </div>
    );
}

export default ProjectHeader;
