import React from "react";
import "../styles/analysis-options.css";
import LocationSelector from "../components/ui/category-selector";
import ButtonLeft from "../assets/buttonLeft.svg";
import ButtonRight from "../assets/buttonRight.svg"
import BackgroundImg from "../assets/rombuses.svg"

const AnalysisOptions = ({ onNext }) => {
  return (
    <section className="analysis-screen">
      
      <img className="background-img" src={BackgroundImg} />
      <div className="header-container">
        <h3>A.I. ANALYSIS</h3>
        <h2>A.I. HAS ESTIMATED THE FOLLOWING.</h2>
        <p className="subtext">FIX ESTIMATED INFORMATION IF NEEDED.</p>
      </div>
      <div className="button-grid">
        <LocationSelector onConfirm={onNext} />
      </div>

      <footer>
        <button className="back-button">
          <img src={ButtonLeft} />
          BACK
        </button>
        <button className="summary-button">
          GET SUMMARY
          <img src={ButtonRight} />
        </button>
      </footer>
    </section>
  );
};

export default AnalysisOptions;
