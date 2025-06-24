import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ContentComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            CurrentTheme: {theme}
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
