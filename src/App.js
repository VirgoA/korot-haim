import "./app.css";
import NavigationBar from "./features/resume-creator/NavigationBar";
import ResumeCreator from "./features/resume-creator/ResumeCreator";

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <ResumeCreator />
    </div>
  );
}

export default App;
