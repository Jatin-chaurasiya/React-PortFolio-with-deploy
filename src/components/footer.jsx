import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              Jatin Chaurasiya
            </a>

            <p className="footer-text">
              Passionate about solving complex problems through code and
              teaching.
            </p>

            <div className="footer-social">
              <a href="tel:+8953845584" className="social-link">
                <FontAwesomeIcon icon={faPhone} />
              </a>

              <a
                href="mailto:jatinkumar638881@gmail.com"
                className="social-link"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

              <a
                href="https://www.linkedin.com/in/jatin-chaurasiya-70b22b2b4/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a
                href="https://github.com/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-container">
            <h3 className="footer-heading">Quick Links</h3>

            <div className="footer-links">
              <a href="#home" className="footer-link">
                <i className="fas fa-chevron-right"></i> Home
              </a>
              <a href="#about" className="footer-link">
                <i className="fas fa-chevron-right"></i> About
              </a>
              <a href="#projects" className="footer-link">
                <i className="fas fa-chevron-right"></i> My Work
              </a>
              <a href="#experience" className="footer-link">
                <i className="fas fa-chevron-right"></i> Experience
              </a>
              <a href="#achievements" className="footer-link">
                <i className="fas fa-chevron-right"></i> Achievements
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-links-container">
            <h3 className="footer-heading">Social</h3>

            <div className="footer-links">
              <a
                href="https://github.com/Jatin-chaurasiya"
                className="footer-link"
              >
                <i className="fas fa-chevron-right"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-chaurasiya-70b22b2b4/"
                className="footer-link"
              >
                <i className="fas fa-chevron-right"></i> Linkedin
              </a>
              <a
                href="https://www.instagram.com/mr.jatin_chaurasiya8953/"
                className="footer-link"
              >
                <i className="fas fa-chevron-right"></i> Instagram
              </a>
              <a href="https://www.facebook.com/" className="footer-link">
                <i className="fas fa-chevron-right"></i> Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2025 Jatin Chaurasiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
