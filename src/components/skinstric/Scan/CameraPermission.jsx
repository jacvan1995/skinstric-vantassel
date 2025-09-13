// src/components/skinstric/Scan/CameraPermission.jsx
import React from "react";
import PropTypes from "prop-types";
import "../../../styles/Scan/CameraPermission.css";

const CameraPermission = ({ onAllow }) => {
  return (
    <section className="camera-permission">
      <h2 className="camera-title">Allow Camera Access</h2>
      <p className="camera-description">
        To begin your skin scan, we need access to your device’s camera. This allows our A.I. to analyze your skin and personalize your routine.
      </p>
      <button className="camera-allow-btn" onClick={onAllow}>
        Allow Camera
      </button>
    </section>
  );
};

CameraPermission.propTypes = {
  onAllow: PropTypes.func.isRequired,
};

export default CameraPermission;