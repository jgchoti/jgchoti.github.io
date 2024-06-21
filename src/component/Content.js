import ProjectShowcase from './ProjectShowcase';
import { projectData } from '../data/projectData.js';

function Content() {
    return (
        <div className="container content-container">
            <div className="row mt-5">
                {projectData.map((project, index) => (
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
