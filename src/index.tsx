import * as React from "react";
import * as ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);