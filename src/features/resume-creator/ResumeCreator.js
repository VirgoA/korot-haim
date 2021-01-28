import ResumePreview from "./ResumePreview";
import "./resumeCreator.css";
import ResumeForm from "./ResumeForm";
import formSlice from "./state/formSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import exampleData from "../../utils/example_data.json";

const { setExampleState } = formSlice.actions;

const ResumeCreator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setExampleState(exampleData));
  }, []);

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
