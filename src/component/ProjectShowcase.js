import React from 'react';

function ProjectShowcase({ name, imageUrl, linkUrl, linkTitle, shortDescription }) {
    return (
        <div className="col-md-6 mb-5">
            <a
                href={linkUrl}
                title={linkTitle}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={imageUrl}
                    alt={linkTitle}
                    className="projects-images img-fluid"
                />
            </a>
            <h4 className="mt-3 text-center">{name}</h4>
            <p className="text-center">{shortDescription}</p>
        </div>
    );
}

export default ProjectShowcase