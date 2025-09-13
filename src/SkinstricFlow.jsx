// src/flows/SkinstricFlow.jsx
import React, { useState } from "react";
import PageLayout from "./components/layout/PageLayout";
import StepWrapper from "./components/skinstric/Intro/StepWrapper";
import CodeEntry from "./components/skinstric/Intro/CodeEntry";
import CameraPermission from "./components/skinstric/Scan/CameraPermission";
import FaceScanInstructions from "./components/skinstric/Scan/FaceScanInstructions";
import FaceScan from "./components/skinstric/Scan/FaceScan";
import ScanProgress from "./components/skinstric/Scan/ScanProgress";
import SearchBar from "./components/skinstric/Intro/SearchBar";
import RoutineSummary from "./components/skinstric/Routine/RoutineSummary";
import ConfirmationPanel from "./components/skinstric/Routine/ConfirmationPanel";
import Subtitle from "./components/ui/Subtitle";

import "./styles/SkinstricFlow.css";

const SkinstricFlow = () => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const [scanImage, setScanImage] = useState(null);
  const [concerns, setConcerns] = useState([]);
  const [demographics, setDemographics] = useState({
    age: "",
    gender: "",
    skinTone: "",
  });

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return (
        <PageLayout showFooter={false}>
          <CodeEntry
            onSubmit={(enteredCode) => {
              setCode(enteredCode);
              next();
            }}
          />
        </PageLayout>
      );

    case 2:
      return (
        <StepWrapper next={next}>
          <CameraPermission
            onAllow={() => {
              setCameraAllowed(true);
              next();
            }}
          />
          <SearchBar
            placeholder="Introduce yourself"
            onSearch={(query) => console.log("Step 2 search:", query)}
          />
        </StepWrapper>
      );

    case 3:
      return (
        <StepWrapper next={next} back={back}>
          <FaceScanInstructions onContinue={next} />
        </StepWrapper>
      );

    case 4:
      return (
        <StepWrapper next={next} back={back}>
          <FaceScan
            onComplete={(base64Image) => {
              setScanImage(base64Image);
              next();
            }}
          />
        </StepWrapper>
      );

    case 5:
      return (
        <StepWrapper next={next} back={back}>
          <ScanProgress onComplete={next} />
          <SearchBar
            placeholder="Where are you from?"
            onSearch={(query) =>
              setDemographics((prev) => ({ ...prev, location: query }))
            }
          />
        </StepWrapper>
      );

    case 6:
      return (
        <StepWrapper next={next} back={back}>
          <Subtitle indent={true}>What are your top skin concerns?</Subtitle>
          <SearchBar
            placeholder="e.g. dryness, acne, redness"
            onSearch={(query) => setConcerns(query.split(",").map((c) => c.trim()))}
          />
        </StepWrapper>
      );

    case 7:
      return (
        <StepWrapper next={next} back={back}>
          <Subtitle indent={true}>Tell us more about your skin</Subtitle>
          <SearchBar
            placeholder="Age, gender, skin tone"
            onSearch={(query) => {
              const [age, gender, skinTone] = query.split(",").map((s) => s.trim());
              setDemographics({ age, gender, skinTone });
              next();
            }}
          />
        </StepWrapper>
      );

    case 8:
      return (
        <PageLayout showFooter={false}>
          <RoutineSummary
            concerns={concerns}
            demographics={demographics}
            onConfirm={next}
          />
        </PageLayout>
      );

    case 9:
      return (
        <PageLayout showFooter={false}>
          <ConfirmationPanel
            onFinish={() => {
              console.log("Routine confirmed. Flow complete.");
            }}
          />
        </PageLayout>
      );

    default:
      return (
        <PageLayout showFooter={false}>
          <h2>Unknown step</h2>
        </PageLayout>
      );
  }
};

export default SkinstricFlow;
