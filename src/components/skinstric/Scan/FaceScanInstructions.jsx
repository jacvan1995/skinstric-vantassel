import React from 'react';

const FaceScanInstructions = ({ onStart }) => (
  <section className="face-scan-instructions">
    <h2>Prepare for Your Scan</h2>
    <ul>
      <li>Ensure good lighting</li>
      <li>Remove makeup or glasses</li>
      <li>Face the camera directly</li>
    </ul>
    <button onClick={onStart}>Begin Scan</button>
  </section>
);

export default FaceScanInstructions;