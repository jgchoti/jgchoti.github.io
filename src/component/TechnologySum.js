import React from 'react';
import TechnologyBadge from './TechnologyBadge';
import { getUniqueTechnologies } from '../logic/getUniqueTechnologies';
import { projectData } from '../data/projectData';

function TechnologySum() {
    const uniqueTechnologies = getUniqueTechnologies(projectData);

    return (
        <div className='technology-sum container-fluid'>
            <div className=" text-center technology-text">
                <h3>
                    Technologies I've Worked With
                </h3>
                {uniqueTechnologies.map((tech, index) => (
                    <TechnologyBadge name={tech.name} logoUrl={tech.logoUrl} key={index} />
                ))}
            </div>
        </div >
    );
}

export default TechnologySum;
