import Rombuses from "../assets/rombuses.svg"
import "../styles/loading-screen.css"
import React from "react"

const LoadingScreen = () => {
  return (
    <section className="loading-screen">

      <div className="loading-content">
        <img src={Rombuses} alt="Loading..." className="rotating-image" />
        <h2>PREPARING YOUR ANALYSIS...</h2>
      </div>
    </section>
  );
};


export default LoadingScreen