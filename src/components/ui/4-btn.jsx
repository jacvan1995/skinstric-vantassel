import React from "react";
import "./LocationSelector.css";

const locations = ["Melbourne", "New York", "Tokyo", "Paris"];

const LocationSelector = ({ onSelect }) => {
  return (
    <div className="location-grid">
      {locations.map((loc) => (
        <button
          key={loc}
          className="location-button"
          onClick={() => onSelect(loc)}
        >
          {loc}
        </button>
      ))}
    </div>
  );
};

export default LocationSelector;