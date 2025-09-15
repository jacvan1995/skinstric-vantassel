import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/landing";
import Demograpics from "./pages/demographics";

function App() {
  return (
    <Router className="skinstric-wrapper">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demographics" element={<Demograpics />} />
      </Routes>
    </Router>
  );
}

export default App;
