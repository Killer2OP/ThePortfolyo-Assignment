import Counter from "./Counter";

import { useState, useEffect, useContext } from "react";
import UserContext from "../userContext/userContext";
const About = ({ dark }) => {
  const data = useContext(UserContext);
  return (
    <div className="tm_section" id="about">
      <div className="tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img className="rounded" src={`${data?.about?.avatar?.url}`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={data?.about?.exp_year} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={data?.about?.some_total} />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a ${data && data?.about?.title}`}</span>
                <h3>{data && data.about.subTitle}</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {data?.about?.description}
                </p>
              </div>
              <div
                className="tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
