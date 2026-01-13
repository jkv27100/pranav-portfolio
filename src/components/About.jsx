import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src="/DSCF8233.jpg" alt="Professional portrait" />
          </div>
          <div className="about-text">
            <h3>Professional Model & Photographer</h3>
            <p>
              With a passion for capturing authentic moments and creating
              compelling visual narratives, I bring a unique perspective to both
              sides of the lens. My experience as a model has given me an innate
              understanding of angles, lighting, and composition, while my work
              as a photographer allows me to translate creative visions into
              striking imagery.
            </p>
            <p>
              I specialize in fashion, portrait, and editorial photography,
              combining technical expertise with artistic sensibility. Whether
              I'm in front of the camera or behind it, my goal is to create
              images that tell stories and evoke emotion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
