import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Routes from "./routes/Routes";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
