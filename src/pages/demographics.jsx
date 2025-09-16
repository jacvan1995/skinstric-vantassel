import InfoList, { raceList, ageList } from "../components/info-list";
import Percentage, { generateRandomPercentages } from "../components/info-perc";
import PieChart from "../components/pie-chart";
import "../styles/demographics.css";

const Demographics = () => {
  const selectedInfo = "race";
  const activeList = selectedInfo === "race" ? raceList : ageList;
  const activePercentages = generateRandomPercentages(activeList.length);

  const generateRandomSex = () => (Math.random() < 0.5 ? "Male" : "Female");
  const Sex = generateRandomSex();

  const predictedLabel =
    activeList[activePercentages.indexOf(Math.max(...activePercentages))];

  return (
    <section>
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
          <div className="info-box">
            {selectedInfo === "race" ? predictedLabel : ""}
            <br />
            RACE
          </div>
          <div className="info-box">
            {selectedInfo === "age" ? predictedLabel : ""}
            <br />
            AGE
          </div>
          <div className="info-box">
            {Sex}
            <br />
            SEX
          </div>
        </div>

        <div className="info-graph">
          <div className="info-display">{`${predictedLabel}, ${Sex}`}</div>
          <PieChart percentages={activePercentages} labels={activeList} />
        </div>

        <div className="info-chart">
          <div className="info-chart-heading">
            <div>{selectedInfo.toUpperCase()}</div>
            <div>A.I. CONFIDENCE</div>
          </div>
          <div className="info-chart-row">
            <InfoList items={activeList} type={selectedInfo} />
            <Percentage percentages={activePercentages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demographics;
