import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', mode === 'dark');
        localStorage.setItem('theme', mode);
    }, [mode]);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored) setMode(stored);
    }, []);

    const toggleTheme = () => setMode(prev => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
