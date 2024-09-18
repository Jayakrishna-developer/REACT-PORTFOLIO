import React, { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="header-content">
        <div className="nav">
          <a href="#Content">Home</a>
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </div>
        <button className="toggle-btn" onClick={toggleDarkMode}>
          <i className={`fas ${darkMode ? "fa-toggle-on" : "fa-toggle-off"}`} />
          <span className="icon">
            <i className={`fas ${darkMode ? "fa-moon" : "fa-sun"}`} />
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
