import React, { useRef, useState } from 'react';

const FaceScan = ({ onComplete }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [streaming, setStreaming] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setStreaming(true);
    } catch (err) {
      console.error('Camera access denied:', err);
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const base64Image = canvas.toDataURL('image/jpeg');
    onComplete(base64Image);
  };

  return (
    <section className="face-scan">
      <h2>Face Scan</h2>
      {!streaming ? (
        <button onClick={startCamera}>Start Camera</button>
      ) : (
        <>
          <video ref={videoRef} style={{ width: '100%', maxWidth: '400px' }} />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <button onClick={captureImage}>Capture & Continue</button>
        </>
      )}
    </section>
  );
};

export default FaceScan;