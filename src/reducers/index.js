import { combineReducers } from "redux";
import hotspots from "./hotspots";
import mask from "./mask";

const reducers = combineReducers({
  hotspots,
  mask
});

export default reducers;
