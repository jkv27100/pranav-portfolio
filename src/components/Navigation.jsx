import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo"></div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <a onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
