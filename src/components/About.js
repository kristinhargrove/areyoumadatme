import React from "react";
import "./About.css";
import "../App.css";

import Kristin from "../images/kristin.jpg";
import InstagramIcon from "../images/instagram-icon.png";
import GithubIcon from "../images/github-icon-1.png";
import LinkedinIcon from "../images/linkedin-icon.png";

const About = () => {
  return (
    <div className="main-content-50">
      <img src={Kristin} width="500" alt="Kristin" />
      <br />

      <h2 className="no_margin">Kristin Hargrove</h2>
      <h4 className="no_margin">
        Software developer and former mortgage expert.
      </h4>
      <img src={InstagramIcon} alt="instagram" className="socialmedia_icon" />
      <a
        href="https://github.com/kristinhargrove"
        target="_blank"
        rel="noreferrer"
        className="outline-icon"
      >
        <img src={GithubIcon} alt="Github" className="socialmedia_icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/kristin-hargrove-65462179/"
        target="_blank"
        rel="noreferrer"
        className="outline-icon"
      >
        <img src={LinkedinIcon} alt="Linkedin" className="socialmedia_icon" />
      </a>
      <br />

      <p>
        When she's not helping people buy houses or making websites, she likes
        to read, play games and sports, and be outside in the fresh air.
        <br /><br />
        She thanks her boyfriend, Spencer, for being the inspiration for this
        quiz. She's truly sorry for all the times she made him mad. Sometimes,
        she just doesn't want to do the dishes.
      </p>
      See the rest of my work @ 
      <a
        href="https://www.kristin-hargrove.com"
        target="_blank"
        rel="noreferrer"
      >
        kristin-hargrove.com
      </a>
    </div>
  );
};

export default About;
