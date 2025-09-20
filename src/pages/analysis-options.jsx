import React from "react";
import "../styles/analysis-options.css";

const AnalysisOptions = () => {
  return (
    <section className="analysis-screen">
      <nav>
        <header>
          <h1 className="logo">
            SKINSTRIC <span className="light">[ ANALYSIS ]</span>
          </h1>
        </header>
      </nav>
      <div className="analysis-header">
        <h2>A.I. HAS ESTIMATED THE FOLLOWING.</h2>
        <p className="subtext">FIX ESTIMATED INFORMATION IF NEEDED.</p>
      </div>

      <div className="button-grid">
        <button className="grid-button">DEMOGRAPHICS</button>
        <button className="grid-button">SKIN TYPE</button>
        <button className="grid-button">DETAILS</button>
        <button className="grid-button">WEATHER</button>
      </div>

      <div className="footer-actions">
        <button className="back-button">BACK</button>
        <button className="summary-button">GET SUMMARY</button>
      </div>
    </section>
  );
};

export default AnalysisOptions;
