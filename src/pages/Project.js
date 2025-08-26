import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactBox from '../component/ContactBox';
import Footer from '../component/Footer';
import { projectData } from '../data/projectData';
import ProjectContent from '../component/ProjectsContent';
import ScrollReveal from '../logic/ScrollReveal';
import ProjectHeader from '../component/ProjectHeader';
import { useTheme } from '../logic/Theme';
import '../style/index.css';

function Project() {
    const theme = useTheme();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const projectIndex = parseInt(queryParams.get('project'), 10);
    const projectRefs = useRef([]);

    // Filtering state
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);

    // Reset filter and update projects when theme changes
    useEffect(() => {
        console.log('Theme changed to:', theme.theme);

        // Clear any active filter when switching themes
        setActiveFilter(null);

        // Filter projects by new theme
        const themeFilteredProjects = projectData.filter(project => project.type === theme.theme);
        setFilteredProjects(themeFilteredProjects);


    }, [theme.theme]);

    // Tech click handler
    const handleTechClick = (techName, category) => {


        const themeFiltered = projectData.filter(project => project.type === theme.theme);
        const techFiltered = themeFiltered.filter(project =>
            project.technologies.some(tech => tech.name === techName)
        );



        setFilteredProjects(techFiltered);
        setActiveFilter(techName);

        setTimeout(() => {
            document.getElementById('projects-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    };

    const clearFilter = () => {
        console.log('Clearing filter...');
        const themeFilteredProjects = projectData.filter(project => project.type === theme.theme);
        setFilteredProjects(themeFilteredProjects);
        setActiveFilter(null);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme.theme);
    }, [theme]);

    useEffect(() => {
        if (projectIndex >= 0 && projectIndex < projectData.length) {
            projectRefs.current[projectIndex]?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [projectIndex]);

    return (
        <div>
            <ProjectHeader />

            {/* Filter Status Bar */}
            {activeFilter && (
                <div className="container">
                    <div className="filter-status" >
                        <p>
                            Showing {filteredProjects.length} {theme.theme} project{filteredProjects.length !== 1 ? 's' : ''} using <strong>{activeFilter}</strong>
                        </p>
                        <button
                            onClick={clearFilter}
                            className="tech-tag"
                        >
                            Clear Filter ✕
                        </button>
                    </div>
                </div>
            )}

            <div id="projects-section">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className="mb-5 project-item"

                        >
                            <ProjectContent
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
                                onTechClick={handleTechClick}
                                activeFilter={activeFilter}
                            />
                        </div>
                    ))
                ) : activeFilter ? (

                    <div className="container filter-status">
                        <div>
                            <h3>
                                No {theme.theme} projects found
                            </h3>
                            <p >
                                No {theme.theme} projects use {activeFilter} technology.
                            </p>
                            <button
                                onClick={clearFilter}
                                className="tech-tag mt-5"
                            >
                                View All {theme.theme.charAt(0).toUpperCase() + theme.theme.slice(1)} Projects
                            </button>
                        </div>
                    </div>
                ) : (
                    // No projects in this theme at all
                    <div className='m-3'>
                        <p className="text-center m-5">🚧 Projects are in progress. Stay tuned!!</p>
                        <img
                            src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWg3MjdvbTdybno3Y3N0em92eWJ2N25nd2xyaWY0NHJsNWJ4NHRlciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orifj9lMglxE6O4qk/giphy.gif'
                            alt="giphy"
                            className="img-fluid rounded mx-auto d-block"
                        />
                    </div>
                )}
            </div>

            <ContactBox />
            <Footer />
            <ScrollReveal />
        </div>
    );
}

export default Project;