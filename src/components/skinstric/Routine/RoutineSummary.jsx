// src/components/skinstric/Routine/RoutineSummary.jsx
import React from "react";
import PropTypes from "prop-types";
import "../../../styles/Routine/RoutineSummary.css";

const RoutineSummary = ({ concerns, demographics, onConfirm }) => {
  const { age, gender, skinTone } = demographics;

  return (
    <section className="routine-summary">
      <h2 className="routine-title">Your Personalized Routine</h2>

      <div className="routine-section">
        <h3>Skin Profile</h3>
        <ul className="routine-list">
          <li><strong>Age:</strong> {age}</li>
          <li><strong>Gender:</strong> {gender}</li>
          <li><strong>Skin Tone:</strong> {skinTone}</li>
        </ul>
      </div>

      <div className="routine-section">
        <h3>Concerns Addressed</h3>
        <ul className="routine-list">
          {concerns.map((concern, index) => (
            <li key={index}>{concern}</li>
          ))}
        </ul>
      </div>

      <button className="routine-confirm-btn" onClick={onConfirm}>
        Confirm Routine
      </button>
    </section>
  );
};

RoutineSummary.propTypes = {
  concerns: PropTypes.arrayOf(PropTypes.string).isRequired,
  demographics: PropTypes.shape({
    age: PropTypes.string,
    gender: PropTypes.string,
    skinTone: PropTypes.string,
  }).isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default RoutineSummary;