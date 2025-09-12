import React, { useState } from "react";
import CodeEntry from "./Intro/CodeEntry";
import CameraPermission from "./Scan/CameraPermission";
import FaceScanInstructions from "./Scan/FaceScanInstructions";
import FaceScan from "./Scan/FaceScan";
import ScanProgress from "./Scan/ScanProgress";
import DemographicSummary from "./Analysis/DemographicSummary";
import RoutineSummary from "./Routine/RoutineSummary";
import ConfirmationPanel from "./Routine/ConfirmationPanel";
import CustomerForm from "./Intro/CustomerForm";

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
    <main className="skinstric-flow">
      {step === 0 && (
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
  );
};

export default SkinstricFlow;
