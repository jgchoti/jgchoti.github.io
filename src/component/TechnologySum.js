import React from 'react';
import TechnologyBadge from './TechnologyBadge';
import { getUniqueTechnologies } from '../logic/getUniqueTechnologies';
import Wave from 'react-wavify';

function TechnologySum({ projectData }) {
    const uniqueTechnologies = getUniqueTechnologies(projectData);

    return (
        <div className='technology-sum container-fluid w-100 m-0'>
            <div className=" text-center technology-text">
                <h3>
                    Technologies I've Worked With
                </h3>
                {uniqueTechnologies.map((tech, index) => (
                    <TechnologyBadge name={tech.name} logoUrl={tech.logoUrl} key={index} />
                ))}
            </div>
            <div className='wave-container container-fluid p-0'>
                <Wave fill='#fff'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3,

                    }}
                />
            </div>
        </div >
    );
}

export default TechnologySum;
