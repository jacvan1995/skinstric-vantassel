import React from "react";

const WelcomeMessage = ({ pageId }) => {
  const isCentered = pageId === "000";

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      {/* Centered headline */}
      <div
        style={{
          position: "absolute",
          top: isCentered ? "50%" : "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Sophisticated skincare</h1>
      </div>

      {/* Bottom-left paragraph */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          maxWidth: "400px",
          textAlign: "left",
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        <p>
          SKINSTRIC developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;