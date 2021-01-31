import "./app.css";
import { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import { wakeupServer } from "./api/index";
import whaleGif from "./resources/gifs/whale.gif";
import FadeIn from "react-fade-in";

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
