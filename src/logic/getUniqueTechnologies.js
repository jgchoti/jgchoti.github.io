import nodeJsLogo from '../assets/logos/nodejs.png';
import databaseLogo from '../assets/logos/database.png'

export const getUniqueTechnologies = (projects) => {
    const technologyMap = new Map();

    projects.forEach(project => {
        if (project.technologies) {
            project.technologies.forEach(tech => {
                if (!technologyMap.has(tech.name)) {
                    technologyMap.set(tech.name, tech.logoUrl);
                }
            });
        }
    });

    if (!technologyMap.has('Node.js')) {
        technologyMap.set('Node.js', nodeJsLogo);
    }
    if (!technologyMap.has('Database')) {
        technologyMap.set('Database', databaseLogo);
    }

    return Array.from(technologyMap, ([name, logoUrl]) => ({ name, logoUrl }));
};
