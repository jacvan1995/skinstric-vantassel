import React, { useRef, useState, useEffect } from "react";

const FaceScan = ({ onComplete }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [flash, setFlash] = useState(false);
  const [shutterAnim, setShutterAnim] = useState(false);

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        setError("Camera access denied or unavailable.");
        console.error(err);
      }
    };

    initCamera();

    return () => {
      const stream = videoRef.current?.srcObject;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const startCountdown = () => {
    let timeLeft = 3;
    setCountdown(timeLeft);

    const interval = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft === 0) {
        clearInterval(interval);
        setCountdown(null);
        captureImage();
      } else {
        setCountdown(timeLeft);
      }
    }, 1000);
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const base64Image = canvas.toDataURL("image/jpeg");
    setCapturedImage(base64Image);

    setFlash(true);
    setTimeout(() => setFlash(false), 150);

    setShutterAnim(true);
    setTimeout(() => setShutterAnim(false), 300);

    const shutter = new Audio("/shutter.mp3");
    shutter.play();
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setCountdown(null);
    setFlash(false);
  };

  return (
    <section className="face-scan">
      <h2>Take a Selfie</h2>
      <p>Center your face and tap the button when ready.</p>
      {error && <p className="error">{error}</p>}

      <div
        className={`video-wrapper ${shutterAnim ? "shutter-animate" : ""}`}
        style={{ position: "relative", display: "inline-block" }}
      >
        {!capturedImage && (
          <video
            ref={videoRef}
            style={{
              width: "100%",
              maxWidth: "400px",
              transform: "scaleX(-1)",
              borderRadius: "12px",
            }}
          />
        )}

        {flash && (
          <div
            className="flash-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              opacity: 0.8,
              pointerEvents: "none",
              transition: "opacity 0.3s ease-out",
              zIndex: 2,
            }}
          />
        )}

        {countdown !== null && (
          <div
            className="countdown-overlay"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "4rem",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: "1rem 2rem",
              borderRadius: "12px",
              zIndex: 3,
            }}
          >
            {countdown}
          </div>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {!capturedImage ? (
        <button onClick={startCountdown}>Capture Selfie</button>
      ) : (
        <>
          <img
            src={capturedImage}
            alt="Captured Selfie"
            style={{
              width: "100%",
              maxWidth: "400px",
              marginTop: "1rem",
              borderRadius: "12px",
            }}
          />
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <button onClick={handleRetake}>Retake</button>
            <button onClick={() => onComplete(capturedImage)}>Continue</button>
          </div>
        </>
      )}
    </section>
  );
};

export default FaceScan;