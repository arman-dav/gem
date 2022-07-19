import { useLocation } from "react-router";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as ShowMoreIcon } from "../../../assets/aboutCategory/takeAction/showMoreIcon.svg";
import history from "../../../utils/history";

import HowDoesItWorksStep from "./HowDoesItWorksStep";
import {
  howItWorksFakeData,
  howItWorksFakeDataAbout,
} from "./HowDoesItWorksStepsFakeData";

const HowDoesItWorks = () => {
  let { pathname } = useLocation();

  return (
    <div className="how_it_works">
      {pathname === "/" ? null : (
        <div className="how_it_works--title">
          {pathname === "/about" && "Under the Hood"}
        </div>
      )}
      <div className="how_it_works--steps" id="how-doase-it-works">
        <div className="how_it_works--steps--container">
          {pathname === "/" ? (
            <div className="how_it_works--section-component">
              <div className="how_it_works--section-component--title">
                How does it work
              </div>
              <div className="how_it_works--section-component--text">
                As a Genesis Gems creator you have full control over how you
                want your customers to mint or stake your NFTs or what items you
                want to craft, what you want to put into lootboxes, etc.
              </div>
              <div className="how_it_works--section-component--text">
                From the Genesis Gems platform you can upload you assets, manage
                your projects, oversee your collections and set a wide range of
                parameters for all of the above.
              </div>
            </div>
          ) : pathname === "/about" ? (
            howItWorksFakeDataAbout.map(
              ({
                stepDescription,
                //stepNumber,
                stepTitle,
                stepContext,
              }) => (
                <HowDoesItWorksStep
                  key={uuid_v4()}
                  title={stepTitle}
                  stepDescription={stepDescription}
                  stepContext={stepContext}
                />
              )
            )
          ) : (
            howItWorksFakeData.map(({ stepDescription, stepNumber }) => (
              <HowDoesItWorksStep
                key={uuid_v4()}
                title={`Step ${stepNumber}`}
                stepDescription={stepDescription}
              />
            ))
          )}
        </div>
      </div>
      <div className="how_it_works--explore">
        <div>
          <ShowMoreIcon />
          <div onClick={() => pathname === "/about" && history.push("/")}>
            Explore
          </div>
        </div>
        <div>
          <ShowMoreIcon />
          <div>Connect Wallet</div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWorks;
