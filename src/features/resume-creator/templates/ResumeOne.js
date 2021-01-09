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
            <span id="last-name">{lastName === "" ? "מלא" : lastName}</span>
          </p>
        </div>
        <div className="personal-info">
          <p>
            <span>{phoneNumber === "" ? "05X-XXXX-XXX" : phoneNumber}</span>
            <span>{email === "" ? "your@email.com" : email}</span>
          </p>
        </div>
      </div>

      <div className="cv-body">
        <div className="cv-summary">
          {professionalSummary !== "" ? (
            <p className="section-title">תמצית</p>
          ) : null}
          {professionalSummary !== "" ? (
            <p dir="rtl">{professionalSummary}</p>
          ) : null}
        </div>

        <div className="cv-education">
          {education.length != 0 ? (
            <p className="section-title">השכלה</p>
          ) : null}
          {education.map((item, index) => {
            return (
              <div key={index}>
                <div className="edu-item" dir="ltr">
                  <div>
                    <p className="edu-school-name">
                      <b>{item.schoolName}</b>
                    </p>
                    <p className="edu-degree-name">{item.degree}</p>
                  </div>
                  <div>
                    <p className="edu-dates">
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                </div>
                <p>{item.summary}</p>
              </div>
            );
          })}
        </div>

        <div className="cv-experience">
          {experience.length != 0 ? (
            <p className="section-title">ניסיון</p>
          ) : null}
          {experience.map((item, index) => {
            return (
              <div key={index}>
                <div className="exp-item" dir="ltr">
                  <div>
                    <b>
                      <a className="exp-job-title">{item.title}</a>
                    </b>
                    <a> | </a>
                    <a className="exp-company-name">{item.company}</a>
                  </div>
                  <div>
                    <a className="exp-dates">
                      {item.startDate} - {item.endDate}
                    </a>
                  </div>
                </div>
                <p>{item.summary}</p>
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
