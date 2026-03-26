import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Achievements = () => {
  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievements-container">
          <div className="achievement-card">
            <div className="achievement-icon">
              <FontAwesomeIcon icon={faHackerrank} />
            </div>
            <h3 className="achievement-title">HackerRank Certification</h3>
            <p className="achievement-description">
              Certified in <strong>Problem Solving(Basic)</strong>
            </p>
            <a
              href="https://www.hackerrank.com/certificates/ab4fd27da80e"
              target="_blank"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <FontAwesomeIcon icon={faHackerrank} />
            </div>
            <h3 className="achievement-title">HackerRank Certification</h3>
            <p className="achievement-description">
              Certified in <strong>Java(Basic)</strong>
            </p>
            <a
              href="https://www.hackerrank.com/certificates/41b7a674a380"
              target="_blank"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3 className="achievement-title">LeetCode</h3>
            <a
              href="https://leetcode.com/u/Jatinchaurasiya/"
              target="_blank"
              className="cert-link"
            >
              View Profile
            </a>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3 className="achievement-title">Open Source</h3>
            <p className="achievement-description">
              Certified from <strong>Code-Social</strong>
            </p>
            <a
              href="https://drive.google.com/file/d/10OWIBtd1QZq7J7YmFdcK46sz_BsSgkNp/view?usp=sharing"
              target="_blank"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <h3 className="achievement-title">GitHub</h3>
            <a
              href="https://github.com/Jatin-chaurasiya"
              target="_blank"
              className="cert-link"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
