import React from "react";
import "../styles/info-input.css";
import ButtonLeft from "../assets/buttonLeft.svg"
import Rombuses from "../assets/rombuses.svg"

const InfoInput = () => {
  return (
    <section className="introduce-screen">
      <nav>
        <header>
          <h1 className="logo">
            SKINSTRIC <span className="light">[ ANALYSIS ]</span>
          </h1>
        </header>
      </nav>

      <div className="header">
        <h2>TO START ANALYSIS</h2>
      </div>
      <div className="input-container">
        <div className="introduce-content">
            <img className="rombus" src={Rombuses} />
          <p className="intro-subtext light">CLICK TO TYPE</p>

          <input
            type="text"
            className="intro-input"
            placeholder="Introduce Yourself"
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

export default InfoInput;
