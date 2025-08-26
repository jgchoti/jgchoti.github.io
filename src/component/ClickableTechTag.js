import React from 'react';
import techCategories from "../data/techCategories";

const ClickableTechTag = ({ name, onClick, isSelected = false }) => {
    const techInfo = techCategories[name];

    return (
        <button
            onClick={() => onClick(name, techInfo?.category || 'Other')}
            className={`tech-tag px-3 py-1 mx-1 mb-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-105 hover:opacity-80 ${isSelected ? 'tech-tag--selected' : ''}`}
        >
            {name}
        </button>
    );
};

export default ClickableTechTag;