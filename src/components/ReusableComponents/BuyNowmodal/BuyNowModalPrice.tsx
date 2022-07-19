import { FC, memo, ReactNode } from "react";

import { CALCULATE_ETH_PRICE } from "../../../utils/variable";

interface IBuyNowModalPriceType {
  price: any;
  pathname: string;
  isItemPageRoute: boolean;
  children: ReactNode;
}

const BuyNowModalPrice: FC<IBuyNowModalPriceType> = ({
  price,
  pathname,
  isItemPageRoute,
  children,
}) => {
  return (
    <div className="buyNowModal--price">
      {pathname === "/profile" ? (
        <div className="buyNowModal--price--confirm_context">
          Please wait a few minutes for your transaction to be completed.
        </div>
      ) : (
        <div className="buyNowModal--price--total_price">
          Total price:
          <span>
            {isItemPageRoute ? price : price / CALCULATE_ETH_PRICE}
            ETH
          </span>
        </div>
      )}
      {children}
    </div>
  );
};

export default memo(BuyNowModalPrice);
