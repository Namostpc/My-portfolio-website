import "./projects.scss";
import React from "react";
import port_pic from "../../assets/portfolio-pic.png";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";


function projects() {
  return (
    <section id="projects">
      <div className="header-text">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-card-container">
          <img src={port_pic} alt="portpic" className="project-card-img" />
          <h1 className="project-card-title">Portfolio website project</h1>
          <p className="project-card-description">
            <ul className="tools-List">
                <li>ReactJS</li>
            </ul>
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
      <div className="point-down">
        <a href="#nav-bar">
          <FaArrowCircleUp />
        </a>
        <a href="#experiences">
          <FaArrowCircleDown />
        </a>
      </div>
    </section>
  );
}

export default projects;
