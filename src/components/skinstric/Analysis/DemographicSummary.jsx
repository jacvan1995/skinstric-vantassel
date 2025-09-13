// src/components/skinstric/Analysis/DemographicSummary.jsx
import React from "react";
import PropTypes from "prop-types";
import "./DemographicSummary.css";

const DemographicSummary = ({ age, gender, skinTone, onContinue }) => {
  return (
    <div className="demographic-summary">
      <h2 className="summary-title">Your Skin Profile</h2>
      <ul className="summary-list">
        <li><strong>Age:</strong> {age}</li>
        <li><strong>Gender:</strong> {gender}</li>
        <li><strong>Skin Tone:</strong> {skinTone}</li>
      </ul>
      <button className="continue-button" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
};

DemographicSummary.propTypes = {
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  skinTone: PropTypes.string.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default DemographicSummary;