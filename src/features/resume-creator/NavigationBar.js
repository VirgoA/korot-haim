import React from "react";
import { Button } from '@material-ui/core';

import "./navigationBar.css";

function NavigationBar(props) {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <a>KorotHaim.com</a>
      </div>
      <div className="nav-menu">
        <a>צור קשר</a>
        <a>שאלות נפוצות</a>
        <a>עלינו</a>
      </div>
      <Button
        variant="contained"
        size="large"
        color="primary"
        style={{
          fontSize:"22px"
        }}
        onClick={() => {
        }}
      >
        הכן קורות חיים
      </Button>
    </div>
  );
}

export default NavigationBar;
