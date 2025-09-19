import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";
import "../styles/full-screen.css";
import CameraIcon from "../assets/image 225 (Traced).svg";

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
    <section
      className="camera-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 999999,
      }}
    >
      <div className="camera-overlay">
        <video
          ref={videoRef}
          className="camera-feed"
          autoPlay
          muted
          playsInline
        />
        <div>
          <nav>
            <h1 className="logo">
              SKINSTRIC <span className="light">[ ANALYSIS ]</span>
            </h1>
          </nav>
          <div className="capture-button">
            <div className="button-text">TAKE PHOTO</div>
            <button className="capture-inner">
              <img src={CameraIcon} />
            </button>
          </div>
          <div className="overlay-text">
            <p>TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
            <p>ADEQUATE LIGHTING</p>
            <p>FRONTAL POSE</p>
            <p>NEUTRAL EXPRESSION</p>
          </div>
        </div>
      </div>
    </section>
  );

  return ReactDOM.createPortal(cameraContent, document.body);
};

export default FullscreenCamera;
