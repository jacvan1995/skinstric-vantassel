import React, { useState, useEffect, TransitionGroup, CSSTransition } from "react";
import CodeEntry from "./components/skinstric/Intro/CodeEntry";
import CameraPermission from "./components/skinstric/Scan/CameraPermission";
import FaceScanInstructions from "./components/skinstric/Scan/FaceScanInstructions";
import FaceScan from "./components/skinstric/Scan/FaceScan";
import ScanProgress from "./components/skinstric/Scan/ScanProgress";
import DemographicSummary from "./components/skinstric/Analysis/DemographicSummary";
import RoutineSummary from "./components/skinstric/Routine/RoutineSummary";
import ConfirmationPanel from "./components/skinstric/Routine/ConfirmationPanel";
import CustomerForm from "./components/skinstric/Intro/CustomerForm";
import ConcernSelector from "./components/skinstric/Analysis/ConcernSelector";

const SkinstricFlow = () => {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState("");
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [scanStarted, setScanStarted] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [concerns, setConcerns] = useState([]);
  const [base64Image, setBase64Image] = useState("");
  const [demographics, setDemographics] = useState({
    age: "28",
    gender: "Female",
    skinTone: "Medium",
  });
  const [customer, setCustomer] = useState(null);

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

  return (
    <TransitionGroup component={null}>
  <CSSTransition key={step} classNames="page-slide" timeout={400}>
    <main className="skinstric-flow">
      {step === 0 && (
        <CustomerForm
          onSubmit={(formData) => {
            fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            })
              .then((res) => res.json())
              .then((data) => {
                setCustomer(data);
                next();
              })
              .catch((err) => console.error("PhaseOne error:", err));
          }}
        />
      )}

      {step === 1 && (
        <CodeEntry
          onSubmit={(enteredCode) => {
            setCode(enteredCode);
            next();
          }}
        />
      )}

      {step === 2 && (
        <CameraPermission
          onAllow={() => {
            setCameraAllowed(true);
            next();
          }}
        />
      )}

      {step === 3 && (
        <FaceScanInstructions
          onStart={() => {
            setScanStarted(true);
            next();
          }}
        />
      )}

      {step === 4 && (
        <FaceScan
          onComplete={(imageData) => {
            setBase64Image(imageData);
            setScanComplete(true);
          }}
        />
      )}

      {step === 5 && <ScanProgress />}

      {step === 6 && (
        <DemographicSummary
          age={demographics.age}
          gender={demographics.gender}
          skinTone={demographics.skinTone}
          onContinue={next}
        />
      )}

      {step === 7 && (
        <ConcernSelector
          onSelect={(selectedConcerns) => {
            setConcerns(selectedConcerns);
            next();
          }}
        />
      )}

      {step === 8 && (
        <RoutineSummary
          concerns={concerns}
          demographics={demographics}
          onConfirm={next}
        />
      )}

      {step === 9 && (
        <ConfirmationPanel
          onFinish={() => {
            console.log("Routine confirmed. Flow complete.");
          }}
        />
      )}
    </main>
  </CSSTransition>
</TransitionGroup>
  );
};

export default SkinstricFlow;
