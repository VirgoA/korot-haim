import DisplayResume from "./DisplayResume";
import "./resumeCreator.css";
import ResumeForm from "./ResumeForm";

const ResumeCreator = () => {
  return (
    <div className="container">
      <div className="resume-preview">
        <h1>פה יוצג הקורות חיים</h1>
        <DisplayResume />
      </div>
      <div className="resume-control">
        <h1>קורות חיים</h1>
        <ResumeForm />
      </div>
    </div>
  );
};

export default ResumeCreator;
