import React, { useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import ResumeOne from "./templates/ResumeOne";
import "./displayResume.css";

function DisplayResume(props) {
  const [resume, setResume] = useState();

  const exportPDF = () => {
    resume.save();
  };

  return (
    <div>
      <PDFExport
        paperSize={"A4"}
        fileName="_____.pdf"
        scale={0.9}
        title=""
        subject=""
        keywords=""
        ref={(r) => setResume(r)}
      >
        <div
          style={{
            height: 792,
            width: 670,
            padding: "none",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px black",
            margin: "auto",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          <ResumeOne />
        </div>
      </PDFExport>

      <button
        onClick={exportPDF}
        style={{
          width: "300px",
          margin: "auto",
          marginTop: "24px",
          display: "block",
          alignContent: "center",
          fontSize: "30px",
        }}
      >
        download
      </button>
    </div>
  );
}

export default DisplayResume;
