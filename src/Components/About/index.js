import React from "react";
import App from "../../App";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-wrapper-flex">
        <h2 className="about gradient">About me</h2>
        <p className="about">
          I'm currently a student at IITG from India. I love to make things
          whether its in the coding world or real world!
          <br />
          <br />
          Love exploring and contributing to Open Source!
          <br />
          <br />
          <span className="spoiler">Pss. I use Arch BTW{" "}
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Archlinux-icon-crystal-64.svg"
          /></span>
        </p>
      </div>
      <div className="about-wrapper-flex">
        <h2 className="about gradient">Contact me</h2>
        <p className="about">
          Feel free to ping me!
        </p>
        <ul>
          <li><a href="https://github.com/AmreshSinha">Github</a></li>
          <li><a href="https://www.linkedin.com/in/aps-amresh/">Linkedin</a></li>
          <li><a href="mailto:theamresh.sinha@gmail.com">Mail</a></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
