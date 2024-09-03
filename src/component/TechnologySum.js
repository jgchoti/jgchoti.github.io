import React from 'react';
import TechnologyBadge from './TechnologyBadge';
import { getUniqueTechnologies } from '../logic/getUniqueTechnologies';
import techInterface from '../assets/images/tech_interface.png'
import Wave from 'react-wavify';

function TechnologySum({ projectData }) {
    const uniqueTechnologies = getUniqueTechnologies(projectData);

    return (
        <div className='technology-sum'>
            <div className="row">
                <div className="col-lg-1">
                </div>
                <div className="col-lg-6 text-center technology-text">
                    <h3>
                        Technologies I've Worked With
                    </h3>
                    {uniqueTechnologies.map((tech) => (
                        <TechnologyBadge name={tech.name} logoUrl={tech.logoUrl} />
                    ))}
                </div>
                <div className="col-lg-4">
                    <img
                        className="tech-interface img-fluid"
                        src={techInterface}
                        alt="chotirat profile illustration"
                    />
                </div>
                <div className="col-lg-1">
                </div>
            </div>
            <div className='wave-container'>
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
        </div>
    );
}

export default TechnologySum;
