import "./App.css";
import Logo from "./Components/Logo/Logo";
import Brand from "./Components/Brand/Brand";
import Tier from "./Components/Tier/Tier";
import HumanHand from "./Components/HumanHand/HumanHand";
import Slider from "./Components/Slider/Slider";
import HoneyComb from "./Components/HoneyComb/HoneyComb";
import Whyus from "./Components/Whyus/Whyus";
import Circle from "./Components/Circle/Circle";

// import { PieChart } from "../../";
import PieChart from "./Components/PieChart/PieChart";
import { BrandSucess } from "./Components/brandSucess/BrandSucess";
import FooterNav from "./Components/footernav/footer";

function App() {
  return (
    <>
      {/* <HoneyComb /> */}
      <Logo />
      <BrandSucess />
      {/* <Whyus /> */}
      {/* <Tier /> */}
      {/* <Circle /> */}
      {/* <Slider /> */}
      {/* <HumanHand />*/}
      <FooterNav />
    </>
  );
}

export default App;
