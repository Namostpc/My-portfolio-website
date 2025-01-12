import React, {useEffect} from "react";
import "./homepage.scss";
import pic1 from "../../assets/pic1.jpeg";
import { FaLine, FaArrowCircleDown } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import aosfunc from '../../aos'

function homepage() {

  aosfunc()
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-intro">
          <h1 data-aos="fade-up" data-aos-duration="1000">Namo Sutthipreecha</h1>
          <h2 data-aos="fade-up" data-aos-duration="1000">Junior font-end & back-end developer</h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            I'm Junior developer,who has a passion in coding and have some
            experiences in the IT industry for 2 year reach out to if you'd like
            to know more!!
          </p>
          <div className="contact-btn" data-aos="fade-up" data-aos-duration="1000">
            <button>Contact Me</button>
            <div className="social-media-contact">
              <ul>
                <li>
                  <a href="#line" className="line">
                    <FaLine />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/namo-sutthipreecha-202491346/?locale=en_US"
                    className="linkedin"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/namostpc/"
                    className="ig"
                    target="_blank"
                  >
                    <FaSquareInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/namo.bodyfreeze/"
                    className="fb"
                    target="_blank"
                  >
                    <FaSquareFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="home-img" data-aos="fade-up-right" data-aos-duration="1500">
          <div className="border-img">
            <img src={pic1} alt="hero-profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default homepage;
