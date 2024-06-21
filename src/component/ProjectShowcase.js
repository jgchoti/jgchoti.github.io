import React from 'react';
import { projectData } from '../data/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

function ProjectShowcase({ name, imageUrl, linkUrl, linkTitle, shortDescription, githubUrl, index }) {
    const row = Math.floor(index / 2)
    const isOddRow = row % 2 !== 0
    const specialImageUrl = isOddRow ? projectData[index].alternate_image : imageUrl;

    return (
        <div className="col-md-6 mb-5 reveal">
            <div className="project-wrapper">
                <img
                    src={specialImageUrl}
                    alt={linkTitle}
                    className="projects-images-show img-fluid"
                />
                <div className="overlay">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon" title="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="icon" title="Demo">
                        <FontAwesomeIcon icon={faDisplay} />
                    </a>
                </div>
            </div>
            <h4 className="mt-3 text-center">{name}</h4>
            <p className="text-center">{shortDescription}</p>
        </div>
    );
}

export default ProjectShowcase