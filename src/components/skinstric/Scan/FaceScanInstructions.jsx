// src/components/skinstric/Scan/FaceScanInstructions.jsx
import React from "react";
import PropTypes from "prop-types";
import "../../../styles/Scan/FaceScanInstructions.css";

const FaceScanInstructions = ({ onContinue }) => {
  return (
    <section className="face-scan-instructions">
      <h2 className="instructions-title">Prepare for Your Scan</h2>
      <ul className="instructions-list">
        <li>Ensure good lighting—natural light works best</li>
        <li>Remove glasses or anything covering your face</li>
        <li>Hold your device at eye level</li>
        <li>Center your face within the frame</li>
      </ul>
      <button className="instructions-continue-btn" onClick={onContinue}>
        Begin Scan
      </button>
    </section>
  );
};

FaceScanInstructions.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default FaceScanInstructions;