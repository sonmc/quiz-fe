import { combineReducers } from "redux";

import loginReducers from "./loginSlices";
import registerReducers from "./registerSlices";
export default combineReducers({
  loginReducers,
  registerReducers,
});
