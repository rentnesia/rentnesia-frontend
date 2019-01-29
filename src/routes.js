import React from "react";

import { Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/LoginSignUp";


const Routes = () => (
  <div>
    {/* <Route exact path="*" component={NotFound} /> */}

    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />

   
  </div>
);

export default Routes;
