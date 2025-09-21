import React from "react";
import { raceList, ageList } from "../components/info-list";
import { generateRandomPercentages } from "../components/info-perc";
import PieChart from "../components/pie-chart";
import "../styles/demographics.css";
import ButtonLeft from "../assets/buttonLeft.svg";

const Demographics = () => {
  const selectedInfo = "race"; // toggle between "race" or "age"

  // Generate predictions
  const racePercentages = generateRandomPercentages(raceList.length);
  const agePercentages = generateRandomPercentages(ageList.length);
  const [selectedIndices, setSelectedIndices] = React.useState([]);

  const racePrediction =
    raceList[racePercentages.indexOf(Math.max(...racePercentages))];
  const agePrediction =
    ageList[agePercentages.indexOf(Math.max(...agePercentages))];

  const generateRandomSex = () => (Math.random() < 0.5 ? "Male" : "Female");
  const Sex = generateRandomSex();

  // Active data for chart + breakdown
  const activeList = selectedInfo === "race" ? raceList : ageList;
  const activePercentages =
    selectedInfo === "race" ? racePercentages : agePercentages;
  const predictedLabel =
    selectedInfo === "race" ? racePrediction : agePrediction;
  const maxValue = Math.max(...activePercentages);

  return (
    <section className="demo-page">
      <nav>
        <header>
          <h1 className="logo">
            SKINSTRIC <span className="light">[ ANALYSIS ]</span>
          </h1>
        </header>
      </nav>

      <div className="header">
        <h2 className="header-orbital">A.I. ANALYSIS</h2>
        <h3 className="header-main">DEMOGRAPHICS</h3>
        <h4 className="header-sub">PREDICTED RACE & AGE</h4>
      </div>

      <div className="info-container">
        <div className="info-column">
          <div
            className={`info-box ${selectedInfo === "race" ? "active" : ""}`}
          >
            <div className="info-top">{racePrediction}</div>
            <div className="info-bottom">RACE</div>
          </div>
          <div className={`info-box ${selectedInfo === "age" ? "active" : ""}`}>
            <div className="info-top">{agePrediction}</div>
            <div className="info-bottom">AGE</div>
          </div>
          <div className="info-box">
            <div className="info-top">{Sex}</div>
            <div className="info-bottom">SEX</div>
          </div>
        </div>

        <div className="info-graph">
          <div className="info-display">{`${racePrediction}, ${agePrediction}, ${Sex}`}</div>
          <PieChart labels={activeList} percentages={activePercentages} />
        </div>

        <div className="info-chart">
          <div className="info-chart-heading">
            <div>{selectedInfo.toUpperCase()}</div>
            <div>A.I. CONFIDENCE</div>
          </div>
            <div className="info-chart-row">
              <ul className={`info-list-${selectedInfo}`}>
                {activeList.map((item, i) => (
                  <li key={i} className="list-item">
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="percentage-list align-right">
                {activePercentages.map((value, i) => {
                  const isTop = value === maxValue;
                  return (
                    <li
                      key={i}
                      className={`list-item ${isTop ? "selected" : ""}`}
                    >
                      {value}%
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
    </section>
  );
};

export default Demographics;
