import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

function ProjectShowcase({ name, imageUrl, linkUrl, blogUrl, webUrl, linkTitle, shortDescription, githubUrl, index }) {
    const row = Math.floor(index / 2)
    const isOddRow = row % 2 !== 0
    const specialImageUrl = isOddRow ? projectData[index].alternate_image : imageUrl;

    return (
        <div className="col-md-6 mb-5">
            <div className="project-wrapper">
                <img
                    src={specialImageUrl}
                    alt={linkTitle}
                    className="projects-images-show img-fluid"
                />
                <div className="overlay">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                    {blogUrl && (
                        <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="icon" title="Blog">
                            <FontAwesomeIcon icon={faMedium} />
                        </a>
                    )}
                    {linkUrl && (
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="icon" title="Demo">
                            <FontAwesomeIcon icon={faDisplay} />
                        </a>
                    )}
                    {webUrl && (
                        <a href={webUrl} target="_blank" rel="noopener noreferrer" className="icon" title="Website">
                            <FontAwesomeIcon icon={faDisplay} />
                        </a>
                    )}
                </div>
            </div>
            <Link to={`project?project=${index}`}>
                <h4 className="mt-3 text-center">{name}</h4></Link>
            <p className="text-center">{shortDescription}</p>
        </div>
    );
}

export default ProjectShowcase