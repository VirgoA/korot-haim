import React from "react";
import "./blueTemplate.css";

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

    const exampleData = props.exampleData;

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

    return (
      <div className="A4">
          <div className="resume-container">
              <div className="resume-head">
                    <div className="resume-info-name">
                        {name ? `${name} ${lastName}` : `${exampleData.name} ${exampleData.lastName}`}
                    </div>
                  <div className="resume-info-contact">
                        <div className="resume-contact-phone">
                            {phoneNumber ? phoneNumber : exampleData.phoneNumber}
                        </div>
                        <div className="resume-contact-email">
                            {email ? email : exampleData.email}
                        </div>
                  </div>
              </div>
              <div className="resume-body">
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
                        {professionalSummary ? professionalSummary : exampleData.professionalSummary}
                      </div>
                    </div>
                  </div>
                  <div className="resume-section">
                    <div className="resume-section-side">
                        <div className="resume-side-decoration"></div>
                        <div className="resume-side-body">
                            {
                                experience.length !== 0 ? renderDates(experience) : 
                                renderDates(exampleData.experience)
                            }
                        </div>                     
                    </div>
                    <div className="resume-section-main">
                        <div className="resume-section-title">
                            ניסיון   
                        </div>
                        {
                            experience.length !== 0 ? 
                            renderContent(experience) : renderContent(exampleData.experience)
                        }
                    </div>
                  </div>
                  <div className="resume-section">
                    <div className="resume-section-side">
                      <div className="resume-side-decoration"></div>
                      <div className="resume-side-body">
                        {
                            education.length !== 0 ? renderDates(education) : 
                            renderDates(exampleData.education)
                        }
                      </div>                     
                    </div>
                    <div className="resume-section-main">
                        <div className="resume-section-title">
                            השכלה   
                        </div>
                        {
                            education.length !== 0 ? 
                            renderContent(education) : renderContent(exampleData.education)
                        }
                    </div>
                  </div>
                  <div className="resume-section">
                      <div className="resume-section-side">
                          <div className="resume-side-decoration"></div>
                          <div className="resume-side-body">
                              <div className="resume-side-content">
                                  צד שרת
                              </div>  
                              <div className="resume-side-content">
                                  צד לקוח
                              </div> 
                          </div>                     
                      </div>
                      <div className="resume-section-main">
                          <div className="resume-section-title">
                              מיומנויות   
                          </div>
                          <div className="resume-section-content">
                              node.js, asp.net, django
                          </div>
                          <div className="resume-section-content">
                              react, angular, material-ui
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default BlueTemplate;
