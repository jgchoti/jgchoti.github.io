import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

function ProjectContent({ name, description, details, imageUrl, linkUrl, linkTitle, index, githubUrl }) {
    const id = name.split(' ').join('').toLowerCase();
    const isEvenProject = index % 2 === 0;

    return (
        <div className="container">
            <div className="d-flex flex-row reveal">
                <div className={`col mt-3 img-wrapper ${isEvenProject ? 'order-first' : 'order-last'}`}>
                    {imageUrl && <img src={imageUrl} alt={name} className="img-fluid projects-images" />}
                </div>
                <div className={`col mt-3 description ${isEvenProject ? 'order-lg-last' : 'order-first'}`}>
                    <h2 className="project-name">{name}</h2>
                    <p>{description}</p>
                    <a
                        data-bs-toggle="collapse"
                        href={`#${id}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls={id}
                        className="read-more"
                        title="read more"
                    >
                        Read More...
                    </a>
                    <div className="collapse multi-collapse" id={id}>
                        <p>{details}</p>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-branding-outline" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} /> <p className='btn-text mb-0 ms-3'>GitHub</p>
                        </a>
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="btn-branding-outline" title="Demo">
                            <FontAwesomeIcon icon={faDisplay} /> <p className='btn-text mb-0 ms-3'>Launch {name}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectContent