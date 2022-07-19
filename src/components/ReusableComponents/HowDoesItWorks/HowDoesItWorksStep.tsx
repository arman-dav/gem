import { FC, useState } from "react";

import { Bounce } from "react-awesome-reveal";

import Union from "../../../assets/about/Union.png";


import { HowDoesItWorksStepProps } from "./model";

const HowDoesItWorksStep: FC<HowDoesItWorksStepProps | any> = ({
  title,
  stepDescription,
  onClick,
  stepTitle,
  stepContext,
}) => {
  const [showDot, setShowDot] = useState<boolean>(false);
  const [width, setWidth] = useState(0);
  return (
    <div className="homeHowItWorksStep" onClick={onClick}>
      {showDot ? (
        <Bounce className="homeHowItWorksStep__bounce">
          {/* <span></span> */}
          <div style={{ width: width }}>
            <span></span>
          </div>
        </Bounce>
      ) : null}
      <div
        className="stepContainer"
        onMouseMove={(e) => {
          setWidth(e.currentTarget.offsetWidth);
          setShowDot(true);
        }}
        onMouseLeave={() => setShowDot(false)}
      >
        <div className="stepContainer_content">
          <div className="stepContainer_content__titlePart">
            {title === "LAUCH your NFTs or tokens" ? (
              <div className="stepContainer_content__titlePart--icon">
                {/* <Union /> */}
                <img src={Union} alt="#" />
              </div>
            ) : null}
            <div className="stepContainer_content__titlePart--display">
              <p className="stepContainer_content__titlePart--title">{title}</p>
              <span className="stepContainer_content__titlePart--stepContext">
                {stepContext}
              </span>
            </div>
          </div>
          <div className="stepContainer_content__text">
            <p>{stepDescription}</p>
          </div>
        </div>
        {/* <section>
          <div className="union_icon">
            {title === "LAUCH your NFTs or tokens" ? <Union /> : null}
          </div>
          <div>
            <p>{title}</p>
            <span>{stepContext}</span>
          </div>
        </section>
        <span>{stepDescription}</span> */}
      </div>
    </div>
  );
};

export default HowDoesItWorksStep;
