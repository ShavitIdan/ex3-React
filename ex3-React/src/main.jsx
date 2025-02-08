import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Routes from "./routes/Routes";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes />
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
