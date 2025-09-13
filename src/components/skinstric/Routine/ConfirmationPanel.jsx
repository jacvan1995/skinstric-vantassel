// src/components/skinstric/Routine/ConfirmationPanel.jsx
import React from "react";
import PropTypes from "prop-types";
import "../../../styles/Routine/ConfirmationPanel.css";

const ConfirmationPanel = ({ onFinish }) => {
  return (
    <section className="confirmation-panel">
      <h2 className="confirmation-title">Routine Confirmed</h2>
      <p className="confirmation-message">
        Your personalized skincare routine has been generated. You’re all set to begin your journey with SKINSTRIC.
      </p>
      <button className="confirmation-button" onClick={onFinish}>
        Finish
      </button>
    </section>
  );
};

ConfirmationPanel.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default ConfirmationPanel;