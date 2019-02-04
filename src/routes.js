import React from "react";

import { Route } from "react-router-dom";

import Home from "./views/Home";
<<<<<<< HEAD
import User from "./views/User";
import Profile from "./views/Profile";
=======
import Items from "./views/Items";
>>>>>>> 4560683d336aebd04550ab08007a112b71ce72e6

const Routes = () => (
  <div>
    {/* <Route exact path="*" component={NotFound} /> */}

    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
<<<<<<< HEAD
    <Route exact path={`${process.env.PUBLIC_URL}/account`} component={User} />
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/account/details`}
      component={Profile}
=======
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/items/:category`}
      component={Items}
>>>>>>> 4560683d336aebd04550ab08007a112b71ce72e6
    />
  </div>
);

export default Routes;
