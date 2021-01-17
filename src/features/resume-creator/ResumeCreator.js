import ResumePreview from "./ResumePreview";
import "./resumeCreator.css";
import ResumeForm from "./ResumeForm";

const ResumeCreator = () => {
  return (
    <div className="container">
      <div className="resume-control">
        <ResumeForm />
      </div>
      <ResumePreview />
    </div>
  );
};

export default ResumeCreator;
