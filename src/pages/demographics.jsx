import InfoList from "../components/info-list";
import Percentage from "../components/info-perc"
import PieChart from "../components/pie-chart";



const Demographics = ({raceListItem, ageListItem}) => {
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
            {raceListItem}
            <br />
            RACE
          </div>
          <div className="info-box">
            {ageListItem}
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
          <div className="info-display">{selectedInfo}</div>
          <PieChart percentages = {Percentage}/>
        </div>
        <div className="info-chart">
          <div className="info-chart-heading">
            <div>RACE</div>
            <div>A.I. CONFIDENCE</div>
          </div>
          <div className="info-chart-left">
            <InfoList type="race" />
          </div>
          <div className="percentage-value">
            <Percentage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demographics
