import React from "react";
import "./contact.scss";
import telephone_pic from "../../assets/telephone-bill.svg";
import gmail_pic from "../../assets/gmail.svg";
import linkedin_icon from "../../assets/linkedin-icon.svg";
import github_logo from "../../assets/github-142.svg";
import line_logo from "../../assets/line-messenger-logo.svg";
import { FaArrowCircleUp} from "react-icons/fa";
import aosfunc from "../../aos";

function contact() {
    aosfunc()
  return (
    <section id="contact" data-aos="fade-up" data-aos-duration="1000">
      <div className="header-text">
        <h1>Contact Me</h1>
        <div className="sub-header">
          <h4>Feel free to reach out!</h4>
        </div>
      </div>
      <div className="contact-wrap">
        <div className="contact-container" data-aos="zoom-in-down" data-aos-duration="1500">
          <div className="contact-detail">
            <img src={telephone_pic} alt="" />
            <p>086-363-9603</p>
          </div>
        </div>
        <div className="contact-container" data-aos="zoom-in-down" data-aos-duration="1500">
          <div className="contact-detail">
            <img src={gmail_pic} alt="" />
            <p>namorotee@gmail.com</p>
          </div>
        </div>
        <div className="contact-container" data-aos="zoom-in-down" data-aos-duration="1500">
          <div className="contact-detail">
            <img src={line_logo} alt="" />
            <p>ID: namostpc</p>
          </div>
        </div>
        <div className="contact-container" data-aos="zoom-in-down" data-aos-duration="1500">
          <div className="contact-detail">
            <img src={linkedin_icon} alt="" />
            <a href="https://www.linkedin.com/in/namo-sutthipreecha-202491346/?locale=en_US">
              www.linkedin.com/namo-sutthipreecha
            </a>
          </div>
        </div>
        <div className="contact-container" data-aos="zoom-in-down" data-aos-duration="1500">
          <div className="contact-detail">
            <img src={github_logo} alt="" />
            <a href="https://github.com/Namostpc">
              https://github.com/Namostpc
            </a>
          </div>
        </div>
      </div>
      <div className="point-down">
        <a href="#nav-bar">
          <FaArrowCircleUp />
        </a>
      </div>
    </section>
  );
}

export default contact;
