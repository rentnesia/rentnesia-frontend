import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import user from "./user";
import login from "./login";
import category from "./category";
import product_type from "./product_type";
import item from "./item";
import histories from "./history";

export default history =>
  combineReducers({
    router: connectRouter(history),
    user,
    login,
    category,
    product_type,
    item,
    histories
  });
