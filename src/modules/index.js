import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import user from "./user";
import login from "./login";

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    login
  });
