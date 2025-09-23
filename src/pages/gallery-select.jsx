import React, { useState } from "react";
import "../styles/gallery-select.css";
import CameraIcon from "../assets/camera.svg";
import GalleryIcon from "../assets/gallery.svg";
import ButtonLeft from "../assets/buttonLeft.svg";
import FullScreenCamera from "./full-sreen-camera";

const GallerySelect = ({ onNext }) => {
  const [cameraActive, setCameraActive] = useState(false);

  const handleCameraAccess = () => {
    setCameraActive(true);
  };

  return (
    <section className="stage-inner">

      <div className="header">
        <h2>TO START ANALYSIS</h2>
      </div>

      <div className="intro-content">
        <div className="intro-actions">
          <button className="intro-button" onClick={handleCameraAccess}>
            <img src={CameraIcon} alt="Camera" />
          </button>

          {cameraActive && <FullScreenCamera onConfirm={onNext} />}

          <button className="intro-button">
            <img src={GalleryIcon} alt="Gallery" />
          </button>
        </div>
      </div>
      <footer>
        <button className="back-button">
          <img className="button-left" src={ButtonLeft} alt="Back" />
          BACK
        </button>
      </footer>
    </section>
  );
};

export default GallerySelect;
