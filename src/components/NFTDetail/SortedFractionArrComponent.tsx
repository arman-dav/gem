import { FC } from "react";

import { usdPriceCalculate } from "../../utils/calculateTotalFractionProcent";
import { CALCULATE_ETH_PRICE, defaultOwnerAddress } from "../../utils/variable";

interface ISortedFractionArrComponentType {
  price: string;
  USD: number | null;
  owner: string;
}

const SortedFractionArrComponent: FC<ISortedFractionArrComponentType> = ({
  price,
  USD,
  owner,
}) => {
  return (
    <div className="Fractionalized--content--container">
      <div className="Fractionalized--content--container--usdPrice">
        <p>ETH {parseFloat(price) / CALCULATE_ETH_PRICE}</p>( $
        {usdPriceCalculate(USD, price)} )
      </div>
      <div className="Fractionalized--content--container--fraction">23</div>
      <div className="Fractionalized--content--container--owner">
        {owner === defaultOwnerAddress
          ? "Freshly minted"
          : owner.slice(0, 6) +
            "..." +
            owner.slice(owner.length - 5, owner.length - 1)}
      </div>
      <div className="Fractionalized--content--container--buy">
        <button type="button">Buy now</button>
      </div>
    </div>
  );
};

export default SortedFractionArrComponent;
