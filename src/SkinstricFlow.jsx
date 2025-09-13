import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import CustomerForm from "./components/skinstric/Intro/CustomerForm";
import CodeEntry from "./components/skinstric/Intro/CodeEntry";
import CameraPermission from "./components/skinstric/Scan/CameraPermission";
import FaceScanInstructions from "./components/skinstric/Scan/FaceScanInstructions";
import FaceScan from "./components/skinstric/Scan/FaceScan";
import ScanProgress from "./components/skinstric/Scan/ScanProgress";
import DemographicSummary from "./components/skinstric/Analysis/DemographicSummary";
import ConcernSelector from "./components/skinstric/Analysis/ConcernSelector";
import RoutineSummary from "./components/skinstric/Routine/RoutineSummary";
import ConfirmationPanel from "./components/skinstric/Routine/ConfirmationPanel";
import StepWrapper from "./components/skinstric/Intro/StepWrapper";

const SkinstricFlow = () => {
  const [step, setStep] = useState(0);
  const nodeRef = useRef(null);

  const [code, setCode] = useState("");
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [scanStarted, setScanStarted] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [base64Image, setBase64Image] = useState("");
  const [concerns, setConcerns] = useState([]);
  const [customer, setCustomer] = useState(null);

  const [demographics, setDemographics] = useState({
    age: "28",
    gender: "Female",
    skinTone: "Medium",
  });

  const next = () => setStep((prev) => prev + 1);

  useEffect(() => {
    if (scanComplete && base64Image) {
      fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64Image }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setDemographics({
            age: data.age,
            gender: data.gender,
            skinTone: data.skinTone,
          });
          next();
        })
        .catch((err) => console.error("PhaseTwo error:", err));
    }
  }, [scanComplete, base64Image]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
  <StepWrapper next={next}>
    <div className="skinstric-intro">
      <div className="skinstric-logo-row">
      </div>

      {/* Top-right button */}
      <button className="enter-code-button" onClick={() => setStep(1)}>
        Enter Code
      </button>

      {/* Main form */}
      <CustomerForm
        onSubmit={(formData) => {
          fetch(
            "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setCustomer(data);
              next();
            })
            .catch((err) => console.error("PhaseOne error:", err));
        }}
      />

      {/* Bottom buttons */}
      <div className="button-row">
        <button className="discover-button" onClick={() => console.log("Discover A.I.")}>
          Discover A.I.
        </button>
        <button className="take-test-button" onClick={next}>
          Take Test
        </button>
      </div>
    </div>
  </StepWrapper>
);
      case 1:
        return (
          <CodeEntry
            onSubmit={(enteredCode) => {
              setCode(enteredCode);
              next();
            }}
          />
        );
      case 2:
        return (
          <CameraPermission
            onAllow={() => {
              setCameraAllowed(true);
              next();
            }}
          />
        );
      case 3:
        return (
          <FaceScanInstructions
            onStart={() => {
              setScanStarted(true);
              next();
            }}
          />
        );
      case 4:
        return (
          <FaceScan
            onComplete={(imageData) => {
              setBase64Image(imageData);
              setScanComplete(true);
            }}
          />
        );
      case 5:
        return <ScanProgress />;
      case 6:
        return (
          <DemographicSummary
            age={demographics.age}
            gender={demographics.gender}
            skinTone={demographics.skinTone}
            onContinue={next}
          />
        );
      case 7:
        return (
          <ConcernSelector
            onSelect={(selectedConcerns) => {
              setConcerns(selectedConcerns);
              next();
            }}
          />
        );
      case 8:
        return (
          <RoutineSummary
            concerns={concerns}
            demographics={demographics}
            onConfirm={next}
          />
        );
      case 9:
        return (
          <ConfirmationPanel
            onFinish={() => {
              console.log("Routine confirmed. Flow complete.");
            }}
          />
        );
      default:
        return <div>Flow complete or step not implemented.</div>;
    }
  };

  return (
    <TransitionGroup component="div" className="transition-wrapper">
      <CSSTransition
        key={step}
        classNames="page-slide"
        timeout={400}
        nodeRef={nodeRef}
      >
        <main ref={nodeRef} className="skinstric-flow">
          {renderStep()}
        </main>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SkinstricFlow;
