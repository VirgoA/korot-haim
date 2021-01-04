import DisplayResume from "./DisplayResume";
import "./resumeCreator.css";
import ResumeForm from "./ResumeForm";

const ResumeCreator = () => {
  return (
    <div className="container">
      <div className="resume-control">
        <ResumeForm />
      </div>
      <div className="resume-preview">
        <DisplayResume />
      </div>
    </div>
  );
};

export default ResumeCreator;
