import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/thumbnail6.png";
import img2 from "../assets/thumbnail1.png";
import img3 from "../assets/thumbnail2.png";
import img4 from "../assets/agriconnect.png";
import img5 from "../assets/image2.png";
import img6 from "../assets/image3.png";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">
            <strong>Java-Based Applications</strong> I design scalable apps.
            <br />
            <strong>DSA</strong> Improving problem solving skills.
          </p>
        </div>

        <div className="projects-container">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img1} alt="CRM" />
              <div className="project-overlay"></div>
              <div className="project-tags">
                <span className="project-tag">Spring Boot</span>
                <span className="project-tag">MySQL</span>
                <span className="project-tag">JPA</span>
                <span className="project-tag">Thymeleaf</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">CRM(Major Project)</h3>
              <p className="project-description">
                Built a REST API-based Customer Relationship Management (CRM)
                system using Spring Boot, MySQL, and Thymeleaf. Implemented
                features like customer management, lead tracking, and
                interaction handling with a clean layered architecture
                (Controller–Service–Repository). Designed scalable APIs and a
                dynamic UI for efficient data management.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Jatin-chaurasiya/Customer-Relationship-Management"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={img4} alt="CRM" />
              <div className="project-overlay"></div>
              <div className="project-tags">
                <span className="project-tag">Spring Boot(Backend)</span>
                <span className="project-tag">MySQL</span>
                <span className="project-tag">React js(frontend)</span>
                <span className="project-tag">Python library</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">AgriConnect(Major Project)</h3>
              <p className="project-description">
                AgriConnect is a smart agriculture platform designed to support
                farmers with data-driven decisions. It features an interactive
                dashboard integrated with an AI chatbot, real-time weather
                monitoring, crop recommendation system, and government scheme
                guidance.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Jatin-chaurasiya/AgriConnect"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={img6} alt="Money Manager" />
              <div className="project-overlay"></div>
              <div className="project-tags">
                <span className="project-tag">React js</span>
                <span className="project-tag">Spring boot(backend)</span>
                <span className="project-tag">MySql</span>
                <span className="project-tag">Tailwind</span>
                <span className="project-tag">Bootstrap</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Money Manager(Major Project)</h3>
              <p className="project-description">
                A simple financial management application that allows users to
                record and monitor their income and expenses. It provides
                real-time balance updates, categorizes transactions, and helps
                users track spending patterns for better budgeting.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Jatin-chaurasiya/MyShop-Project"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://chaurasiyakrashiseva.netlify.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img5} alt="Portfolio" />
              <div className="project-overlay"></div>
              <div className="project-tags">
                <span className="project-tag">React js</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">icon library</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Portfolio(Mini-Project)</h3>
              <p className="project-description">
                Developed a full-stack personal portfolio website using React.js and CSS for a modern, responsive frontend, integrated with Spring Boot for backend services. The portfolio showcases projects, skills, and achievements, with dynamic data handling and clean UI design.
              </p>
               <div className="project-links">
                <a
                  href="https://github.com/Jatin-chaurasiya/React-PortFolio-with-deploy"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img2} alt="Student" />
              <div className="project-overlay"></div>
              <div className="project-tags">
                <span className="project-tag">Servlet</span>
                <span className="project-tag">JPA</span>
                <span className="project-tag">Tomcat Server</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Student Result</h3>
              <p className="project-description">
                Built a Student Result Management System with Spring Boot
                featuring admin panel to add, update, and manage student results
                and records efficiently.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Jatin-chaurasiya/Student-Result-Management"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img3} alt="Shop" />
              <div className="project-overlay"></div>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">Java Script</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Farmer Shop</h3>
              <p className="project-description">
                Built a responsive Farmer Shop e-commerce frontend using HTML,
                CSS, and JavaScript with product listings and user-friendly
                interface for online shopping simulation.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/Jatin-chaurasiya/MyShop-Project"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://chaurasiyakrashiseva.netlify.app/"
                  target="_blank"
                  className="project-link"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
