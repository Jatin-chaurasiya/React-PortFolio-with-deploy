import React from "react";
import profile from "../assets/profile.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>

      <div className="container hero-container">
        <div className="hero-content">
          
          <div className="hero-greeting">Hi there, I'm</div>

          <h1 className="hero-title">
            <span className="gradient-text">Jatin Chaurasiya</span>
          </h1>

          <h2 className="hero-subtitle">
            Java Developer | Building Projects & Sharing Knowledge
          </h2>

          <p className="hero-description">
            Java Developer and problem solver, passionate about building efficient solutions and sharing knowledge.
          </p>

          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1Zfy07540eEdxa485JjW25RuUel-2S2bM/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noreferrer">
              View My Resume <i className="fas fa-arrow-right"></i>
            </a>

            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="social-links">
            <a href="tel:+919876543210" className="social-link">
              <FontAwesomeIcon icon={faPhone} />
            </a>

            <a href="mailto:jatinkumar638881@gmail.com" className="social-link">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            <a href="https://www.linkedin.com/in/jatin-chaurasiya-70b22b2b4/" target="_blank" className="social-link" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a href="https://github.com/Jatin-chaurasiya" target="_blank" className="social-link" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-visual-inner">
            <div className="hero-visual-frame">
              <img
                src={profile}
                alt="Profile"
                style={{ width: "90%", height: "90%", objectFit: "cover", borderRadius: "15px" }}
              />
            </div>
            <div className="hero-visual-frame"></div>
            <div className="hero-visual-frame"></div>
          </div>

          <div className="hero-stats stats-1">
            <div className="hero-stats-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="hero-stats-text">
              <div className="hero-stats-label">Java</div>
              <div className="hero-stats-value">Developer</div>
            </div>
          </div>

          <div className="hero-stats stats-2">
            <div className="hero-stats-icon">
             <FontAwesomeIcon icon={faChalkboardUser} />
            </div>
            <div className="hero-stats-text">
              <div className="hero-stats-label">Creative Thinker</div>
              <div className="hero-stats-value">Disciplined</div>
            </div>
          </div>

          <div className="hero-stats stats-3">
            <div className="hero-stats-icon">
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <div className="hero-stats-text">
              <div className="hero-stats-label">Learner</div>
              <div className="hero-stats-value">Knowledgeable</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-indicator-line">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;