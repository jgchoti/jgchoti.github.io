import React from 'react';

const TechnologyBadge = ({ name, logoUrl, index }) => {
    return (
        <div className="tech-badge" key={index}>
            <img src={logoUrl} alt={name} className="tech-logo" />
            <div className="tech-name">{name}</div>
        </div>
    );
};

export default TechnologyBadge;
