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
                <p>Hi! I am Choti.</p>
                <h1>I work with pixels and patterns.</h1>
                <TabSwitcher />
                {/* <button
                    aria-label="Toggle between Web and Data projects"
                    role="switch"
                    aria-checked={isWeb}
                    onClick={handleToggle}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleToggle()}
                    className="toggle-button"
                    style={{
                        "--toggle-bg": isWeb ? "#687856" : "#552205",
                    }}
                >
                    <motion.div
                        layout
                        transition={spring}
                        className="toggle-knob"
                        style={{
                            left: isWeb ? 4 : "calc(100% - 40px)",
                            color: isWeb ? "#687856" : "#f9d6d6",
                        }}
                    >
                        {isWeb ? "💻" : "📊"}
                    </motion.div>

                    <span className={`label data ${!isWeb ? "active" : "inactive"}`}>Data</span>
                    <span className={`label web ${isWeb ? "active" : "inactive"}`}>Web</span>
                </button> */}
            </div>
        </div>
    );
}

export default Hero;