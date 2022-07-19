import { FC, memo } from "react";

import { ReactComponent as Eterum } from "../../../assets/NFTDetail/eterum.svg";
import { usdPriceCalculate } from "../../../utils/calculateTotalFractionProcent";
import { CALCULATE_ETH_PRICE } from "../../../utils/variable";

interface IBuyNowModalEthPriceType {
  isFractionRoute: boolean;
  content: any;
  USD: number | null;
}

const BuyNowModalEthPrice: FC<IBuyNowModalEthPriceType> = ({
  isFractionRoute,
  content,
  USD,
}) => {
  return (
    <div className="buyNowModal--content--title--price_container--eth">
{/*      <>
        <Eterum />
        {isFractionRoute ? (
          <>
            {content?.price || 0 / CALCULATE_ETH_PRICE}
            <span>($ {usdPriceCalculate(USD, content?.price)})</span>
          </>
        ) : (
          content?.data.price
        )}
      </>*/}
    </div>
  );
};

export default memo(BuyNowModalEthPrice);
