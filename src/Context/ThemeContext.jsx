import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    function toggleTheme() {
        setIsDarkTheme(!isDarkTheme);
    }
    const [isDarkTheme, setIsDarkTheme] = useState("light");
    const Theme = {
        LIGHT: "light",
        DARK: "dark",
    }
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}