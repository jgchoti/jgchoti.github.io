import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import ContactBox from '../component/ContactBox';
import Footer from '../component/Footer';
import { projectData } from '../data/projectData';
import ProjectContent from '../component/ProjectsContent';
import ScrollReveal from '../logic/ScrollReveal';
import ProjectHeader from '../component/ProjectHeader';


function Project() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const projectIndex = parseInt(queryParams.get('project'), 10);

    // Create refs for each project
    const projectRefs = useRef([]);

    useEffect(() => {
        // Scroll to the specific project if the projectIndex is valid
        if (projectIndex >= 0 && projectIndex < projectData.length) {
            projectRefs.current[projectIndex]?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [projectIndex]);


    return (
        <div>
            <Navbar />
            <ProjectHeader />
            {projectData.map((project, index) => (
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
            ))}

            <ContactBox />
            <Footer />
            <ScrollReveal />
        </div>
    );
}

export default Project;
