import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles.css";

// Roboto fonts used by MaterialUI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { WorkspacesApp } from "./WorkspacesApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WorkspacesApp />
  </React.StrictMode>,
);
