import React, { useState } from "react";
import "./nav.scss";
import Aos from "aos";
import aosfunc from "../../aos";
import Hamburger from "hamburger-react";
function Navbar() {
  aosfunc();
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="nav-bar">
      <div
        className="nav-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="logo-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a href="/">NAMO</a>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#nav-bar">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
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
        {/* <div className="hamburger-container">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <ul className="hamburger-list">
              <li>
                <a href="#nav-bar">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
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
          )}
        </div> */}
      </div>
    </section>
  );
}

export default Navbar;
