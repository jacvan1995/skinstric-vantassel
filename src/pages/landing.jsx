import buttonLeft from "../assets/buttonLeft.svg";
import buttonRight from "../assets/buttonRight.svg";
import rectangleLeft from "../assets/RectangleLeft.svg";
import rectangleRight from "../assets/RectangleRight.svg";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const Navigate = useNavigate()

  const handleTakeTest = () => {
    Navigate("/demographics")
  }

  return (
    <section>
      <nav>
        <header>
          <h1 className="logo">
            SKINSTRIC <span className="light">[ INTRO ]</span>
          </h1>
          <button className="btn-blk">ENTER CODE</button>
        </header>
      </nav>
      <div className="opening-page">
        <img className="rectangle-left" src={rectangleLeft} />
        <button className="lft-trn">
          <img src={buttonLeft} className="btn-left" />
          <span className="btn-txt">DISCOVER A.I.</span>
        </button>
        <h2 className="main-title">
          Sophisticated
          <br />
          skincare
        </h2>
        <button className="rgt-trn" onClick={handleTakeTest}>
          <span className="btn-txt">TAKE TEST</span>
          <img src={buttonRight} className="btn-right" />
        </button>
        <img className="rectangle-right" src={rectangleRight} />
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
