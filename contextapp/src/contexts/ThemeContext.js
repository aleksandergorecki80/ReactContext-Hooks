import React, { createContext } from 'react';

export const ThemeContext = createContext();

const state = {
    isLightTheme: false,
    light: { text: '#555', ui: '#ddd', bg: '#eee' },
    dark: { text: '#ddd', ui: '#333', bg: '#555' }
}

const ThemeContextProvider = ({ children }) => {

  return (
        <ThemeContext.Provider value={{ ...state }}>
            { children }
        </ThemeContext.Provider>
        );
};

export default ThemeContextProvider;
