import "./app.css";
import NavigationBar from "./features/resume-creator/NavigationBar";
import ResumeCreator from "./features/resume-creator/ResumeCreator";
import { useState, useEffect } from "react";
import whaleGif from "./resources/gifs/whale.gif";
import FadeIn from "react-fade-in";
import { wakeupServer } from "./api/index";
import AppRouter from "./AppRouter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      wakeupServer();
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
        <AppRouter/>
      </FadeIn>
    );
  }
}

export default App;
