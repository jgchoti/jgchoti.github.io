import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./Theme";

const tabs = [
    { icon: "💻", label: "Web" },
    { icon: "📊", label: "Data" },
];

export default function TabSwitcher() {
    const { theme, setTheme } = useTheme()
    const [selectedTab, setSelectedTab] = useState(
        tabs.find((tab) => tab.label.toLowerCase() === theme) || tabs[0]
    );

    useEffect(() => {
        setTheme(selectedTab.label.toLowerCase());
    }, [selectedTab, setTheme]);

    return (
        <div className="container tab-container">
            <ul className="nav justify-content-center tab-style">
                {tabs.map((tab) => (
                    <motion.li
                        key={tab.label}

                        initial={false}
                        animate={{
                            backgroundColor: tab === selectedTab ? "#fff" : "#f3f3f3",
                        }}
                        layout
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab.icon} {tab.label}
                        {tab === selectedTab && (
                            <motion.div
                                layoutId="underline"
                                className="position-absolute start-0 end-0 bottom-0"
                            />
                        )}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
