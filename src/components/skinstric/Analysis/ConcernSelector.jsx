// src/components/skinstric/Analysis/ConcernSelector.jsx
import React, { useState } from "react";
import "./ConcernSelector.css";

const concernOptions = [
  "Acne",
  "Dryness",
  "Oiliness",
  "Redness",
  "Wrinkles",
  "Dark Spots",
  "Sensitivity",
  "Uneven Texture",
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

  const handleConfirm = () => {
    if (selected.length > 0) {
      onSelect(selected);
    }
  };

  return (
    <div className="concern-selector">
      <h2 className="selector-title">What are your skincare concerns?</h2>
      <ul className="concern-list">
        {concernOptions.map((concern) => (
          <li
            key={concern}
            className={`concern-item ${selected.includes(concern) ? "selected" : ""}`}
            onClick={() => toggleConcern(concern)}
          >
            {concern}
          </li>
        ))}
      </ul>
      <button className="confirm-button" onClick={handleConfirm}>
        Confirm Selection
      </button>
    </div>
  );
};

export default ConcernSelector;