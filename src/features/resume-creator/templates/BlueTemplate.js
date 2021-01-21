import React from "react";

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
    `
    return (
      <div className="A4">
          <style>
              {css}
          </style>
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
