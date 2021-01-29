import ResumePreview from "./ResumePreview";
import "./resumeCreator.css";
import ResumeForm from "./ResumeForm";
import formSlice from "./state/formSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import exampleData from "../../utils/example_data.json";
import ExtraControls from "./ExtraControls";
import BlueTemplate from "./templates/BlueTemplate";
import { useSelector } from "react-redux";

const { setExampleState } = formSlice.actions;

const ResumeCreator = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setExampleState(exampleData));
  }, [])

  const formData = useSelector((state) => state.form);
  const settingData = useSelector((state) => state.setting);

  const renderTemplate = () => {
    switch (settingData.template) {
      case "blueTemplate":
        return (<BlueTemplate data={formData}/>);
      case "testTemplate":
        return (<div>Test Template</div>)      
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
