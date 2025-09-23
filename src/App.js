import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Landing from "./pages/landing";
import InfoInput from "./pages/info-input";
import GallerySelect from "./pages/gallery-select";
import AnalysisOptions from "./pages/analysis-options";
import Demographics from "./pages/demographics";

const App = () => {
  const [stage, setStage] = useState("landing");

  // Shared state across stages
  const [userInfo, setUserInfo] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisType, setAnalysisType] = useState("");

  const transitions = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const getLogoLabel = (stage) => {
    switch (stage) {
      case "landing":
      case "info":
      case "gallery":
        return "INTRO";
      case "analysis":
      case "demographics":
        return "ANALYSIS";
      default:
        return "INTRO";
    }
  };

  return (
    <main className="skinstric-wrapper">
      <nav>
        <header>
          <h1 className="logo">
            SKINSTRIC <span className="light">[ {getLogoLabel(stage)} ]</span>
          </h1>
        </header>
      </nav>
      <div className="btn-blk">
        <button>ENTER CODE</button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          className="stage-content"
          initial={transitions.initial}
          animate={transitions.animate}
          exit={transitions.exit}
          transition={{ duration: 0.4 }}
        >
          {stage === "landing" && <Landing onNext={() => setStage("info")} />}

          {stage === "info" && (
            <InfoInput
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              onNext={() => setStage("gallery")}
            />
          )}

          {stage === "gallery" && (
            <GallerySelect
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              onNext={() => setStage("analysis")}
            />
          )}

          {stage === "analysis" && (
            <AnalysisOptions
              analysisType={analysisType}
              setAnalysisType={setAnalysisType}
              onDemographics={() => setStage("demographics")}
            />
          )}

          {stage === "demographics" && (
            <Demographics
              userInfo={userInfo}
              selectedImage={selectedImage}
              analysisType={analysisType}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default App;
