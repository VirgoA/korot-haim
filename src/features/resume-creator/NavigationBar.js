import React from "react";
import { Button, SwipeableDrawer } from "@material-ui/core";
//might delete later 
import { List, Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import "./navigationBar.css";

function NavigationBar(props) {

  const [state, setState] = React.useState({
    open: false
  })

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open});
  };
  
  const navMenu = () => (
    <div className="nav-menu">
      <a href="../contact.html">צור קשר</a>
      <a href="../faq.html">שאלות נפוצות</a>
      <a href="../about.html">עלינו</a>
    </div>
  )

  const callToAction = () => (
    <Button
      variant="contained"
      size="large"
      color="primary"
      id="action"
      onClick={() => {}}
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
      {/* <Divider /> */}
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