import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

// Create a middleware to log the action information before executing it
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("ACTION_TYPE", action);
    }
    next(action);
  };

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action == "function") {
      action(dispatch);
      return;
    }
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
