import React from 'react';

const ConfirmationPanel = ({ onFinish }) => (
  <section className="confirmation-panel">
    <h2>You’re All Set</h2>
    <p>Your personalized skincare routine is ready to go.</p>
    <p>Start using your recommended products and track your progress over time.</p>
    <button onClick={onFinish}>Finish</button>
  </section>
);

export default ConfirmationPanel;