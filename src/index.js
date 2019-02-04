import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "antd/dist/antd.css";
import "./assets/scss/index.scss";

import React from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import store, { history } from "./store";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import { ALREADY_LOGIN } from "./modules/login";

if (sessionStorage.getItem("bearerToken")) {
  try {
    const parsed = jwtDecode(sessionStorage.getItem("bearerToken"));
    store.dispatch({
      type: ALREADY_LOGIN,
      payload: {
        name: parsed.name
      }
    });
    axios.defaults.headers = {
      Authorization: `bearer ${sessionStorage.getItem("bearerToken")}`
    };
  } catch (err) {
    console.error(err);
  }
}

render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename="/">
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
