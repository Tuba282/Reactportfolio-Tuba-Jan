// src/Settings/ThemeProvider.jsx
import React, { createContext, useState } from 'react';
import themeOptions from './themeOptions';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(themeOptions[0]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;