// src/components/skinstric/Intro/CustomerForm.jsx
import React from "react";
import "./CustomerForm.css";

const CustomerForm = ({ onSubmit }) => {
  return (
    <section className="customer-form">
      {/* Centered headline */}
      <div className="form-headline">
        <h2 className="skinstric-subtitle">
          Sophisticated<br />
          <span className="skinstric-sub-indent">Skincare</span>
        </h2>
      </div>

      {/* Bottom-left description */}
      <div className="form-description">
        <p>
          SKINSTRIC developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
        </p>
      </div>

      {/* Optional form fields */}
      <form
        className="form-fields"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {}; // collect from inputs if needed
          onSubmit(formData);
        }}
      >
        {/* Add inputs here if needed */}
        <button type="submit" className="form-submit-btn">
          Continue
        </button>
      </form>
    </section>
  );
};

export default CustomerForm;