import "./navigationBar.css";
import React, { useState, useCallback } from "react";
import { Button, SwipeableDrawer } from "@material-ui/core";
import { NavLink, useHistory } from 'react-router-dom';

const NavigationBar = (props) => {

  const [state, setState] = useState({
    open: false
  })

  const history = useHistory();
  const handleCallToAction = useCallback(() => history.push('/'), [history])

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open});
  };
  
  const navMenu = () => (
    <div className="nav-menu">
      <NavLink to="/contact">צור קשר</NavLink>
      <NavLink to="/faq">שאלות נפוצות</NavLink>
      <NavLink to="/about">עלינו</NavLink>
    </div>
  )

  const callToAction = () => (
    <Button
      variant="contained"
      size="large"
      color="primary"
      id="action"
      onClick={handleCallToAction}
    >
      הכן קורות חיים
    </Button>
  )

  const list = () => (
    <div
      className="nav-list"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {callToAction()}
      {navMenu()}
    </div>
  );

  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="ham-button" onClick={toggleDrawer(true)}></span>
        <div className="nav-logo">
          <a>KorotHaim.com</a>
        </div>
      </div>
      <div className="nav-right">
        {callToAction()}
        <div className="separator"></div>
        {navMenu()}
      </div>
      <SwipeableDrawer
          anchor={"left"}
          open={state["open"]}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
    </div>
  );
}

export default NavigationBar;