import React from "react";
import "../styles/info-input.css";
import ButtonLeft from "../assets/buttonLeft.svg";
import Rombuses from "../assets/rombuses.svg";

const InfoInputLoc = () => {
  return (
    <section className="introduce-screen">
      <nav>
        <header>
          <h1 className="logo">
            SKINSTRIC <span className="light">[ ANALYSIS ]</span>
          </h1>
        </header>
      </nav>
      <span className="sub-header">TO START ANALYSIS</span>

      <div className="input-container">
        <div className="introduce-content">
          <img className="rombus" src={Rombuses} />
          <div className="info-subtext-container">
            <p className="intro-subtext light">CLICK TO TYPE</p>
          </div>

          <input
            type="text"
            className="intro-input"
            placeholder="Where are you from?"
          />
        </div>
      </div>
      <button className="back-button">
        <img src={ButtonLeft} alt="" className="button-left" />
        <div>BACK</div>
      </button>
    </section>
  );
};

export default InfoInputLoc;
