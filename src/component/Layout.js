import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [theme, setTheme] = useState('web');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <Navbar theme={theme} setTheme={setTheme} />
            <main>
                <Outlet context={{ theme, setTheme }} />
            </main>
        </>
    );
}

export default Layout;
