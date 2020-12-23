import React from "react";
import "./navigationBar.css";

function NavigationBar(props) {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <a>KorotHaim.com</a>
      </div>
      <div className="nav-menu">
        <a>FAQ</a>
        <a>About</a>
        <a>Contact</a>
      </div>
      <div className="nav-btn">
        <a>הכן קורות חיים</a>
      </div>
    </div>
  );
}

export default NavigationBar;
