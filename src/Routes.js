import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import Main from "./Pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
