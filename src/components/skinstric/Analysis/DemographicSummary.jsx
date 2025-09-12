import React from 'react';

const DemographicSummary = ({ age, gender, skinTone, onContinue }) => (

  <section className="demographic-summary">
    <h2>Your Profile Summary</h2>
    <ul>
      <li><strong>Estimated Age:</strong> {age}</li>
      <li><strong>Gender:</strong> {gender}</li>
      <li><strong>Skin Tone:</strong> {skinTone}</li>
    </ul>
    <p>This helps us tailor your skincare routine to your unique profile.</p>
    <button onClick={onContinue}>Next</button>
  </section>
);

export default DemographicSummary;