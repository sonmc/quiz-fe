import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./routers/rootRouter";
import store from "./store/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
         <RootRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
