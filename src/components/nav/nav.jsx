import React from "react";
import "./nav.scss";
function Navbar() {
  return (
    <section id="nav-bar">
    <div className="nav-container">
      <div className="logo-container">
        <a href="/">NAMO</a>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#nav-bar">Home</a>
        </li>
        <li>
          <a href="#about" onClick="document.getElementby">
            About
          </a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    </section>
  );
}

export default Navbar;
