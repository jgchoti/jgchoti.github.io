import React from 'react';

function ProjectContent({ name, description, details, imageUrl, linkUrl, linkTitle, index }) {
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
                    <div className="m-5">
                        <a
                            href={linkUrl}
                            className="btn-branding-outline"
                            target="_blank"
                            rel="noreferrer"
                            title={linkTitle}
                        >
                            Launch {name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectContent