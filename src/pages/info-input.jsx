import React, { useState } from "react";
import Rombuses from "../assets/rombuses.svg";
import ButtonLeft from "../assets/buttonLeft.svg";
import ButtonRight from "../assets/buttonRight.svg"
import "../styles/info-input.css";

const InfoInputFlow = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleProceed = () => {
    if (step === 1 && name.trim()) {
      setStep(2);
    } else if (step === 2 && location.trim()) {
      console.log("Name:", name);
      console.log("Location:", location);
      // Pass to short-term storage or next module
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      // Optional: navigate away or reset
    }
  };

  const inputValue = step === 1 ? name : location;
  const setInputValue = step === 1 ? setName : setLocation;
  const placeholderText = step === 1 ? "Introduce Yourself" : "Where are you from?";

  return (
    <section className="introduce-screen">

      <span className="sub-header">TO START ANALYSIS</span>

      <div className="input-container">
        <div className="introduce-content">
          <img className="rombus" src={Rombuses} alt="rombus" />
          <div className="info-subtext-container">
            <p className="intro-subtext light">CLICK TO TYPE</p>
          </div>

          <input
            type="text"
            className="intro-input"
            placeholder={placeholderText}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>

      {inputValue.trim() && (
        <button className="proceed-button fade-in" onClick={handleProceed}>
          <div>PROCEED</div>
          <img src={ButtonRight} />
        </button>
      )}

      <button className="back-button" onClick={handleBack}>
        <img src={ButtonLeft} alt="back" className="button-left" />
        <div>BACK</div>
      </button>
    </section>
  );
};

export default InfoInputFlow;