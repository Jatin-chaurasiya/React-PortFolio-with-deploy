import React from "react";

import img1 from "../assets/thumbnail6.jpg";
import img2 from "../assets/thumbnail1.jpg";
import img3 from "../assets/thumbnail2.png";
import img4 from "../assets/thumbnail3.png";
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
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">CRM</h3>
              <p className="project-description">
                REST API based CRM using Spring Boot + MySQL.
              </p>
              <div className="project-links">
                <a href="https://github.com/Jatin-chaurasiya/Customer-Relationship-Managemen" target="_blank" className="project-link">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img2} alt="Student" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Student Result</h3>
              <p className="project-description">
                Manage student data using Spring Boot.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img3} alt="Shop" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Farmer Shop</h3>
              <p className="project-description">
                Static e-commerce UI using HTML/CSS/JS.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img4} alt="SkillDrift" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">SkillDrift</h3>
              <p className="project-description">
                Tailwind UI project.
              </p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img5} alt="Portfolio" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Portfolio</h3>
              <p className="project-description">
                Personal portfolio using Spring Boot.
              </p>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <div className="project-image">
              <img src={img6} alt="Money Manager" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Money Manager</h3>
              <p className="project-description">
                Track income & expenses.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;