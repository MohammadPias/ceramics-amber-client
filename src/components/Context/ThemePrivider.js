import React, { createContext } from 'react';
import { theme } from './Theme';

export const ThemeContext = createContext(theme)

const ThemePrivider = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemePrivider;