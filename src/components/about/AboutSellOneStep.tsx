import { FC } from "react";

import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";

import { AboutSellOneStepProps } from "./model";

const AboutSellOneStep: FC<AboutSellOneStepProps> = ({
  imgUrl,
  step,
  text,
}) => {
  return (
    <div className="buyAndSell__content__sellNFT__openContent--oneStep">
      <div className="buyAndSell__content__sellNFT__openContent--oneStep--content">
        <p className="buyAndSell__content__sellNFT__openContent--oneStep--content--title">
          Step {step}
        </p>
        <p className="buyAndSell__content__sellNFT__openContent--oneStep--content--text">
          {text}
        </p>
        <div className="buyAndSell__content__sellNFT__openContent--oneStep--content--img">
          {imgUrl ? (
            <img src={imgUrl} alt="#" />
          ) : (
            <>
              <ImgIcon />
              <p>Image</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSellOneStep;
