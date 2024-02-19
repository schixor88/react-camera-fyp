import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import LoginPage from "./components/LoginPage";
import FamilyVisualizer from "./components/FamilyVisualizer";
import FamilyForm from "./components/FamilyForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FamilyForm />
  </React.StrictMode>
);
