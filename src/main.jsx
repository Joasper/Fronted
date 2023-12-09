import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { IndexRoutes } from "./Routes/IndexRoutes.jsx";
import { store } from "./App/Store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
