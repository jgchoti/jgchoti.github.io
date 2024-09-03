import React from 'react';
import Navbar from './Navbar';
import ContactBox from './ContactBox';
import Footer from './Footer';
import { projectData } from '../data/projectData';
import ProjectContent from './ProjectsContent';
import ScrollReveal from '../logic/ScrollReveal';
import ProjectHeader from './ProjectHeader';


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
