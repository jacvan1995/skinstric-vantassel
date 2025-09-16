import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/landing";
import Demograpics from "./pages/demographics";
import GallerySelect from "./pages/gallery-select";
import InfoInput from "./pages/info-input";

function App() {
  return (
    <Router className="skinstric-wrapper">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demographics" element={<Demograpics />} />
        <Route path="/gallery-select" element={<GallerySelect />} />
        <Route path="/info-input" element={<InfoInput />} />
      </Routes>
    </Router>
  );
}

export default App;
