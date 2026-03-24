import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'




const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">

        <div className="section-title-container">
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            My professional journey and educational background
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faChalkboardUser} />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">2018 - 2020</div>
              <h3 className="timeline-title">High School</h3>
              <h4 className="timeline-subtitle">P.L.K.P Inter College</h4>
              <p className="timeline-description">
                Completed my 10th grade with strong academic foundation.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">2020 - 2022</div>
              <h3 className="timeline-title">Senior Secondary</h3>
              <h4 className="timeline-subtitle">K.N.P.N Inter College</h4>
              <p className="timeline-description">
                Studied PCM and built strong analytical skills.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faClapperboard} />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">2023 - 2027</div>
              <h3 className="timeline-title">B.Tech(CSE-AIML)</h3>
              <h4 className="timeline-subtitle">ABES Engineering College</h4>
              <p className="timeline-description">
                Currently learning Java, DSA, and backend development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faChalkboardUser} />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">2023 - Present</div>
              <h3 className="timeline-title">Fresher</h3>
              <h4 className="timeline-subtitle">No Industry Experience</h4>
              <p className="timeline-description">
                Working on projects + DSA to build strong development skills.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;