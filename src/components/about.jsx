import React from "react";
import aboutImg from "../assets/hero-section.jpg"; 

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        
        <div className="section-title-container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and what drives me
          </p>
        </div>

        <div className="about-container">
          
          <div className="about-content">
            <div className="about-tagline">My Background</div>
            <h3 className="about-heading">Learner of Today, Creator of Tomorrow</h3>

            <p className="about-text">
              I’m Jatin Chaurasiya, a 3rd-year CSE-AIML student at ABES Engineering College with a passion for coding and problem-solving.
            </p>

            <p className="about-text">
              I see myself as a dedicated learner, constantly exploring new technologies and improving my abilities.
            </p>

            <p className="about-text">
              My strengths include analytical thinking, perseverance, and curiosity.
            </p>

            <div className="skills-container">

              <div className="skill-item"><div className="skill-icon"><i className="fab fa-html5"></i></div><div className="skill-name">HTML</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fab fa-css3-alt"></i></div><div className="skill-name">CSS</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fab fa-java"></i></div><div className="skill-name">Java</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fas fa-code"></i></div><div className="skill-name">Spring Boot</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fab fa-js"></i></div><div className="skill-name">JavaScript</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fab fa-react"></i></div><div className="skill-name">Data JPA</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fas fa-database"></i></div><div className="skill-name">SQL</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fa-solid fa-server"></i></div><div className="skill-name">MySQL</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fa-solid fa-cloud"></i></div><div className="skill-name">Git</div></div>
              <div className="skill-item"><div className="skill-icon"><i className="fa-solid fa-code-branch"></i></div><div className="skill-name">GitHub</div></div>

            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-container">
              <div className="about-image-bg"></div>
              <img src={aboutImg} alt="About" className="about-image" />
            </div>

            <div className="about-decorations">
              <div className="about-decoration"></div>
              <div className="about-decoration"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;