import "./Logo.css";
import ZESDROLOGO from "../../assets/ZESDROLOGO.svg";
import { useTypingEffect } from "../Typing/Typing";
import React from "react";

function Logo() {
  const textToAnimate =
    "A visionary independent digital product studio working at the intersection \n of strategy, design, and technology. We lead organizations into their digital \n future.";
  const interKeyStrokeDurationInMs = 50;
  const animatedText = useTypingEffect(
    textToAnimate,
    interKeyStrokeDurationInMs
  );

  return (
    <div className="rectangle_logo">
      <div className="its-all-about-container">
        <p className="its-all-about">IT’S ALL ABOUT</p>
        <p className="making-things-happen">MAKING THINGS HAPPEN.</p>
      </div>
      <div className="logo-container">
        <img src={ZESDROLOGO} alt="" className="logo_img" />
      </div>
      <div className="a-visionary-independent-container position-ansolute">
        <p className="a-visionary-independent">{animatedText}</p>
      </div>
    </div>
  );
}
export default Logo;
