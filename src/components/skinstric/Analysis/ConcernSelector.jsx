import React, { useState } from 'react';

const concernOptions = [
  'Acne',
  'Dryness',
  'Redness',
  'Oiliness',
  'Dark Spots',
  'Sensitivity',
  'Uneven Texture',
];

const ConcernSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState([]);

  const toggleConcern = (concern) => {
    setSelected((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern]
    );
  };

  return (
    <section className="concern-selector">
      <h2>What Are Your Skin Concerns?</h2>
      <p>Select all that apply. This helps us tailor your routine.</p>
      <ul className="concern-list">
        {concernOptions.map((concern) => (
          <li
            key={concern}
            className={selected.includes(concern) ? 'selected' : ''}
            onClick={() => toggleConcern(concern)}
          >
            {concern}
          </li>
        ))}
      </ul>
      <button onClick={() => onSelect(selected)}>Continue</button>
    </section>
  );
};

export default ConcernSelector;