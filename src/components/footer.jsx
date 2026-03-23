import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">Jatin Chaurasiya</a>

            <p className="footer-text">
              Passionate about solving complex problems through code and teaching.
            </p>

            <div className="footer-social">
              <a href="tel:+8953845584" className="social-link">
                <i className="fas fa-phone-alt"></i>
              </a>

              <a href="mailto:jatinkumar638881@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>

              <a href="https://www.linkedin.com/in/jatin-chaurasiya-70b22b2b4/" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="https://github.com/Jatin-chaurasiya" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-container">
            <h3 className="footer-heading">Quick Links</h3>

            <div className="footer-links">
              <a href="#home" className="footer-link"><i className="fas fa-chevron-right"></i> Home</a>
              <a href="#about" className="footer-link"><i className="fas fa-chevron-right"></i> About</a>
              <a href="#projects" className="footer-link"><i className="fas fa-chevron-right"></i> My Work</a>
              <a href="#experience" className="footer-link"><i className="fas fa-chevron-right"></i> Experience</a>
              <a href="#achievements" className="footer-link"><i className="fas fa-chevron-right"></i> Achievements</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-links-container">
            <h3 className="footer-heading">Social</h3>

            <div className="footer-links">
              <a href="https://github.com/Jatin-chaurasiya" className="footer-link"><i className="fas fa-chevron-right"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/jatin-chaurasiya-70b22b2b4/" className="footer-link"><i className="fas fa-chevron-right"></i> Linkedin</a>
              <a href="https://www.instagram.com/mr.jatin_chaurasiya8953/" className="footer-link"><i className="fas fa-chevron-right"></i> Instagram</a>
              <a href="https://www.facebook.com/" className="footer-link"><i className="fas fa-chevron-right"></i> Facebook</a>
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