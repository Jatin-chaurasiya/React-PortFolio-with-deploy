import React from "react";

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">

        <div className="section-title-container">
          <h2 className="section-title">Education & Experience</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-icon"><i className="fa-solid fa-person-chalkboard"></i></div>
            <div className="timeline-content">
              <div className="timeline-date">2018 - 2020</div>
              <h3 className="timeline-title">High School</h3>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"><i className="fa-solid fa-code"></i></div>
            <div className="timeline-content">
              <div className="timeline-date">2020 - 2022</div>
              <h3 className="timeline-title">Senior Secondary</h3>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"><i className="fa-solid fa-clapperboard"></i></div>
            <div className="timeline-content">
              <div className="timeline-date">2023 - 2027</div>
              <h3 className="timeline-title">B.Tech</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;