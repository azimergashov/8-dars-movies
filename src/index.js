import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvayder } from "./context/AuthContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvayder>
      <App />
    </AuthProvayder>
  </Router>
);
