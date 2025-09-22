import React from "react";
import "../styles/analysis-options.css";
import LocationSelector from "../components/ui/category-selector";
import ButtonLeft from "../assets/buttonLeft.svg";
import ButtonRight from "../assets/buttonRight.svg"
import BackgroundImg from "../assets/rombuses.svg"

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
      <img className="background-img" src={BackgroundImg} />
      <div className="header-container">
        <h3>A.I. ANALYSIS</h3>
        <h2>A.I. HAS ESTIMATED THE FOLLOWING.</h2>
        <p className="subtext">FIX ESTIMATED INFORMATION IF NEEDED.</p>
      </div>
      <div className="button-grid">
        <LocationSelector />
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
