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
import aosfunc from "../../aos";


function skills() {
    aosfunc()
  return (
    <section id="skills" data-aos="fade-up" data-aos-duration="1000">
      <div className="header-text">
        <h1>Skills</h1>
      </div>
      <div className="skills-contatiner">
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={html_logo} alt="html" />
          <p>Html</p>
        </div>
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={Css_logo} alt="css" />
          <p>Css</p>
        </div>
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={scss_logo} alt="scss" />
          <p>Scss</p>
        </div>
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={react_pic} alt="scss" />
          <p>React</p>
        </div>
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={js_logo} alt="scss" />
          <p>Javascript</p>
        </div>
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={ts_logo} alt="scss" />
          <p>Typescript</p>
        </div>
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={postgresql_logo} alt="scss" />
          <p>Postgresql</p>
        </div>
        <div className="skill-list" data-aos="zoom-in-up">
          <img src={postman_logo} alt="scss" />
          <p>Postman</p>
        </div>
      </div>
    </section>
  );
}

export default skills;
