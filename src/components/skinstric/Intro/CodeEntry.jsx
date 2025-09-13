// src/components/skinstric/Intro/CodeEntry.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/Intro/CodeEntry.css";

const CodeEntry = ({ onSubmit }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  const fallbackCode = code.trim() || "SKN-DEMO";
  onSubmit(fallbackCode);
};

  return (
    <section className="code-entry">
      <h2 className="code-title">Enter Your Access Code</h2>
      <form className="code-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="e.g. SKN-2025"
          className="code-input"
        />
        <button type="submit" className="code-submit-btn">
          Continue
        </button>
      </form>
    </section>
  );
};

CodeEntry.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CodeEntry;