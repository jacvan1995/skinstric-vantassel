// src/components/skinstric/Scan/ScanProgress.jsx
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../../../styles/Scan/ScanProgress.css";

const ScanProgress = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // simulate 3-second scan

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="scan-progress">
      <h2 className="progress-title">Analyzing Your Skin</h2>
      <div className="progress-loader" />
      <p className="progress-message">
        Our A.I. is reviewing your scan to build a personalized routine.
      </p>
    </section>
  );
};

ScanProgress.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default ScanProgress;