import React from "react";
import { raceList, ageList } from "../components/info-list";
import { generateRandomPercentages } from "../components/info-perc";
import PieChart from "../components/pie-chart";
import "../styles/demographics.css";
import ButtonLeft from "../assets/buttonLeft.svg";

const Demographics = () => {
  const [selectedInfoType, setSelectedInfoType] = React.useState("race");
  const [selectedIndices, setSelectedIndices] = React.useState([]);

  const racePercentages = generateRandomPercentages(raceList.length);
  const agePercentages = generateRandomPercentages(ageList.length);
  const generateRandomSex = () => (Math.random() < 0.5 ? "Male" : "Female");
  const Sex = generateRandomSex();

  const racePrediction =
    raceList[racePercentages.indexOf(Math.max(...racePercentages))];
  const agePrediction =
    ageList[agePercentages.indexOf(Math.max(...agePercentages))];

  const activeList =
    selectedInfoType === "race"
      ? raceList
      : selectedInfoType === "age"
      ? ageList
      : ["Male", "Female"];

  const activePercentages =
    selectedInfoType === "race"
      ? racePercentages
      : selectedInfoType === "age"
      ? agePercentages
      : [50, 50];

  const maxValue = Math.max(...activePercentages);

  const filteredLabels = selectedIndices.length
    ? selectedIndices.map((i) => activeList[i])
    : activeList;

  const filteredPercentages = selectedIndices.length
    ? selectedIndices.map((i) => activePercentages[i])
    : activePercentages;

  const pieColors = [
    "#4caf50",
    "#f44336",
    "#2196f3",
    "#ffeb3b",
    "#9c27b0",
    "#00bcd4",
    "#ff9800",
  ];

  return (
    <main className="skinstric-wrapper">

      <div className="header">
        <h2 className="header-orbital">A.I. ANALYSIS</h2>
        <h3 className="header-main">DEMOGRAPHICS</h3>
        <h4 className="header-sub">PREDICTED RACE & AGE</h4>
      </div>

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
                  ? racePrediction
                  : type === "age"
                  ? agePrediction
                  : Sex}
              </div>
              <div className="info-bottom">{type.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div className="info-graph">
          <div className="graph-text">
            {`${racePrediction}, ${agePrediction}, ${Sex}`}
            <ul className="graph-legend">
              {filteredLabels.map((label, i) => (
                <li key={i} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: pieColors[i % pieColors.length] }}
                  ></span>
                  <span className="legend-label">{label}</span>
                </li>
              ))}
            </ul>
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
                const isTop = value === maxValue;
                const isSelected = selectedIndices.includes(i);

                return (
                  <li
                    key={i}
                    className={`list-item ${isSelected ? "selected highlight" : ""}`}
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
