import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./resumeOne.css";

function ResumeOne(props) {
  const {
    experience,
    education,
    links,
    email,
    lastName,
    name,
    phoneNumber,
    professionalSummary,
  } = useSelector((state) => state.form);
  return (
    <div className="resume-body">
      <div className="cv-header">
        <div className="full-name">
          <p>
            <span id="personal-name">{name === "" ? "שם" : name}</span>
            <span id="last-name">{lastName === "" ? "משפחה" : lastName}</span>
          </p>
        </div>
        <div className="personal-info">
          <p>
            <span>{phoneNumber === "" ? "05X-XXXX-XXX" : phoneNumber}</span>
            <span>{email === "" ? "your@email.com" : email}</span>
          </p>
        </div>
      </div>

      <div class="cv-body">
        <div className="cv-summary">
          {professionalSummary !== "" ? (
            <p className="section-title">תמצית</p>
          ) : null}
          {professionalSummary !== "" ? <p>{professionalSummary}</p> : null}
        </div>

        <div className="cv-education">
          {education.length != 0 ? (
            <p className="section-title">השכלה</p>
          ) : null}
          {education.map((item) => {
            return (
              <div class="edu-item">
                <div>
                  <p class="edu-school-name">
                    <b>{item.schoolName}</b>
                  </p>
                  <p class="edu-degree-name">{item.degree}</p>
                </div>
                <div>
                  <p class="edu-dates">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cv-experience">
          {experience.length != 0 ? (
            <p className="section-title">ניסיון</p>
          ) : null}
          {experience.map((item) => {
            return (
              <div class="exp-item">
                <div>
                  <b>
                    <a class="exp-job-title">{item.title}</a>
                  </b>
                  <a> | </a>
                  <a class="exp-company-name">{item.company}</a>
                </div>
                <div>
                  <a class="exp-dates">
                    {item.startDate} - {item.endDate}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="cv-skills">
          <p className="section-title">קישורים</p>
          {links.map((item) => {
            return (
              <div class="link-item">
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="www.google.com"
                  >
                    {item.labelName}
                  </a>
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default ResumeOne;