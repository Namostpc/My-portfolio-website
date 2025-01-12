import "./experiences.scss";
import React, { useState } from "react";
import ninjaPic from "../../assets/ninjapic.png";
import Cheddo_logo from "../../assets/cheddo-logo.png";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import aosfunc from "../../aos";

function experiences() {

  aosfunc()
  const [readmoreqa, setReadmoreQA] = useState(false);
  const [readmorebe, setReadmoreBE] = useState(false);

  const btnQA = readmoreqa ? "Read less" : "Read more";
  const btnBe = readmorebe ? "Read less" : "Read more";
  const readmoreQA = (
    <p>
      By using tools Postman for testing API response from back-end which
      corrected or not and I have to create the testcase as well for document it
      to record what was happend when it error.
    </p>
  );
  const readmoreBE = (
    <p>
      with Tester and QA about how the features work.Fixing the bugs from the
      QA/Tester document when the issues occured.By used Typescript as primary
      language and uesed Postgesql for query data from database.
    </p>
  );

  return (
    <section id="experiences" data-aos="fade-down" data-aos-duration="1000">
      <div className="header-text">
        <h1>My Experiences</h1>
      </div>
      <div className="experiences-container" data-aos="fade-down" data-aos-duration="1500">
        <div className="card-container" >
          <img src={ninjaPic} alt="ninja" className="card-img" />
          <h1 className="card-title">Ninja Van</h1>
          <p className="description">
            I worked at ninja van for 1 year as Associate Recovery Operation.
            <br />
            My responsibility was get all the problems about damanged parcels
            and lost parcels of every stole and then tried to sovled it or calm
            it to the customer.
          </p>
        </div>
        <div className="card-container" >
          <img src={Cheddo_logo} alt="ninja" className="card-img" />
          <h1 className="card-title">
            Cheddo Tech <h5>(QA/Tester)</h5>
          </h1>
          <p className="description">
            I worked at Cheddo Technology LTD. as Quality Assureance and Tester
            for 1 year.
            <br />
            My responsibility was testing about new features that build by
            back-end developer and font-end developer...
            <button
              className="btn"
              onClick={() => {
                setReadmoreQA(!readmoreqa);
              }}
            >
              {btnQA}
            </button>
            {readmoreqa && readmoreQA}
          </p>
        </div>
        <div className="card-container">
          <img src={Cheddo_logo} alt="ninja" className="card-img" />
          <h1 className="card-title">
            Cheddo Tech <h5>(Back-end Developer)</h5>
          </h1>
          <p className="description">
            I worked at Cheddo Technology LTD. as Back-end developer for another
            1 year.
            <br />
            My responsibility was create the features and routing of the APIs
            according to requirment from the document and communicated...
            <button
              className="btn"
              onClick={() => {
                setReadmoreBE(!readmorebe);
              }}
            >
              {btnBe}
            </button>
            {readmorebe && readmoreBE}
          </p>
        </div>
      </div>
    </section>
  );
}

export default experiences;
