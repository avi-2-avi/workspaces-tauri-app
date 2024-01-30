import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { WorkspacesApp } from "./WorkspacesApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <WorkspacesApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
