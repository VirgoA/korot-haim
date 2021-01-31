import React from 'react';
import "./app.css";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ResumeCreator from "./features/resume-creator/ResumeCreator";
import NavigationBar from "./features/resume-creator/NavigationBar";
import NotFoundPage from "./Pages/NotFoundPage";
import Maintenance from "./Pages/Maintenance";

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-container">
      <NavigationBar />
      <Switch>
        <Route path="/" component={ResumeCreator} exact={true} />
        <Route path="/contact" component={Maintenance} />
        <Route path="/faq" component={Maintenance} />
        <Route path="/about" component={Maintenance} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
