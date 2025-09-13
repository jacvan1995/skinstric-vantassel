// src/components/skinstric/Scan/FaceScan.jsx
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/Scan/FaceScan.css";

const FaceScan = ({ onComplete }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streamReady, setStreamReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setStreamReady(true);
        }
      } catch (err) {
        setError("Unable to access camera. Please check permissions.");
        console.error("Camera error:", err);
      }
    };

    initCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64 = canvas.toDataURL("image/jpeg");
      onComplete(base64);
    }
  };

  return (
    <section className="face-scan">
      <h2 className="scan-title">Align Your Face</h2>
      <p className="scan-instructions">
        Position your face within the frame and tap the button below to begin your scan.
      </p>

      {error ? (
        <p className="scan-error">{error}</p>
      ) : (
        <>
          <div className="video-wrapper">
            <video ref={videoRef} className="scan-video" playsInline muted />
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>

          <button
            className="scan-capture-btn"
            onClick={captureImage}
            disabled={!streamReady}
          >
            Capture Scan
          </button>
        </>
      )}
    </section>
  );
};

FaceScan.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default FaceScan;