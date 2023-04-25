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
                <h3 className="qualification__title">
                  Durugol <br /> Secondary-School
                </h3>
                <span className="qualification__subtitle">Student</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016-2017
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
                <h3 className="qualification__title">
                  Suluova Science <br />
                  High-School
                </h3>
                <span className="qualification__subtitle">Student</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Çankaya Anatolian <br /> High-School
                </h3>
                <span className="qualification__subtitle">Student</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2021
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
                <h3 className="qualification__title">TED University</h3>
                <span className="qualification__subtitle">Freshman</span>
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
                <h3 className="qualification__title">Voluntarily Staff / IT</h3>
                <span className="qualification__subtitle">
                  Counter-Terrorism Branch
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-2023
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
                <h3 className="qualification__title">Maybe some day...</h3>
                <span className="qualification__subtitle">
                  Still have hope :D
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Hayırlısı be gülüm.
                </div>
              </div>
            </div>

            {/* DATA CELL */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Maybe some day...</h3>
                <span className="qualification__subtitle">
                  Still have hope :D
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Hayırlısı be gülüm.
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
                <h3 className="qualification__title">Maybe some day...</h3>
                <span className="qualification__subtitle">
                  Hayırlısı be gülüm.
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
