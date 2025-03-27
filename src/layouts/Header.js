import React, { useContext, useState } from "react";
import "../assets/styles/header.css";

// router
import { Link, NavLink } from "react-router-dom";

// contexts
import { ThemeContext } from "../contexts/ThemeContext";

// logo
import Logo from "../assets/logo/hyper_logo.png";

// icons
import { GiSpellBook, GiSwordsEmblem } from "react-icons/gi";
import { FaCrosshairs, FaGamepad } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={`header ${theme}`}>
      <nav className="navbar-header">
        <div className="container h-100 pt-1 pb-1">
          <ul className="navbar-menu">
            <li className="menu-item">
              <div className="menu-link-header">Github</div>
            </li>
            <li className="menu-item">
              <div className="menu-link-header">Linkedin</div>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar top-navbar mt-2 mb-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="hyperui Logo" width="120" />
          </Link>
          <div className="theme-switch desktop-theme-switch">
            <input
              type="checkbox"
              id="theme-toggle-desktop"
              onChange={changeTheme}
              checked={theme === "dark"}
            />
            <label htmlFor="theme-toggle-desktop" className="switch-label">
              <span className="switch-ball"></span>
            </label>
          </div>
          <div className="hamburger-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </nav>

      <div className="nav-space"></div>

      <nav className={`navbar bottom-navbar ${menuOpen ? "open" : ""}`}>
        <div className="container">
          <ul className="navbar-menu">
            <li className="menu-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                <FaGamepad className="menu-icon" />
                Ana Sayfa
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/valorant-vp"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                <FaCrosshairs className="menu-icon" />
                Valorant VP
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/lol-rp"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                <GiSpellBook className="menu-icon" />
                LoL RP
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/metin2-pvp"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                <GiSwordsEmblem className="menu-icon" />
                Metin2 PvP
              </NavLink>
            </li>
            <li className="menu-item mobile-theme-switch">
              <div className="theme-switch">
                <input
                  type="checkbox"
                  id="theme-toggle-mobile"
                  onChange={changeTheme}
                  checked={theme === "dark"}
                />
                <label htmlFor="theme-toggle-mobile" className="switch-label">
                  <span className="switch-ball"></span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
