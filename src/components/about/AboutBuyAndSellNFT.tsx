import { lazy, useEffect, useRef, useState } from "react";

const AboutBuyNFT = lazy(() => import("./AboutBuyNFT"));

const AboutBuyAndSellNFT = () => {
  const titleRef = useRef<any>(null);
  const [text, setText] = useState("How do I ...?");
  useEffect(() => {
    if (titleRef?.current?.offsetWidth <= 738) {
      setText("Guide");
    }
  }, [titleRef]);

  return (
    <div className="buyAndSell">
      <div className="buyAndSell__content">
        <p className="buyAndSell__content--title" ref={titleRef}>
          {text}
        </p>
        <AboutBuyNFT />
        <AboutBuyNFT />
        <AboutBuyNFT />
      </div>
    </div>
  );
};

export default AboutBuyAndSellNFT;
