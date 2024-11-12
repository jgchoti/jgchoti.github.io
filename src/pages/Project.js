import React from 'react';
import Navbar from '../component/Navbar';
import ContactBox from '../component/ContactBox';
import Footer from '../component/Footer';
import { projectData } from '../data/projectData';
import ProjectContent from '../component/ProjectsContent';
import ScrollReveal from '../logic/ScrollReveal';
import ProjectHeader from '../component/ProjectHeader';


function Project() {
    return (
        <div>
            <Navbar />
            <ProjectHeader />
            {projectData.map((project, index) => (
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
            ))}
            <ContactBox />
            <Footer />
            <ScrollReveal />
        </div>
    );
}

export default Project;
