import ProjectShowcase from './ProjectShowcase';
import { useTheme } from './Theme'

function Content(props) {
    const { theme } = useTheme();
    const filteredProjects = props.projectData.filter(project => project.type === theme);
    return (
        <div className="container projects-container">
            <div className="row mt-5">
                {filteredProjects.length > 0 ? (filteredProjects.map((project, index) => (
                    <ProjectShowcase
                        key={index}
                        index={index}
                        name={project.name}
                        imageUrl={project.imageUrl}
                        linkUrl={project.linkUrl}
                        linkTitle={project.linkTitle}
                        shortDescription={project.shortDescription}
                        githubUrl={project.githubUrl}
                        blogUrl={project.blogUrl}
                        webUrl={project.webUrl}
                    />)
                )) : (<div className="text-center mt-5 mb-5" style={{ fontStyle: 'italic', opacity: 0.7 }}>
                    🚧 Ongoing — more projects coming soon!
                </div>)}
            </div>
        </div>
    );
}

export default Content;
