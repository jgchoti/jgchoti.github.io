import React from 'react';
import TechnologyBadge from './TechnologyBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'

function ProjectContent({ name, description, details, imageUrl, linkUrl, linkTitle, index, githubUrl, webUrl, blogUrl, technologies }) {
    const id = name.split(' ').join('').toLowerCase();
    const isEvenProject = index % 2 === 0;
    return (
        <div className="container">
            <div className="d-flex flex-column flex-md-row reveal">
                <div className={`col-lg-6 mt-3 img-wrapper ${isEvenProject ? 'order-md-first order-sm-first' : 'order-md-last order-sm-first'}`}>
                    {imageUrl && <img src={imageUrl} alt={name} className="img-fluid projects-images" />}
                </div>
                <div className={`col-lg-6 mt-3 description ${isEvenProject ? 'order-md-last order-sm-last' : 'order-md-first order-sm-last'}`}>
                    <h2 className="project-name">{name}</h2>
                    <h3>Technologies Used:</h3>
                    <div className='project-technologies d-flex justify-content-center'>
                        {technologies.map((technology, index) => (
                            <TechnologyBadge
                                key={index}
                                name={technology.name}
                                logoUrl={technology.logoUrl}
                            />
                        ))}
                    </div>
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
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-branding-outline" title="GitHub">
                                <FontAwesomeIcon icon={faGithub} /> <p className='btn-text mb-0 ms-3'>GitHub</p>
                            </a>
                        )}
                        {blogUrl && (
                            <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="btn-branding-outline" title="Blog">
                                <FontAwesomeIcon icon={faMedium} /><p className='btn-text mb-0 ms-3'>Read Blog</p>
                            </a>
                        )}
                        {(webUrl || linkUrl) && (
                            <a
                                href={webUrl ? webUrl : linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-branding-outline"
                                title={webUrl ? "Website" : "Demo"}
                            >
                                <FontAwesomeIcon icon={faDisplay} />
                                <p className='btn-text mb-0 ms-3'>Launch {name}</p>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectContent