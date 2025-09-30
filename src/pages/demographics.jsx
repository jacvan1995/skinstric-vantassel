import React, { useState, useRef, useEffect } from "react";
import { raceList, ageList } from "../components/info-list";
import { generateRandomPercentages } from "../components/info-perc";
import PieChart from "../components/pie-chart";
import "../styles/demographics.css";
import ButtonLeft from "../assets/buttonLeft.svg";

const Demographics = () => {
  const [selectedInfoType, setSelectedInfoType] = useState("race");
  const [selectedIndices, setSelectedIndices] = useState([]);

  // Freeze predictions on initial render
  const racePercentagesRef = useRef(generateRandomPercentages(raceList.length));
  const agePercentagesRef = useRef(generateRandomPercentages(ageList.length));
  const sexRef = useRef(Math.random() < 0.5 ? "Male" : "Female");

  const racePredictionRef = useRef(
    raceList[
      racePercentagesRef.current.indexOf(
        Math.max(...racePercentagesRef.current)
      )
    ]
  );
  const agePredictionRef = useRef(
    ageList[
      agePercentagesRef.current.indexOf(Math.max(...agePercentagesRef.current))
    ]
  );

  const activeList =
    selectedInfoType === "race"
      ? raceList
      : selectedInfoType === "age"
      ? ageList
      : ["Male", "Female"];

  const activePercentages =
    selectedInfoType === "race"
      ? racePercentagesRef.current
      : selectedInfoType === "age"
      ? agePercentagesRef.current
      : [50, 50];

  const maxValue = Math.max(...activePercentages);

  const filteredLabels = selectedIndices.length
    ? selectedIndices.map((i) => activeList[i])
    : activeList;

  const filteredPercentages = selectedIndices.length
    ? selectedIndices.map((i) => activePercentages[i])
    : activePercentages;

  return (
    <main className="skinstric-wrapper">
      <div className="demo-content">
        <div className="header">
          <h2 className="header-orbital">A.I. ANALYSIS</h2>
          <h3 className="header-main">DEMOGRAPHICS</h3>
          <h4 className="header-sub">PREDICTED RACE & AGE</h4>
        </div>
        <div className="demographics-layout">
          <div className="info-container">
            <div className="info-column">
              {["race", "age", "sex"].map((type) => (
                <div
                  key={type}
                  className={`info-box ${
                    selectedInfoType === type ? "highlight" : ""
                  }`}
                  onClick={() => setSelectedInfoType(type)}
                >
                  <div className="info-top">
                    {type === "race"
                      ? racePredictionRef.current
                      : type === "age"
                      ? agePredictionRef.current
                      : sexRef.current}
                  </div>
                  <div className="info-bottom">{type.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="info-graph">
            <div className="graph-text">
              {selectedInfoType === "race"
                ? racePredictionRef.current
                : selectedInfoType === "age"
                ? agePredictionRef.current
                : sexRef.current}
            </div>
            <div className="graph-chart">
              <PieChart
                labels={filteredLabels}
                percentages={filteredPercentages}
              />
            </div>
          </div>

          <div className="info-chart">
            <div className="info-chart-heading">
              <div>{selectedInfoType.toUpperCase()}</div>
              <div>A.I. CONFIDENCE</div>
            </div>
            <div className="info-chart-row">
              <ul className="info-paired-list">
                {activeList.map((label, i) => {
                  const value = activePercentages[i];
                  const isSelected = selectedIndices.includes(i);

                  return (
                    <li
                      key={i}
                      className={`list-item ${
                        isSelected ? "selected highlight" : ""
                      }`}
                      onClick={() => {
                        setSelectedIndices((prev) =>
                          prev.includes(i)
                            ? prev.filter((idx) => idx !== i)
                            : [...prev, i]
                        );
                      }}
                    >
                      <span className="label">{label}</span>
                      <span className="value">{value}%</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <button className="back-button">
          <img className="button-left" src={ButtonLeft} alt="Back" />
          BACK
        </button>
        <div className="graph-txt">
          If A.I. estimate is wrong, please select the correct one.
        </div>
        <div className="footer-btn-group">
          <button className="res-btn">RESET</button>
          <button className="con-btn">CONFIRM</button>
        </div>
      </footer>
    </main>
  );
};

export default Demographics;
