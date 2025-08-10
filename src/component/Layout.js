import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Chatbot from '../logic/Chatbot';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../logic/Theme';

function Layout() {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Chatbot theme={theme} />
        </>
    );
}

export default Layout;