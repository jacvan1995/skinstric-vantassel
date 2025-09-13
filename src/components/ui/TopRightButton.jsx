// src/components/ui/TopRightButton.jsx
import React from "react";
import PropTypes from "prop-types";
import "./TopRightButton.css";

const TopRightButton = ({ label = "Enter Code", onClick }) => (
  <div className="top-right">
    <button className="enter-code-btn" onClick={onClick}>
      {label}
    </button>
  </div>
);

TopRightButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default TopRightButton;