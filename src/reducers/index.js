import { combineReducers } from "redux";
import hostspots from "./hotspots";

const hostspotApp = combineReducers({
  hostspots: hostspots
});

export default hostspotApp;
