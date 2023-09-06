import "./Brand.css";
import PieChart from "../PieChart/PieChart";
import Chart from "../PieChart2/Chart";
import group5 from "../../assets/group5.svg";
import group3 from "../../assets/group3.svg";
import group4 from "../../assets/group4.svg";
import { useTypingEffect } from "../Typing/Typing";
import React, { useState } from "react";

function Brand({ activeIndex }) {
  // const textToAnimate =
  //   "This is the right place if you are in search for the best womenoutfits. Let’s redefine your styling \n system with our huge store of trendy particulars. You can take onlineat us from the comfort of \n your home and get your favourites delivered right to your doorstep.";
  // const interKeyStrokeDurationInMs = 50;
  // const animatedText = useTypingEffect(
  //   textToAnimate,
  //   interKeyStrokeDurationInMs
  // );
  // State to track which stroke line is hovered
  const [hoveredStroke, setHoveredStroke] = useState(null);

  const handlePieHover = (entry, index) => {
    // Set the hovered stroke index
    setHoveredStroke(index);
  };

  const handlePieLeave = () => {
    // Reset the hovered stroke index when leaving the pie chart
    setHoveredStroke(null);
  };
  return (
    <div className="rectangle-div container-fluid">
      {/* <div className="powering-your-brands-container">
        <p className="powering-your-brands">Powering Your Brand's Success </p>
        <p className="with-our-core">with Our Core Values</p>
      </div>
      <div className="this-is-the-container">
        <p className="this-is-the">{animatedText}</p>
      </div> */}
      {/* <div className="pie1">
        {" "}
        <PieChart onPieEnter={handlePieHover} onPieLeave={handlePieLeave} />
      </div> */}
      <div className="pie2">
        {" "}
        <Chart />
      </div>

      <div
        // className="imgvector position-absolute"
        className={`imgvector position-absolute ${
          activeIndex === 0 ? "highlighted" : "normal"
        }`}
      >
        <img className="vector-box " alt="" src={group3} />
        <div className="we-focus-on-container">
          <span>We focus on building elegant </span>
          <span className="experiences">experiences</span>
          <span>
            {" "}
            that meet your users where they are and get them to where they{" "}
          </span>
          <span className="experiences">want to be</span>
        </div>
      </div>
      <div
        // className="imgvector position-absolute"
        className={`imgvector position-absolute ${
          activeIndex === 2 ? "highlighted" : "normal"
        }`}
      >
        <img className="vector-box1" alt="" src={group5} />
        <div className="we-believe-every-container">
          <span>We believe every </span>
          <b>design decision</b>
          <span>
            {" "}
            should be measured by its ability to help you reach actual{" "}
          </span>
          <b>business goals</b>
        </div>
      </div>
      <div
        // className="imgvector position-absolute"

        className={`imgvector position-absolute ${
          activeIndex === 1 ? "highlighted" : "normal"
        }`}
      >
        <img className="vector-box2" alt="" src={group4} />
        <div className="technology-is-a-container">
          <span>
            Technology is a double-edged sword : we take into account your
            current{" "}
          </span>
          <b>capabilities</b>
          <span> and </span>
          <b>limitations</b>
          <span>
            {" "}
            to build practical designs that can be effectively and immediately
            implemented.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Brand;
