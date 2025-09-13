// src/components/layout/PageLayout.jsx
import React from "react";
import PropTypes from "prop-types";
import "../../styles/layout/PageLayout.css";

const PageLayout = ({ children, showFooter = true, topRightButton = null, footerContent = null }) => {
  return (
    <div className="page-layout">
      {/* Top-right button slot */}
      {topRightButton && (
        <div className="top-right">
          {topRightButton}
        </div>
      )}

      {/* Main content */}
      <div className="page-content">
        {children}
      </div>

      {/* Optional footer */}
      {showFooter && (
        <div className="page-footer">
          {footerContent}
        </div>
      )}
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
  topRightButton: PropTypes.node,
  footerContent: PropTypes.node,
};

export default PageLayout;