import React, { useState } from 'react';

const skinTypes = ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'];

const SkinTypeSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (type) => {
    setSelected(type);
    onSelect(type);
  };

  return (
    <div className="skin-type-selector">
      <h2>Choose Your Skin Type</h2>
      <ul>
        {skinTypes.map((type) => (
          <li
            key={type}
            className={selected === type ? 'selected' : ''}
            onClick={() => handleSelect(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkinTypeSelector;