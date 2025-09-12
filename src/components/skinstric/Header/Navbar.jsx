import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pageId = location.pathname.split("/").pop(); // e.g. "/page/001" → "001"
  const showEnterCode = ["000", "001"].includes(pageId);

  return (
    <nav className="navbar">
      <h1>Skinstric</h1>

      {showEnterCode && (
        <button className="enter-code-btn">Enter Code</button>
      )}
    </nav>
  );
};

export default Navbar;