import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../App.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    };
    
    let icono = theme === 'light' ? <FaMoon color='black' size='1.5rem' /> : <FaSun color='white' size='1.7rem' />;

  return (
    <div className="dark:bg-gray-800 bg-white flex pt-5 justify-end pr-80">
      <button onClick={handleThemeSwitch}>
        {icono}
      </button>
    </div>
  );
};

export default DarkMode;
