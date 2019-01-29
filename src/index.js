import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/index.scss";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import store, { history } from "./store";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename="/">
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
