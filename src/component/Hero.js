import React from "react";
import TabSwitcher from "./TabSwitcher";

function Hero() {
    // const isWeb = theme === "web";
    // const handleToggle = () => {
    //     setTheme(isWeb ? "data" : "web");
    // };
    return (
        <div className="hero m-0">
            <div className="content-wrapper container">
                <h1 className="sr-only">Chotirat Jonggit (Choti / jgchoti)</h1>
                <p>Hi! I am Choti.</p>
                <h1>I build with pixels and pipelines.</h1>
                <TabSwitcher />
            </div>
        </div>
    );
}

export default Hero;