import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import CenterAlert from "./context/CenterAlert.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CenterAlert>
        <Provider store={store}>
          <App />
        </Provider>
      </CenterAlert>
    </BrowserRouter>
  </React.StrictMode>
);
