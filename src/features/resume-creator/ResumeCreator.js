import ResumePreview from "./ResumePreview";
import "./resumeCreator.css";
import ResumeForm from "./ResumeForm";
import formSlice from "./state/formSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import exampleData from "../../utils/example_data.json";
import ExtraControls from "./ExtraControls";
import BlueTemplate from "./templates/BlueTemplate";

const { setExampleState } = formSlice.actions;

const ResumeCreator = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setExampleState(exampleData));
  }, [])

  return (
    <div className="container">
      <div className="resume-control">
        <ResumeForm />
      </div>
      <ResumePreview />
      <ExtraControls />
    </div>
  );
};

export default ResumeCreator;
