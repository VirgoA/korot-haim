import React from "react";
import { Button } from "@material-ui/core";

import "./navigationBar.css";

function NavigationBar(props) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <a>KorotHaim.com</a>
        </div>
      </div>
      <div className="nav-right">
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{
            fontSize: "22px",
          }}
          onClick={() => {}}
        >
          הכן קורות חיים
        </Button>
        <div className="separator"></div>
        <div className="nav-menu">
          <a href="../contact.html">צור קשר</a>
          <a href="../faq.html">שאלות נפוצות</a>
          <a href="../about.html">עלינו</a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
