import "./app.css";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResumeCreator from "./features/resume-creator/ResumeCreator";
import NavigationBar from "./features/resume-creator/NavigationBar";
import { NotFoundPage, Maintenance } from "./Pages";

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
