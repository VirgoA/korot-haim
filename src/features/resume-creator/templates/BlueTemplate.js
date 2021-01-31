import React from "react";

function BlueTemplate(props) {
  const {
    experience,
    armyExperience,
    education,
    skills,
    email,
    lastName,
    name,
    phoneNumber,
    professionalSummary,
  } = props.data;

  const renderDates = (arr) =>
    arr.map((exp, index) => (
      <div key={index} className="resume-side-content">
        {`${exp.startDate} - ${exp.endDate || "היום"}`}
      </div>
    ));

  const renderContent = (arr) =>
    arr.map((content, index) => (
      <div key={index} className="resume-section-content">
        {`${content.schoolName || content.company} - ${
          content.degree || content.title
        }`}
      </div>
    ));

  const renderSpheres = () =>
    Object.keys(skills).map((skill, index) => (
      <div key={index} className="resume-side-content">
        {skill}
      </div>
    ));

  const renderSkills = () => {
    let skillsToRender = [];
    for (const sphere in skills) {
      skillsToRender.push(skills[sphere]);
    }

    return (
      <div>
        {skillsToRender.map((arr, index) => (
          <div key={index} className="resume-section-content">
            {arr.join(" ,")}
          </div>
        ))}
      </div>
    );
  };

  const css = `
        .A4 {
            text-align: right;
            font-family: sans-serif;
            direction:rtl;
            background: white;
            width: 21cm;
            height: 29.7cm;
            display: block;
            margin: 0 auto;
            padding: 10px 25px;
            margin-bottom: 0.5cm;
            overflow-y: scroll;
            box-sizing: border-box;
        }

        .resume-container{
            display: flex;
            flex-direction: column;
            padding: 60px 20px;
        }

        .resume-head{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;
        }

        .resume-body{
            display: flex;
            flex-direction: column;
        }

        .resume-info-name{
            font-size: 3rem;
            font-weight: bold;
        }

        .resume-info-contact{
            color: darkgray;
        }

        .resume-contact-email{
            min-width: 150px;
        }

        .resume-section{
            display: flex;
            flex-direction: row;
            margin-bottom: 25px;
        }

        .resume-section-side{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100px;
            margin-left: 20px;
        }

        .resume-side-decoration{
            margin-top: 11px;
            border-top: 5px solid #1e88e5;
            /* background-color: #1e88e5; */
        }

        .resume-side-content{
            text-align: left;
        }

        .resume-section-title{
            color: #64b5f6;
            font-size: 22px;
        }
    `;
  return (
    <div className="A4">
      <style>{css}</style>
      <div className="resume-container">
        <div className="resume-head">
          <div className="resume-info-name">
            {name && `${name} ${lastName}`}
          </div>
          <div className="resume-info-contact">
            <div className="resume-contact-phone">{phoneNumber}</div>
            <div className="resume-contact-email">{email}</div>
          </div>
        </div>
        <div className="resume-body">
          {professionalSummary && (
            <div className="resume-section">
              <div className="resume-section-side">
                <div className="resume-side-decoration"></div>
                <div className="resume-side-body">
                  <div className="resume-side-content"></div>
                </div>
              </div>
              <div className="resume-section-main">
                <div className="resume-section-title">תמצית</div>
                <div className="resume-section-content">
                  <div
                    dangerouslySetInnerHTML={{ __html: professionalSummary }}
                  />
                </div>
              </div>
            </div>
          )}
          {experience.length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-side">
                <div className="resume-side-decoration"></div>
                <div className="resume-side-body">
                  {renderDates(experience)}
                </div>
              </div>
              <div className="resume-section-main">
                <div className="resume-section-title">ניסיון</div>
                {renderContent(experience)}
              </div>
            </div>
          )}
          {education.length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-side">
                <div className="resume-side-decoration"></div>
                <div className="resume-side-body">{renderDates(education)}</div>
              </div>
              <div className="resume-section-main">
                <div className="resume-section-title">השכלה</div>
                {renderContent(education)}
              </div>
            </div>
          )}
          {armyExperience.length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-side">
                <div className="resume-side-decoration"></div>
                <div className="resume-side-body">
                  {renderDates(armyExperience)}
                </div>
              </div>
              <div className="resume-section-main">
                <div className="resume-section-title">שירות צבאי</div>
                {renderContent(armyExperience)}
              </div>
            </div>
          )}
          {Object.keys(skills).length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-side">
                <div className="resume-side-decoration"></div>
                <div className="resume-side-body">{renderSpheres()}</div>
              </div>
              <div className="resume-section-main">
                <div className="resume-section-title">מיומנויות</div>
                {renderSkills()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlueTemplate;
