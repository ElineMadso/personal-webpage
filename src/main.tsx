import React from "react";
import ReactDOM from "react-dom/client";

// @ts-ignore
import Application from "./application/Application.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
