import React from 'react';
import { projectData } from '../data/projectData';

function ProjectShowcase({ name, imageUrl, linkUrl, linkTitle, shortDescription, index }) {
    const row = Math.floor(index / 2)
    const isOddRow = row % 2 !== 0
    const specialImageUrl = isOddRow ? projectData[index].alternate_image : imageUrl;

    console.log(row)
    return (
        <div className="col-md-6 mb-5 reveal">
            <a
                href={linkUrl}
                title={linkTitle}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={specialImageUrl}
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