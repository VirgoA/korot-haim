import DisplayResume from "./DisplayResume";
import "./resumeCreator.css";
import ResumeForm from "./ResumeForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ResumeCreator = () => {
  const { height, width } = useWindowDimensions();

  if (width >= 1100) {
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
  } else {
    return (
      <div>
        <div className="container">
          <div className="resume-control">
            <ResumeForm />
          </div>
        </div>
        <div className="container">
          <div className="resume-preview">
            <DisplayResume />
          </div>
        </div>
      </div>
    );
  }
};

export default ResumeCreator;
