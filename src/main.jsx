import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TourContextData from "./context/TourContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TourContextData>
    <App />
  </TourContextData>
);
