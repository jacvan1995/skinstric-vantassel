// src/components/ui/SkinstricButton.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./SkinstricButton.css";

const SkinstricButton = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
  icon = null,
}) => {
  return (
    <button
      className={classNames("skinstric-button", `skinstric-button--${variant}`, {
        "skinstric-button--loading": loading,
      })}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : label}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

SkinstricButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  icon: PropTypes.node,
};

export default SkinstricButton;