import "./HumanHand.css";
import Hand1 from "../../assets/Hand1.png";
import Groupdot1 from "../../assets/Groupdot1.png";
import Hand2 from "../../assets/Hand2.png";

function HumanHand() {
  return (
    <div className="rectangle-div2">
      <div class="position-relative">
        <img src={Groupdot1} className="dots position-absolute top-0 start-0" />
      </div>
      <div className="imageContainer position-absolute">
        <img className="human-hand-icon img-fluid" alt="" src={Hand1} />
        <img className="human-hand-icon1 img-fluid " alt="" src={Hand2} />
      </div>
    </div>
  );
}
export default HumanHand;
