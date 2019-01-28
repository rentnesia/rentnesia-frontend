import React from "react";

import { Route } from "react-router-dom";

import Home from "./views/Home";

const Routes = () => (
  <div>
    {/* <Route exact path="*" component={NotFound} /> */}

    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
  </div>
);

export default Routes;
