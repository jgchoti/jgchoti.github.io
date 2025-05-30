import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ContactBox from '../component/ContactBox';
import Footer from '../component/Footer';
import { projectData } from '../data/projectData';
import ProjectContent from '../component/ProjectsContent';
import ScrollReveal from '../logic/ScrollReveal';
import ProjectHeader from '../component/ProjectHeader';
import { useTheme } from '../logic/Theme';

function Project() {
    const theme = useTheme()
    const filteredProjects = projectData.filter(project => project.type === theme.theme)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const projectIndex = parseInt(queryParams.get('project'), 10);

    // Create refs for each project
    const projectRefs = useRef([]);

    useEffect(() => {
        // Set theme based on route
        document.documentElement.setAttribute('data-theme', theme.theme);
    }, [theme]);

    useEffect(() => {
        // Scroll to the specific project if the projectIndex is valid
        if (projectIndex >= 0 && projectIndex < projectData.length) {
            projectRefs.current[projectIndex]?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [projectIndex]);

    return (
        <div>
            <ProjectHeader />
            {filteredProjects.length > 0 ?
                (filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)} // Assign each project a ref
                        className="mb-5"
                    >
                        <ProjectContent
                            key={index}
                            name={project.name}
                            description={project.description}
                            details={project.details}
                            imageUrl={project.imageUrl}
                            linkUrl={project.linkUrl}
                            linkTitle={project.linkTitle}
                            githubUrl={project.githubUrl}
                            technologies={project.technologies}
                            blogUrl={project.blogUrl}
                            webUrl={project.webUrl}
                            index={index}
                        />
                    </div>
                ))) : (<div className='m-3'><p className="text-center m-5">🚧 Projects are in progress. Stay tuned!!</p>
                    <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWg3MjdvbTdybno3Y3N0em92eWJ2N25nd2xyaWY0NHJsNWJ4NHRlciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orifj9lMglxE6O4qk/giphy.gif' alt="giphy" className="img-fluid rounded mx-auto d-block" /></div>)
            }

            <ContactBox />
            <Footer />
            <ScrollReveal />
        </div>
    );
}

export default Project;
