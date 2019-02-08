import React from "react";

import { Route } from "react-router-dom";

import Home from "./views/Home";
import Profile from "./views/Profile";
import Items from "./views/Items";
import SelectedItem from "./views/SelectedItem";
// import Checkout from "./views/Checkout";

const Routes = () => (
  <div>
    {/* <Route exact path="*" component={NotFound} /> */}

    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/user/profile`}
      component={Profile}
    />
    {/* <Route
      exact
      path={`${process.env.PUBLIC_URL}/checkout`}
      component={Checkout}
    /> */}
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/items/:category`}
      component={Items}
    />
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/items/:category/:itemId`}
      component={SelectedItem}
    />
  </div>
);

export default Routes;
