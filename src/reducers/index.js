import { combineReducers } from "redux";
import hotspots from "./hotspots";

const reducers = combineReducers({
  hotspots: hotspots
});

export default reducers;
