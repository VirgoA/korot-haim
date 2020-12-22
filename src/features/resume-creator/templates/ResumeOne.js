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
        <div className="cv-education">
          {education.length != 0 ? <p id="education-title">השכלה</p> : null}
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
          {experience.length != 0 ? <p id="experience-title">ניסיון</p> : null}
          {experience.map((item) => {
            return (
              <div class="exp-item">
                <div>
                  <p class="exp-company-name">{item.company}</p>
                  <p class="exp-job-title">{item.title}</p>
                </div>
                <div>
                  <p class="exp-dates">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cv-skills">
          <p id="links-title">קישורים</p>
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
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <p style={{ fontSize: "24px" }}>
  //       {name === "" ? "שם" : name} {lastName === "" ? "משפחה" : lastName}
  //     </p>
  //     <div>
  // <p>{phoneNumber === "" ? "05X-XXXX-XXX" : phoneNumber}</p>
  // <p>{email === "" ? "your@email.com" : email}</p>
  //     </div>

  //     <div>
  //       <p>{professionalSummary}</p>
  //     </div>

  //     <div>
  //       <p>ניסיון</p>
  // {experience.map((item) => {
  //   return (
  //     <div>
  //       <p>{item.title}</p>
  //       <p>{item.company}</p>
  //       <p>{item.startDate}</p>
  //       <p>{item.endDate}</p>
  //     </div>
  //   );
  // })}
  //     </div>

  //     <div>
  //       <p>השכלה</p>
  // {education.map((item) => {
  //   return (
  //     <div>
  //       <p>{item.degree}</p>
  //       <p>{item.schoolName}</p>
  //       <p>{item.startDate}</p>
  //       <p>{item.endDate}</p>
  //     </div>
  //   );
  // })}
  //     </div>

  //     <div>
  // <p>קישורים</p>
  // {links.map((item) => {
  //   return (
  //     <div>
  //       <p>{item.labelName}</p>
  //       <p>{item.link}</p>
  //     </div>
  //   );
  // })}
  //     </div>
  //   </div>
  // );
}

export default ResumeOne;
