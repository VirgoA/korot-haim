import React from "react";
import './test.css';

function BlueTemplate(props) {

    const {
      experience,
      education,
      skills,
      email,
      lastName,
      name,
      phoneNumber,
      professionalSummary,
    } = props.data;

    const renderDates = (arr) => (
        arr.map((exp, index)=>(
            <div key={index} className="resume-side-content">
                {`${exp.startDate} - ${exp.endDate || "היום"}`}
            </div>
            )
        )
    )

    const renderContent = (arr) => (
        arr.map((content, index) => (
            <div key={index} className="resume-section-content">
                {`${content.schoolName || content.company} - ${content.degree || content.title}`}
            </div>
        ))
    )

    const renderSpheres = () => (
        Object.keys(skills).map((skill, index) => (
            <div key={index} className="resume-side-content">
                {skill}
            </div>
        ))
    )

    const renderSkills = () => {
        let skillsToRender = []
        for(const sphere in skills){
            skillsToRender.push(skills[sphere]);
        }

        return (
            <div>
                {
                    skillsToRender.map((arr, index)=>(
                        <div key={index} className="resume-section-content">
                            {arr.join(' ,')}
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
      <div className="A4">
          <div className="resume-container">
              <div className="resume-head">
                    <div className="resume-info-name">
                        {name && `${name} ${lastName}`}
                    </div>
                  <div className="resume-info-contact">
                        <div className="resume-contact-phone">
                            {phoneNumber}
                        </div>
                        <div className="resume-contact-email">
                            {email}
                        </div>
                  </div>
              </div>
              <div className="resume-body">
                  {professionalSummary && 
                    <div className="resume-section">
                        <div className="resume-section-side">
                          <div className="resume-side-decoration"></div>
                          <div className="resume-side-body">
                              <div className="resume-side-content"></div>
                          </div>
                        </div>
                        <div className="resume-section-main">
                          <div className="resume-section-title">
                              תמצית
                          </div>
                          <div className="resume-section-content">
                            {professionalSummary}
                          </div>
                        </div>
                    </div>
                  }
                  {experience.length !== 0 && 
                    <div className="resume-section">
                      <div className="resume-section-side">
                          <div className="resume-side-decoration"></div>
                          <div className="resume-side-body">
                              {renderDates(experience)}
                          </div>
                      </div>
                      <div className="resume-section-main">
                          <div className="resume-section-title">
                              ניסיון
                          </div>
                          {renderContent(experience)}
                      </div>
                    </div>
                  }
              </div>
          </div>
      </div>
    );
}

export default BlueTemplate;
