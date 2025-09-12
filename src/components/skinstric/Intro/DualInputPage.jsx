import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";

const DualInputPage = ({ pageId, onNext }) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const { updateUser } = useUser();

  const handleFirstSubmit = () => {
    if (name.trim()) setStep(1);
  };

  const handleSecondSubmit = () => {
    if (location.trim()) {
      updateUser({ name, location });
      onNext(); // triggers page transition
    }
  };

  return (
    <div className="dual-input-page">
      {step === 0 && (
        <div className="input-block fade-in">
          <input
            type="text"
            placeholder="Introduce yourself"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleFirstSubmit}
          />
        </div>
      )}

      {step === 1 && (
        <div className="input-block fade-in">
          <input
            type="text"
            placeholder="Where are you from?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onBlur={handleSecondSubmit}
          />
        </div>
      )}

      {step === 1 && location.trim() && (
        <button className="proceed-btn" onClick={handleSecondSubmit}>
          Proceed
        </button>
      )}
    </div>
  );
};

export default DualInputPage;