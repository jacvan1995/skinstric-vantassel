import React, { useState } from "react";
import Rombuses from "../assets/rombuses.svg";
import ButtonLeft from "../assets/buttonLeft.svg";
import ButtonRight from "../assets/buttonRight.svg";
import "../styles/info-input.css";

const InfoInputFlow = ({ onNext }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitDemographics = async ({ name, location }) => {
    try {
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, location }),
        }
      );
      const data = await response.json();
      console.log("✅ API response:", data);
      return data;
    } catch (err) {
      console.error("❌ API error:", err);
      return null;
    }
  };

  const handleProceed = async () => {
    if (step === 1 && name.trim()) {
      setStep(2);
    } else if (step === 2 && location.trim()) {
      setIsSubmitting(true);
      setError(null);

      const result = await submitDemographics({ name, location });

      if (result && onNext) {
        onNext(); // 🔥 transition to next stage
      } else {
        setError("Something went wrong. Please try again.");
      }

      setIsSubmitting(false);
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
  const placeholderText =
    step === 1 ? "Introduce Yourself" : "Where are you from?";

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProceed();
  };

  return (
    <section className="introduce-screen">
      <span className="sub-header">TO START ANALYSIS</span>

      <form className="input-container" onSubmit={handleSubmit}>
        <div className="introduce-content">
          <img className="rombus" src={Rombuses} alt="rombus" />
          <div className="info-subtext-container">
            <p className="intro-subtext light">
              {step === 2 && location.trim()
                ? "WHERE ARE YOU FROM?"
                : "CLICK TO TYPE"}
            </p>
          </div>

          <input
            type="text"
            className="intro-input"
            placeholder={placeholderText}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        {inputValue.trim() && (
          <button type="submit" className="proceed-button fade-in" disabled={isSubmitting}>
            <div>{isSubmitting ? "Submitting..." : "PROCEED"}</div>
            <img src={ButtonRight} alt="proceed" />
          </button>
        )}
      </form>

      {error && <p className="error-message">{error}</p>}

      <button className="back-button" onClick={handleBack} disabled={isSubmitting}>
        <img src={ButtonLeft} alt="back" className="button-left" />
        <div>BACK</div>
      </button>
    </section>
  );
};

export default InfoInputFlow;