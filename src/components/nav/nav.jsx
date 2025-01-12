import React, {useEffect} from "react";
import "./nav.scss";
import Aos from "aos";
import aosfunc from '../../aos'
function Navbar() {

  aosfunc()
  return (   
    <section id="nav-bar">
    <div className="nav-container" data-aos="fade-up" data-aos-duration="1000">
      <div className="logo-container" data-aos="fade-up" data-aos-duration="1000">
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
          <a href="#skills">Skills</a>
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
