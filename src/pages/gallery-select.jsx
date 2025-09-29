import React, { useState, useRef } from "react";
import "../styles/gallery-select.css";
import CameraIcon from "../assets/camera.svg";
import GalleryIcon from "../assets/gallery.svg";
import ButtonLeft from "../assets/buttonLeft.svg";
import FullScreenCamera from "./full-sreen-camera";

const GallerySelect = ({ onNext }) => {
  const [cameraActive, setCameraActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleCameraAccess = () => {
    setCameraActive(true);
  };

  const handleGalleryAccess = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger hidden file input
    }
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("📁 Selected file:", file);
      // You can pass the file to onNext or process it here
      onNext(file);
    }
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

          <button className="intro-button" onClick={handleGalleryAccess}>
            <img src={GalleryIcon} alt="Gallery" />
          </button>

          {/* Hidden file input for gallery access */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelected}
          />
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