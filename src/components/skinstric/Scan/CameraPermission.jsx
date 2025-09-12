import React from 'react';

const CameraPermission = ({ onAllow }) => (
  <section className="camera-permission">
    <h2>Let’s Scan Your Skin</h2>
    <p>We’ll use your camera to analyze your face and generate a routine.</p>
    <button onClick={onAllow}>Allow Camera Access</button>
  </section>
);

export default CameraPermission;