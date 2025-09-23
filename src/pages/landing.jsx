import React, { useState } from "react";
import buttonLeft from "../assets/buttonLeft.svg";
import buttonRight from "../assets/buttonRight.svg";
import RectangleLeft from "../assets/RectangleLeft.svg";
import RectangleRight from "../assets/RectangleRight.svg";
import "../styles/landing.css";

const Landing = ({ onNext }) => {
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <section className="stage-inner">

      <div className={`opening-page ${hoverActive ? "hover-mode" : ""}`}>
        <img
          className="rectangle-left"
          src={RectangleLeft}
          alt="Left Decoration"
        />

        <button className="lft-trn">
          <img src={buttonLeft} className="btn-left" alt="Discover Icon" />
          <span className="btn-txt">DISCOVER A.I.</span>
        </button>

        <div className="title-wrapper">
          <h2 className="main-title">
            Sophisticated
            <br />
            skincare
          </h2>
        </div>

        <div className="rgt-trn-wrapper">
          <button
            className="rgt-trn"
            onMouseEnter={() => setHoverActive(true)}
            onMouseLeave={() => setHoverActive(false)}
            onClick={onNext}
          >
            <span className="btn-txt">TAKE TEST</span>
            <img src={buttonRight} className="btn-right" alt="Test Icon" />
          </button>
        </div>

        <img
          className="rectangle-right"
          src={RectangleRight}
          alt="Right Decoration"
        />
      </div>

      <div className="opening-footer">
        Skinstric developed an A.I. that creates
        <br />
        a highly-personalised routine tailored to
        <br />
        what your skin needs.
      </div>
    </section>
  );
};

export default Landing;
