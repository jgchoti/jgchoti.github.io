import ProjectShowcase from './ProjectShowcase';
import { useTheme } from '../logic/Theme'

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
                        alternate_image={project.alternate_image}
                        linkUrl={project.linkUrl}
                        linkTitle={project.linkTitle}
                        shortDescription={project.shortDescription}
                        githubUrl={project.githubUrl}
                        blogUrl={project.blogUrl}
                        webUrl={project.webUrl}
                    />)
                )) : (<div className="text-center mt-5 mb-5" >
                    <p className='mb-5'>🚧 Ongoing — more projects coming soon!</p>
                    <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHF2NGljZXlrbjFzOGpmajU3YWFidHF0Mmd2ZXQyNzRrbjBqajFhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6MbbT5ctRJeOnPIA/giphy.gif' alt="giphy" className="img-fluid rounded mx-auto d-block" />
                </div>)}
            </div>
        </div>
    );
}

export default Content;
