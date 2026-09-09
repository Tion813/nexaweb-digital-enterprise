import { useState } from "react";
import "./Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
      <a href="#home" className="logo" onClick={closeMenu}>
  <img src={logo} alt="Nexaweb Digital Enterprise" />
</a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </nav>

        <a href="#contact" className="header-cta">
          Get Started
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;