import React, { useState } from "react";
import TabSwitcher from "./TabSwitcher";
import { Link } from "react-router-dom";
import FlyingButton from "./FlyingButton";

function Hero() {
    const [isFlying, setIsFlying] = useState(false);

    const handleClick = () => {
        setIsFlying(true);
        // optional delay before navigation (so animation plays)
        setTimeout(() => {
            window.location.href = "/journey";
        }, 800);
    };

    return (
        <div className="hero m-0">
            <div className="content-wrapper container">
                <h1 className="sr-only">Chotirat Jonggit (Choti / jgchoti)</h1>
                <p>Hi! I am Choti.</p>
                <h1>I build with pixels and pipelines.</h1>
                <FlyingButton />
                <TabSwitcher />
            </div>
        </div>
    );
}

export default Hero;
