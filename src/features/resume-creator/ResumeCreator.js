import "./resumeCreator.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResumePreview from "./ResumePreview";
import ResumeForm from "./ResumeForm";
import formSlice from "./state/formSlice";
import ExtraControls from "./ExtraControls";
import { BlueTemplate, TestTemplate } from "./templates";
import exampleData from "../../utils/example_data.json";

const { setExampleState } = formSlice.actions;

const ResumeCreator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setExampleState(exampleData));
  }, []);

  const formData = useSelector((state) => state.form);
  const settingData = useSelector((state) => state.setting);

  const renderTemplate = () => {
    switch (settingData.template) {
      case "blueTemplate":
        return (<BlueTemplate data={formData}/>);
      case "testTemplate":
        return (<TestTemplate data={formData}/>);
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="resume-control">
        <ResumeForm />
      </div>
      <ResumePreview renderTemplate={renderTemplate}/>
      <ExtraControls renderTemplate={renderTemplate}/>
    </div>
  );
};

export default ResumeCreator;
