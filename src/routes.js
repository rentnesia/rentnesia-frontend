import React from "react";

import { Route } from "react-router-dom";

import Home from "./views/Home";
import User from "./views/User";
import Profile from "./views/Profile";

const Routes = () => (
  <div>
    {/* <Route exact path="*" component={NotFound} /> */}

    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    <Route exact path={`${process.env.PUBLIC_URL}/account`} component={User} />
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/account/details`}
      component={Profile}
    />
  </div>
);

export default Routes;
