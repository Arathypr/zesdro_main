import "./HoneyComb.css";
import honeycomb from "../../assets/honeycomb.png";
import dotcomb from "../../assets/dotcomb.png";
import Polygon from "../../assets/Polygon.svg";
import Vectorcomb from "../../assets/Vectorcomb.svg";
import Vectorcomb1 from "../../assets/Vectorcomb1.svg";
function HoneyComb() {
  return (
    <div className="rectangle_comb">
      <div className="bgImage">
        <img src={honeycomb} className="honeycomb" />

        <div className="content d-flex justify-content-center align-items-center">
          <h1 className="digital">
            DIGITAL <br /> <span className="makers">MAKERS</span>
          </h1>
        </div>

        <img src={dotcomb} alt="" className="dotcomb" />
        <div className="an-independent-creative-container">
          <p className="an-independent-creative">An independent creative</p>
          <p className="an-independent-creative">
            studio specialized in digital
          </p>
          <p className="experiences">experiences.</p>
        </div>
      </div>
    </div>
  );
}
export default HoneyComb;
