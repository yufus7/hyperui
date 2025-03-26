import React, { useContext } from "react";

// contexts
import { ThemeContext } from "../contexts/ThemeContext";

import Logo from "../assets/logo/hyper_logo.png";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg mt-1">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="HyperUI Logo" width="120" />
          </a>
          <button onClick={changeTheme} className="btn btn-sm btn-primary">
            {theme === "light" ? "Koyu Mod" : "Açık Mod"}
          </button>
        </div>
      </nav>

      <div className="nav-space"></div>

      <nav className="navbar navbar-expand-lg p-1">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link ps-0" href="/">
                Ana Sayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Github
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
