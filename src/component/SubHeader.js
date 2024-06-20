import React from 'react';
import { Link } from 'react-router-dom';
function SubHeader() {
    return (
        <div className="m-5 text-center">
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
    );
}

export default SubHeader;


