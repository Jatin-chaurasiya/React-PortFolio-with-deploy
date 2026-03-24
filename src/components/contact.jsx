import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

  useEffect(() => {
    emailjs.init("HsjfJJYh_xKREYqDC");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6m8ihfx", "template_e1tcjcn", e.target)
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send message");
        console.error(error);
      });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">

        <div className="section-title-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's talk!
          </p>
        </div>

        <div className="contact-container">

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-heading">
              Let's Build Something Amazing Together
            </h3>

            <p className="contact-text">
              Feel free to reach out using any method below.
            </p>

            <div className="contact-links">

              <a href="tel:+918953845584" className="contact-link">
                <div className="contact-link-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-label">Phone</span>
                  <span className="contact-link-value">+91 8953845584</span>
                </div>
              </a>

              <a href="mailto:jatinkumar638881@gmail.com" className="contact-link">
                <div className="contact-link-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">jatinkumar638881@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">
                 <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className="contact-link-text">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">JatinChaurasiya</span>
                </div>
              </a>

            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" name="from_name" className="form-control" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input type="email" name="from_email" className="form-control" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea name="message" className="form-control" placeholder="How can I help?" required />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;