import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import hotspotApp from "./reducers";
import "./index.css";
import App from "./containers/App";

const store = createStore(hotspotApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
