import React from "react";
import { Button, SwipeableDrawer } from "@material-ui/core";
//might delete later 
import { List, Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import "./navigationBar.css";

function NavigationBar(props) {
  //test zone

  const [state, setState] = React.useState({
    open: false
  })

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open});
  };

  const list = () => (
    <div
      className="nav-list"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  //test zone end
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="ham-button"></span>
        {/* test zone */}
        <Button onClick={toggleDrawer(true)}>Test</Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["open"]}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
        </SwipeableDrawer>
        {/* test zone end */}
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
