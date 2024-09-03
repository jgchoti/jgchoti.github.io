import ProjectShowcase from './ProjectShowcase';

function Content(props) {
    return (
        <div className="container projects-container">
            <div className="row mt-5">
                {props.projectData.map((project, index) => (
                    <ProjectShowcase
                        key={index}
                        index={index}
                        name={project.name}
                        imageUrl={project.imageUrl}
                        linkUrl={project.linkUrl}
                        linkTitle={project.linkTitle}
                        shortDescription={project.shortDescription}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Content;
