import "./skills.scss";
import React from "react";
import Css_logo from "../../assets/css3-logo.svg";
import html_logo from "../../assets/html-5-logo.svg";
import scss_logo from '../../assets/scss-logo.svg'
import js_logo from '../../assets/js-logo.svg'
import ts_logo from '../../assets/typescript.svg'
import react_pic from '../../assets/react.svg'
import postgresql_logo from '../../assets/postgresql.svg'
import postman_logo from '../../assets/postman-icon.svg'
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

function skills() {
  return (
    <section id="skills">
      <div className="header-text">
        <h1>Skills</h1>
      </div>
      <div className="skills-contatiner">
        <div className="skill-list">
          <img src={html_logo} alt="html" />
          <p>Html</p>
        </div>
        <div className="skill-list">
          <img src={Css_logo} alt="css" />
          <p>Css</p>
        </div>
        <div className="skill-list">
          <img src={scss_logo} alt="scss" />
          <p>Scss</p>
        </div>
        <div className="skill-list">
          <img src={react_pic} alt="scss" />
          <p>React</p>
        </div>
        <div className="skill-list">
          <img src={js_logo} alt="scss" />
          <p>Javascript</p>
        </div>
        <div className="skill-list">
          <img src={ts_logo} alt="scss" />
          <p>Typescript</p>
        </div>
        <div className="skill-list">
          <img src={postgresql_logo} alt="scss" />
          <p>Postgresql</p>
        </div>
        <div className="skill-list">
          <img src={postman_logo} alt="scss" />
          <p>Postman</p>
        </div>
      </div>
      <div className="point-down">
        <a href="#projects">
          <FaArrowCircleUp />
        </a>
        <a href="#contact">
          <FaArrowCircleDown />
        </a>
      </div>
    </section>
  );
}

export default skills;
