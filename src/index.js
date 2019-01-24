import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import persistState from "redux-localstorage";
import hotspotApp from "./reducers";
import "./index.css";
import App from "./containers/App";

const enhancer = compose(persistState(null, { key: "hostspots" }));
const store = createStore(hotspotApp, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
