import React from 'react';

const RoutineSummary = ({ concerns, demographics, onConfirm }) => {
  const { age, gender, skinTone } = demographics;

  return (
    <section className="routine-summary">
      <h2>Your Personalized Routine</h2>
      <p>
        Based on your profile ({gender}, age {age}, {skinTone} skin tone) and
        selected concerns ({concerns.join(', ')}), here’s what we recommend:
      </p>

      <ul className="product-list">
        {concerns.map((concern, index) => (
          <li key={index} className="product-card">
            <h3>{concern} Solution</h3>
            <p>Recommended product for {concern.toLowerCase()} care.</p>
            {/* Placeholder for product image or link */}
          </li>
        ))}
      </ul>

      <button onClick={onConfirm}>Confirm & Continue</button>
    </section>
  );
};

export default RoutineSummary;