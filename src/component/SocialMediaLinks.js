import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SocialMediaLinks({ link, title, icon }) {
    return (
        <a
            href={link}
            className="social-icon text-decoration-none fs-2 mx-3"
            target="_blank"
            title={title}
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}
export default SocialMediaLinks;