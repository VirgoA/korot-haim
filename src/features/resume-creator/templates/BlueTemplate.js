import React from "react";

const BlueTemplate = (props) => {
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
    languages,
  } = props.data;

  const renderSkills = (skills) => {
    let skillsToRender = [];
    let spheres = [];
    for (const sphere in skills) {
      spheres.push(sphere);
      skillsToRender.push(skills[sphere]);
    }

    return (
      <div className="skills-container">
        {skillsToRender.map((arr, index) => (
          <div className="resume-section-item" key={index}>
            <div className="item-head">
              <div className="item-side-ltr">{spheres[index]}</div>
              <div className="item-title">{arr.join(" ,")}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSectionItems = (items) =>
    items.map((item, index) => (
      <div className="resume-section-item" key={index}>
        <div className="item-head">
          <div className="item-side-ltr">
            {`${item.startDate} - ${item.endDate || "היום"}`}
          </div>
          <div className="item-title">
            <strong>{item.degree || item.title} </strong>-{" "}
            {item.schoolName || item.company}
          </div>
        </div>
        {item.summary && (
          <div className="item-summary">
            <div
              style={{
                margin: "0",
                padding: "0",
              }}
              dangerouslySetInnerHTML={{ __html: item.summary }}
            />
          </div>
        )}
      </div>
    ));

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
            flex-direction: column;
            margin-bottom: 25px;
        }
        
        .resume-section-head{
            display: flex;
            flex-direction: row;
            margin-bottom: 5px;
        }
        
        .head-decoration{
            margin-top: 11px;
            border-top: 5px solid #1e88e5;  
            width: 95px;  
        }
        
        .head-title{
            color: #64b5f6;
            font-size: 22px;
            margin-right: 20px;
        }
        
        .resume-section-item{
            margin-bottom: 10px;
        }
        
        .item-head{
            display: flex;
            gap: 19px
        }
        
        .item-side{
            min-width: 115px;
        }
        
        .item-side-ltr{
            min-width: 96px;
            text-align: left;
        }
        
        .item-title{
            
        }
        
        .item-summary{
            margin-right: 114px;
            margin-top: 5px;
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
              <div className="resume-section-head">
                <div className="head-decoration"></div>
                <div className="head-title">תמצית</div>
              </div>
              <div className="item-summary">
                <div
                  dangerouslySetInnerHTML={{ __html: professionalSummary }}
                />
              </div>
            </div>
          )}
          {experience.length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-head">
                <div className="head-decoration"></div>
                <div className="head-title">ניסיון</div>
              </div>
              {renderSectionItems(experience)}
            </div>
          )}
          {education.length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-head">
                <div className="head-decoration"></div>
                <div className="head-title">השכלה</div>
              </div>
              {renderSectionItems(education)}
            </div>
          )}
          {education.length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-head">
                <div className="head-decoration"></div>
                <div className="head-title">שירות צבאי</div>
              </div>
              {renderSectionItems(armyExperience)}
            </div>
          )}
          {Object.keys(skills).length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-head">
                <div className="head-decoration"></div>
                <div className="head-title">מיומנויות</div>
              </div>
              {renderSkills(skills)}
            </div>
          )}
          {languages.length !== 0 && (
            <div className="resume-section">
              <div className="resume-section-head">
                <div className="head-decoration"></div>
                <div className="head-title">שפות</div>
              </div>
              <div className="resume-section-item">
                <div className="item-summary">{languages.join(" ,")}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlueTemplate;
