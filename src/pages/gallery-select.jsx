import React from "react";
import "../styles/gallery-select.css";
import CameraIcon from "../assets/camera.svg"
import GalleryIcon from "../assets/gallery.svg"
import ButtonLeft from "../assets/buttonLeft.svg"

const GallerySelect = () => {
  return (
    <section className="intro-screen">
      <nav>
        <header>
          <h1 className="logo">
            SKINSTRIC <span className="light">[ ANALYSIS ]</span>
          </h1>
        </header>
      </nav>

      <div className="header">
        <h2>TO START ANALYSIS</h2>
      </div>

      <div className="intro-content">

        <div className="intro-actions">
          <button className="intro-button">
            <img src={GalleryIcon} />
          </button>
          <button className="intro-button">
            <img src={CameraIcon} />
          </button>
        </div>

        <button className="back-button">
            <img className="button-left" src={ButtonLeft} />
            BACK
        </button>
      </div>
    </section>
  );
};

export default GallerySelect;