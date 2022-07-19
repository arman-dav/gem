import { lazy, useState } from "react";

import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as MinusIcon } from "../../assets/about/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/about/plus.svg";

import { sellNftData } from "./about.data";

const AboutSellOneStep = lazy(() => import("./AboutSellOneStep"));

const AboutSellNFT = () => {
  const [isOpenSell, setIsOpenSell] = useState<boolean>(false);
  return (
    <div className="buyAndSell__content__sellNFT">
      <div className="buyAndSell__content__sellNFT--content">
        <p>How to sell NFTs?</p>
        {isOpenSell ? (
          <div
            className="buyAndSell__content__sellNFT--content--minus "
            onClick={() => setIsOpenSell(!isOpenSell)}
          >
            <MinusIcon />
          </div>
        ) : (
          <div
            className="buyAndSell__content__buyNFT--content--plus"
            onClick={() => setIsOpenSell(!isOpenSell)}
          >
            <PlusIcon />
          </div>
        )}
      </div>
      <div
        className={
          isOpenSell
            ? "buyAndSell__content__sellNFT__openContent"
            : "buyAndSell__content__sellNFT__openContent--hide"
        }
      >
        {sellNftData.map(({ step, text }) => (
          <AboutSellOneStep step={step} text={text} key={uuid_v4()} />
        ))}
      </div>
    </div>
  );
};

export default AboutSellNFT;
