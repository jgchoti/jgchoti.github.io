import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('data');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith('/data')) {
            setTheme('data');
        } else if (location.pathname.startsWith('/project')) {
            setTheme('web');
        }
    }, [location]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);
