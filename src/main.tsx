import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { WorkspacesApp } from "./WorkspacesApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WorkspacesApp />
  </React.StrictMode>,
);
