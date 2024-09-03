import React from 'react';

const TechnologyBadge = ({ name, logoUrl }) => {
    return (
        <div className="tech-badge">
            <img src={logoUrl} alt={name} className="tech-logo" />
            <div className="tech-name">{name}</div>
        </div>
    );
};

export default TechnologyBadge;
