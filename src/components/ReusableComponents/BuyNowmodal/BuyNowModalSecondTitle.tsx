import { FC, memo } from "react";

import BuyNowModalEthPrice from "./BuyNowModalEthPrice";

interface BuyNowModalSecondTitle {
  data: any;
  USD: number | null;
  isItemPageRoute: boolean;
  isFractionRoute: boolean;
  content: any;
  pathname: string;
  dataLength: any;
}

const BuyNowModalSecondTitle: FC<BuyNowModalSecondTitle> = ({
  data,
  USD,
  isItemPageRoute,
  isFractionRoute,
  content,
  pathname,
  dataLength,
}) => {
  return (
    <div className="buyNowModal--content--title">
      <div className="buyNowModal--content--title--container">
        {isItemPageRoute && (
          <div className="buyNowModal--content--title--container--owner">
            {data.collection}
          </div>
        )}
        <div className="buyNowModal--content--title--container--text">
          {isItemPageRoute
            ? data.title
            : `Current Fraction Number: ${
                dataLength !== null && parseInt(dataLength) + 1
              }`}
        </div>
      </div>
      <div className="buyNowModal--content--title--price_container">
        {pathname === "/profile" ? (
          <div>
            <input type="number" placeholder="price" /> ETH
          </div>
        ) : (
          <BuyNowModalEthPrice
            USD={USD}
            isFractionRoute={isFractionRoute}
            content={content}
          />
        )}
      </div>
    </div>
  );
};

export default memo(BuyNowModalSecondTitle, (prevProps, nextProps) => {
  if (prevProps.isFractionRoute !== nextProps.isFractionRoute) {
    return false;
  } else {
    return true;
  }
});
