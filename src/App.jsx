import "./App.css";
import Logo from "./Components/Logo/Logo";
import Brand from "./Components/Brand/Brand";
import Tier from "./Components/Tier/Tier";
import Footer from "./Components/Footer/Footer";
import HumanHand from "./Components/HumanHand/HumanHand";
import Slider from "./Components/Slider/Slider";
import HoneyComb from "./Components/HoneyComb/HoneyComb";
import Whyus from "./Components/Whyus/Whyus";
import Circle from "./Components/Circle/Circle";

// import { PieChart } from "../../";
import PieChart from "./Components/PieChart/PieChart";
import { BrandSucess } from "./Components/brandSucess/BrandSucess";

function App() {
  return (
    <>
      <HoneyComb />
      <Logo />
      <Circle />
      <BrandSucess />
      <Whyus />
      <Tier />
      <Circle />
      <Slider />
      <HumanHand />
      <Footer />
    </>
  );
}

export default App;
