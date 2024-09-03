import React, { useState } from 'react';

const CodingExperience = () => {
    const [showYears, setShowYears] = useState(true);
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    const toggleShowYears = () => {
        setShowYears(!showYears);
    };

    return (
        <div>
            <h2>Practicing Coding Since<button className={`btn-code ${showYears ? '' : "active"}`} onClick={toggleShowYears}>
                {showYears ? 'Calculate Years' : 'Show Code'}
            </button></h2>
            {showYears ?
                (
                    <div className='code-box'>
                        <pre>
                            <code>
                                {`function calculateYears() {
    const startYear = ${startYear};
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;
    return \`\${yearsOfExperience > 0 ? \`\${yearsOfExperience} \${yearsOfExperience === 1 ? 'Year' : 'Years'}\` : ''}\`;
}`}</code></pre></div>
                ) : (
                    <div className='code-box'>
                        <pre>
                            <code>
                                {`${yearsOfExperience > 0 ? `${yearsOfExperience} ${yearsOfExperience === 1 ? 'Year' : 'Years'}` : ''}`}
                            </code>
                        </pre>
                    </div>
                )}
        </div>
    );
};

export default CodingExperience;
