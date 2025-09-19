import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";
import "../styles/full-screen.css";

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
        <div className="overlay-text">
          <h1>SKINSTRIC [ ANALYSIS ]</h1>
          <p>TO GET BETTER RESULTS MAKE SURE TO HAVE</p>
          <p>ADEQUATE LIGHTING</p>
          <p>FRONTAL POSE</p>
          <p>NEUTRAL EXPRESSION</p>
        </div>
      </div>
    </section>
  );

  return ReactDOM.createPortal(cameraContent, document.body);
};

export default FullscreenCamera;
