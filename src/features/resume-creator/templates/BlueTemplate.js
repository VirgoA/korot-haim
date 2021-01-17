import { transform } from "async";
import React, {useEffect} from "react";
import { useSelector } from "react-redux";
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
  } = useSelector((state) => state.form);

  return (
    <div className="A4">
        <div className="resume-container">
            <div className="resume-head">
                <div className="resume-info-name">אולג וינוקורוב</div>
                <div className="resume-info-contact">
                    <div className="resume-contact-phone">0587640555</div>
                    <div className="resume-contact-email">yolps11@gmail.com</div>
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
                            לורם איפסום דולור סיט אמטת קונסקטורר אדיםיסינג אלית קלעה צופעט למרקוח איבן איף
                        </div>
                    </div>
                </div>
                <div className="resume-section">
                    <div className="resume-section-side">
                        <div className="resume-side-decoration"></div>
                        <div className="resume-side-body">
                            <div className="resume-side-content">
                                2014 - 2016
                            </div>  
                            <div className="resume-side-content">
                                2016 - 2017
                            </div>
                            <div className="resume-side-content">
                                2017 - 2019
                            </div> 
                        </div>                     
                    </div>
                    <div className="resume-section-main">
                        <div className="resume-section-title">
                            ניסיון   
                        </div>
                        <div className="resume-section-content">
                            דומינוס פיצה - אחמש
                        </div>
                        <div className="resume-section-content">
                            סלקום - שירות
                        </div>
                        <div className="resume-section-content">
                            בנק דיסקונט - תמיכה טכנית
                        </div>
                    </div>
                </div>
                <div className="resume-section">
                    <div className="resume-section-side">
                        <div className="resume-side-decoration"></div>
                        <div className="resume-side-body">
                            <div className="resume-side-content">
                                2016 - 2020
                            </div>  
                            <div className="resume-side-content">
                                2020 - 2022
                            </div> 
                        </div>                     
                    </div>
                    <div className="resume-section-main">
                        <div className="resume-section-title">
                            השכלה   
                        </div>
                        <div className="resume-section-content">
                            הפתוחה - מדעי המחשב
                        </div>
                        <div className="resume-section-content">
                            הפתוחה - תואר שני מדעי המוח
                        </div>
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
