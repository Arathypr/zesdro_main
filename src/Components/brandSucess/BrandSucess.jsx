import React from "react";
import  PieChart  from "../PieChart/PieChart";
import Brand from "../Brand/Brand";
import { useTypingEffect } from "../Typing/Typing";
import "../brandSucess/BrandSucess.css";

export const BrandSucess = () => {
  const textToAnimate =
    "This is the right place if you are in search for the best womenoutfits. Let’s redefine your styling \n system with our huge store of trendy particulars. You can take onlineat us from the comfort of \n your home and get your favourites delivered right to your doorstep.";
  const interKeyStrokeDurationInMs = 50;
  const animatedText = useTypingEffect(
    textToAnimate,
    interKeyStrokeDurationInMs
  );
  return (
    <div className="rectangle-pie">
      <div className="powering-your-brands-container">
        <p className="powering-your-brands">Powering Your Brand's Success </p>
        <p className="with-our-core">with Our Core Values</p>
      </div>
      <div className="this-is-the-container">
        <p className="this-is-the">{animatedText}</p>
      </div>

      <div>
        <PieChart />
      </div>
    </div>
  );
};
