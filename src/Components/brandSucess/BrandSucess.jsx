import React from "react";
import PieChart from "../PieChart/PieChart";
import Brand from "../Brand/Brand";
import { useTypingEffect } from "../Typing/Typing";
import "../brandSucess/BrandSucess.css";
import Chart from "../../Components/PieChart2/Chart";
import Pie from "../../Components/piechart1/pie";

export const BrandSucess = () => {
  const textToAnimate =
    "This is the right place if you are in search for the best womenoutfits. Let’s redefine your styling \n system with our huge store of trendy particulars. You can take onlineat us from the comfort of \n your home and get your favourites delivered right to your doorstep.";
  const interKeyStrokeDurationInMs = 50;
  const animatedText = useTypingEffect(
    textToAnimate,
    interKeyStrokeDurationInMs
  );
  const textToAnimated =
    "This is the right place if you are in search for the best womenoutfits. \n Let’s redefine your styling  system with our huge store of trendy particulars. \n You can take onlineat us from the comfort of  your home and get your favourites \ndelivered right to your doorstep.";
  const interKeyStrokeDurationInMs1 = 50;
  const animatedText1 = useTypingEffect(
    textToAnimated,
    interKeyStrokeDurationInMs1
  );
  const textToAnimation =
    "This is the right place if you are in search for the best womenoutfits.  Let’s redefine your styling  system with our huge store of trendy particulars.  You can take onlineat  us from the comfort of  your home  and get your favourites delivered right to your doorstep.";
  const interKeyStrokeDurationInMs2 = 50;
  const animatedText2 = useTypingEffect(
    textToAnimation,
    interKeyStrokeDurationInMs2
  );
  return (
    <div className="rectangle-pie">
      <div className="powering-your-brands-container">
        <p className="powering-your-brands">Powering Your Brand's Success </p>
        <p className="with-our-core">with Our Core Values</p>
      </div>
      <div className="this-is-the-container">
        <p className="this-is-the">{animatedText}</p>
        <p className="this-is-the1">{animatedText1}</p>
        <p className="this-is-the2">{animatedText2}</p>
      </div>

      <div className="pie1">
        <PieChart />
      </div>
      <div className="pie2">
        <Chart />
      </div>
      <div className="pie3">
        {" "}
        <Pie />
      </div>
    </div>
  );
};
