// src/components/ui/Subtitle.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "../../styles/Utilities/Subtitle.css";

const Subtitle = ({ children, indent = false, align = "center" }) => {
  return (
    <h2
      className={classNames("skinstric-subtitle", {
        "skinstric-sub-indent": indent,
        [`text-${align}`]: align,
      })}
    >
      {children}
    </h2>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  indent: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default Subtitle;