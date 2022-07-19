import { FC } from "react";

import { ReactComponent as ImgIcon } from "../../assets/home/imgIcon.svg";

import { AboutBuyOneStepProps } from "./model";

const AboutBuyOneStep: FC<AboutBuyOneStepProps> = ({ imgUrl, step, text }) => {
  
  return (
    <div className="buyAndSell__content__buyNFT__openContent--oneStep">
      <div>
        <p>
          <span>{step}.</span> {text}
        </p>
        <div>
          {imgUrl ? (
            <img src={imgUrl} alt="" />
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

export default AboutBuyOneStep;
