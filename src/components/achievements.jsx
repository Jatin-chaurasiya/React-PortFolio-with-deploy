import React from "react";

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
              <i className="fa-brands fa-hackerrank"></i>
            </div>
            <h3 className="achievement-title">HackerRank Certification</h3>
            <p className="achievement-description">
              Certified in <strong>Java(Basic)</strong>
            </p>
            <a href="https://www.hackerrank.com" target="_blank" className="cert-link">View Certificate</a>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fa-brands fa-hackerrank"></i>
            </div>
            <h3 className="achievement-title">Problem Solving</h3>
            <p className="achievement-description">
              Certified in <strong>DSA</strong>
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3 className="achievement-title">LeetCode</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;