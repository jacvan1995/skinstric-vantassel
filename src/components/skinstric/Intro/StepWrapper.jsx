// src/components/skinstric/Intro/StepWrapper.jsx
import React from "react";
import PropTypes from "prop-types";
import PageLayout from "../../layout/PageLayout";

const StepWrapper = ({ children, showFooter = true, topRightButton = null }) => {
  return (
    <PageLayout showFooter={showFooter} topRightButton={topRightButton}>
      {children}
    </PageLayout>
  );
};

StepWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
  topRightButton: PropTypes.node,
};

export default StepWrapper;