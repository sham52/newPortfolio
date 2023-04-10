import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (i) => {
    setToggleState(i);
  };
  return (
    <section className="qualification section" id="qualification">
      <div className="qualification__header">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personel Journey</span>
      </div>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* EDUCATION */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* DATA CELL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Home Office </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Voluntarily Staff / IT</h3>
                <span className="qualification__subtitle">
                  Counter-Terrorism Branch
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Home Office </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Voluntarily Staff / IT</h3>
                <span className="qualification__subtitle">
                  Counter-Terrorism Branch
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>
          </div>
          {/* EXPERIENCE */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* DATA CELL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Başka Development</h3>
                <span className="qualification__subtitle">Home Office </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Başka Voluntarily Staff / IT</h3>
                <span className="qualification__subtitle">
                  Counter-Terrorism Branch
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Daha da başka Web Development</h3>
                <span className="qualification__subtitle">Home Office </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Voluntarily Staff / IT</h3>
                <span className="qualification__subtitle">
                  Counter-Terrorism Branch
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
