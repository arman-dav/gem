import { lazy, useState } from "react";

import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as MinusIcon } from "../../assets/about/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/about/plus.svg";

import { sellNftData } from "./about.data";
const AboutBuyOneStep = lazy(() => import("./AboutBuyOneStep"));

const AboutBuyNFT = () => {
  const [isOpenBuy, setIsOpenBuy] = useState<boolean>(false);

  return (
    <div
      className="buyAndSell__content__buyNFT"
      onClick={() => setIsOpenBuy(!isOpenBuy)}
    >
      <div className="buyAndSell__content__buyNFT--content">
        <p>How to buy NFTs?</p>
        {isOpenBuy ? (
          <div className="buyAndSell__content__buyNFT--content--minus ">
            <MinusIcon />
          </div>
        ) : (
          <div className="buyAndSell__content__buyNFT--content--plus">
            <PlusIcon />
          </div>
        )}
      </div>
      <div
        className={
          isOpenBuy
            ? "buyAndSell__content__buyNFT__openContent"
            : "buyAndSell__content__buyNFT__openContent--hide"
        }
      >
        {sellNftData.map(({ step, text }) => (
          <AboutBuyOneStep step={step} text={text} key={uuid_v4()} />
        ))}
      </div>
    </div>
  );
};

export default AboutBuyNFT;
