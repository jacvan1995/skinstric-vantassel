import React from "react";
import "../../styles/category-selector.css";

const categories = [
  { label: "Demographics", active: true },
  { label: "Cosmetic Concerns", active: false },
  { label: "Weather", active: false },
  { label: "Skin Type Details", active: false }
];

const CategorySelector = () => {
  const onSelect = (category) => {
    if (category === "Demographics") {
      console.log("Navigating to Demographics");
      // Add navigation or state logic here
    } else {
      console.log(`${category} is inactive`);
    }
  };

  return (
    <div className="diamond-wrapper">
      <div className="diamond-grid">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            className={`category-button pos-${i} ${!cat.active ? "disabled" : ""}`}
            onClick={() => onSelect(cat.label)}
          >
            <span className="button-label">{cat.label}</span>
            {!cat.active && <span className="inactive-icon"></span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;