import ReactDOM from "react-dom";
import React, { useRef, useEffect, useState } from "react";
import "../styles/full-screen.css";
import CameraIcon from "../assets/camera-round.svg";
import CameraLoading from "../assets/camera_loading.svg";

const FullscreenCamera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");

    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/png");
      setCapturedImage(imageData);
      setShowPrompt(true);
    }
  };

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        console.log("✅ Stream acquired:", mediaStream);

        const waitForVideo = setInterval(() => {
          if (videoRef.current) {
            clearInterval(waitForVideo);
            videoRef.current.srcObject = mediaStream;
            console.log("✅ Stream assigned to video element");

            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play();
              console.log("✅ Playback started");
              console.log("📏 Video dimensions:", {
                width: videoRef.current.videoWidth,
                height: videoRef.current.videoHeight,
              });
            };

            setTimeout(() => {
              setIsLoading(false);
            }, 5000);
          } else {
            console.warn("⏳ Waiting for videoRef to mount...");
          }
        }, 100);
      } catch (err) {
        console.error("❌ Camera access error:", err);
        setIsLoading(false);
      }
    };

    setupCamera();
  }, []);

  return ReactDOM.createPortal(
    <section className="camera-wrapper">
      <div className="camera-video-container">
        <video
          ref={videoRef}
          className="camera-feed"
          autoPlay
          muted
          playsInline
        />
      </div>

      <div className="camera-overlay">
        {isLoading && (
          <div className="camera-loading-overlay">
            <img
              src={CameraLoading}
              alt="Loading"
              className="loading-spinner"
            />
            <p className="camera-setup">SETTING UP CAMERA...</p>
          </div>
        )}

        {capturedImage && (
          <div className="capture-preview">
            <img src={capturedImage} alt="Captured" className="preview-image" />
          </div>
        )}

        {capturedImage && showPrompt && (
          <div className="use-picture-prompt">
            <p>Use this picture?</p>
            <button onClick={() => console.log("Confirmed")}>Yes</button>
            <button
              onClick={() => {
                setCapturedImage(null);
                setShowPrompt(false);
              }}
            >
              Retake
            </button>
          </div>
        )}

        <canvas ref={canvasRef} style={{ display: "none" }} />

        {!capturedImage && (
          <div
            className={`overlay-text ${
              isLoading ? "loading-mode" : "active-mode"
            }`}
          >
            <h2>TO GET BETTER RESULTS MAKE SURE TO HAVE</h2>
            <ul>
              <li>ADEQUATE LIGHTING</li>
              <li>FRONTAL POSE</li>
              <li>NEUTRAL EXPRESSION</li>
            </ul>
          </div>
        )}

        <div className="capture-button">
          <div className="button-text">TAKE PHOTO</div>
          <button className="capture-inner">
            <img src={CameraIcon} alt="Take Photo" onClick={handleCapture} />
          </button>
        </div>
      </div>
    </section>,
    document.body
  );
};

export default FullscreenCamera;
