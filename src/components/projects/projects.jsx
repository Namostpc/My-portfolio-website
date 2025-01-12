import "./projects.scss";
import React from "react";
import port_pic from "../../assets/portfolio-pic.png";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import aosfunc from "../../aos";


function projects() {
    aosfunc()
  return (
    <section id="projects" data-aos="fade-up" data-aos-duration="1000">
      <div className="header-text">
        <h1>My Projects</h1>
      </div>
      <div className="project-container" data-aos="fade-down" data-aos-duration="1500">
        <div className="project-card-container" >
          <img src={port_pic} alt="portpic" className="project-card-img" />
          <h1 className="project-card-title">Portfolio website project</h1>
          <p className="project-card-description">
            <p>This project for present about my portfolio website is this project contained everything about me </p>
            <ul className="tools-List">
                <li>ReactJS</li>
                <li>Scss</li>
                <li>Javascript</li>
            </ul>
          </p>
          <div className="project-card-btn">
            <h2>
              <a href="#">Check it out!</a>
            </h2>
          </div>
        </div>
        <div className="project-card-container" >
          <img src={port_pic} alt="portpic" className="project-card-img" />
          <h1 className="project-card-title">Portfolio website project</h1>
          <p className="project-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="project-card-btn">
            <h2>
              <a href="#">Check it out!</a>
            </h2>
          </div>
        </div>
        <div className="project-card-container">
          <img src={port_pic} alt="portpic" className="project-card-img" />
          <h1 className="project-card-title">Portfolio website project</h1>
          <p className="project-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur iure soluta accusantium sit doloribus veniam, at ipsa qui
            accusamus.
          </p>
          <div className="project-card-btn">
            <h2>
              <a href="#">Check it out!!!</a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default projects;
