import { lazy } from "react";

const HowDoesItWorks = lazy(
  () => import("../ReusableComponents/HowDoesItWorks/HowDoesItWorks")
);
const AboutWhoIsIt = lazy(() => import("./AboutWhoIsIt"));
const AboutUs = lazy(() => import("./AboutUs"));
const AboutBuyAndSellNFT = lazy(() => import("./AboutBuyAndSellNFT"));

const AboutContainer = () => {
  return (
    <div className="about">
      <AboutUs />
      <HowDoesItWorks />
      <AboutWhoIsIt />
      <AboutBuyAndSellNFT />
    </div>
  );
};

export default AboutContainer;
