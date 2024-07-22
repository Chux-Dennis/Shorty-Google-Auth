import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedirectComponent from "./Components/RedirectComponent";
import Dash from "./pages/Dash";
import Home from "./pages/Home";
import "./assets/css/output.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/r/:redirectId" element={<RedirectComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
