import React from "react";
import "./about.scss";
import pic2 from "../../assets/pic2.jpeg";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import aosfunc from '../../aos'

function About() {
  aosfunc()
  return (
    <section id="about" data-aos="fade-down" data-aos-duration="1000">
      <div className="header-text">
        <h1>About Me</h1>
      </div>
      <div className="about-container">
        <div className="about-img" data-aos="fade-up-right" data-aos-duration="500">
          <img src={pic2} alt="about img" />
        </div>
        <div className="about-text" data-aos="fade-up-left" data-aos-duration="500">
          <p>
            Hello visitor It's my pleasure to introduce myself.
            <br />
            My name is Namo Sutthipreecha, you can call me "mo" now I'm 27 years
            old. I graduated from Mea Fah Luang University with GPA 3.4 (2nd
            honor) in Aviation Business Management (Logistic Management).
            <br /> <br /> I have some experience in IT industry for 2 years, I was be
            Quality Assurance for 1 year and I was be back-end developer for 1
            year with the same company.
            <br />
            Now I'm seeking for a new experince that I can learn the new thing
            and new work environment to work with other people and enjoy the
            coding!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
