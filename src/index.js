import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// router dom
import { BrowserRouter } from "react-router-dom";

// redux toolkit
import { Provider } from "react-redux";
import store from "./slices/store";

// components and pages
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
