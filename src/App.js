import "./app.css";
import NavigationBar from "./features/resume-creator/NavigationBar";
import ResumeCreator from "./features/resume-creator/ResumeCreator";
import { useState, useEffect } from "react";
import whaleGif from "./resources/gifs/whale.gif";
import FadeIn from "react-fade-in";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  if (loading) {
    return (
      <div id="loading-gif">
        <FadeIn transitionDuration="2500" id="loading-gif">
          <img src={whaleGif} alt="loading..." />
        </FadeIn>
      </div>
    );
  } else {
    return (
      <FadeIn transitionDuration="2500" id="loading-gif">
        <div className="app-container">
          <NavigationBar />

          <ResumeCreator />
        </div>
      </FadeIn>
    );
  }
}

export default App;
