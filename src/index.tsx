import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* IMPORT REDUX */
// import { createStore } from "redux";
// import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import store from "./redux/store"

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
