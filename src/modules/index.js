import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import user from "./user";
import login from "./login";
import category from "./category";
import product_type from "./product_type";

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    login,
    category,
    product_type
  });
