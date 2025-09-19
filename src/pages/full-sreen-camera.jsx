import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";
import "../styles/full-screen.css";
import CameraIcon from "../assets/camera-round.svg"

const FullscreenCamera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
      })
      .catch((err) => {
        console.error("Camera access error:", err);
      });
  }, []);

  const cameraContent = (
    <section className="camera-wrapper">
      <div className="camera-overlay">
        <video
          ref={videoRef}
          className="camera-feed"
          autoPlay
          muted
          playsInline
        />

        {/* Top-left logo */}
        <nav className="camera-nav">
          <h1 className="logo">
            SKINSTRIC <span className="light">[ ANALYSIS ]</span>
          </h1>
        </nav>

        {/* Bottom-center instructions */}
        <div className="overlay-text">
          <h2>TO GET BETTER RESULTS MAKE SURE TO HAVE</h2>
          <ul>
            <li>ADEQUATE LIGHTING</li>
            <li>FRONTAL POSE</li>
            <li>NEUTRAL EXPRESSION</li>
          </ul>
        </div>

        {/* Bottom-right capture button */}
        <div className="capture-button">
          <div className="button-text">TAKE PHOTO</div>
          <button className="capture-inner">
            <img src={CameraIcon} alt="Take Photo" />
          </button>
        </div>
      </div>
    </section>
  );

  return ReactDOM.createPortal(cameraContent, document.body);
};

export default FullscreenCamera;
