import "./HumanHand.css";
import "./foot.css";
import Hand1 from "../../assets/Hand1.png";
import Groupdot1 from "../../assets/Groupdot1.png";
import Hand2 from "../../assets/Hand2.png";
import Groupdot from "../../assets/Groupdot.png";
import Union from "../../assets/Union.png";
import ZESDROLOGO from "../../assets/ZESDROLOGO.svg";
import { useTypingEffect } from "../Typing/Typing";
import React from "react";

function HumanHand() {
  const textToAnimate =
    "Feel free to reach out if you want to collaborate with us, or simply have a chat.";
  const interKeyStrokeDurationInMs = 50;
  const animatedText = useTypingEffect(
    textToAnimate,
    interKeyStrokeDurationInMs
  );

  return (
    <>
      <div className="rectangle-div2">
        <div class="position-relative">
          <img
            src={Groupdot1}
            className="dots position-absolute top-0 start-0"
          />
        </div>
        <div className="imageContainer position-absolute">
          <img className="human-hand-right img-fluid" alt="" src={Hand1} />
          <img className="human-hand-left img-fluid " alt="" src={Hand2} />
        </div>{" "}
      </div>
      <div className="rectangle-div3 container-fluid">
        <div className="position-relative">
          {" "}
          <img
            src={Groupdot}
            className=" dots1 position-absolute bottom-0 end-0"
          />
        </div>
        <div className="have-a-cryptic-container">
          <p className="have-a-cryptic-project-with-yo">
            <span>Have a </span>
            <span className="have-a">cryptic</span>
            <span> project with </span>
            <span className="have-a">you</span>
            <span> ?</span>
          </p>
          <p className="well-make-it-bright">
            <span>We’ll make it</span> <span className="have-a">bright</span>
          </p>
        </div>
        <div className="feel-free-to">{animatedText}</div>
        <div class="d-flex flex-row justify-content-around">
          <div class="p-2">
            <div className=" logo_image">
              <img src={ZESDROLOGO} alt="" />
            </div>
          </div>

          <div class="p-2">
            <div className="location_box position-absolute">
              <div>
                <img src={Union} alt="" className="img" />
                <div className="location_div position-absolute">
                  <h2 className="location ">Location</h2>
                  <div className="detail">
                    4TH Floor,
                    <br />
                    Alfa Horizon Tower 3, <br />
                    Vallarpadam,Kochi,
                    <br />
                    Kerala,682504.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div className="location_box1 position-absolute">
              <div>
                <img src={Union} alt="" className="img" />
                <div className="location_div position-absolute">
                  <h2 className="contactus ">Contact-us</h2>
                  <div className="detail-contact">+91 9876543210</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="website">info@zesdro.com</div>
      </div>
      <div class="position-relative">
        <img src={Groupdot1} className="dotnav position-absolute " />
      </div>
      <div className="position-relative">
        {" "}
        <img
          src={Groupdot}
          className=" dotnav1 position-absolute bottom-0 end-0"
        />
      </div>
    </>
  );
}
export default HumanHand;
