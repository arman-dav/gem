import { FC, memo } from "react";

interface IBuyNowTitleType {
  content: {
    title: string;
    isFractionRoute: boolean;
    pathname: string;
  };
}
const BuyNowTitle: FC<IBuyNowTitleType | any> = ({ content }) => {
  const {isFractionRoute, pathname } = content;
  const title = content.gemToken.attributes.data.attributes.title;
  const description = content.gemToken.attributes.data.attributes.description;

  return (
    <div className="buyNowModal--content--title">
      <div className="buyNowModal--content--title--container">
        <div className="buyNowModal--content--title--container--owner">
          {title}
        </div>
        <div className="buyNowModal--content--title--container--text">
          {description}
        </div>
      </div>
      <div className="buyNowModal--content--title--price_container">
        {pathname === "/profile" ? (
          <div>
            <input type="number" placeholder="price" /> ETH
          </div>
        ) : (
          isFractionRoute
        )}
      </div>
    </div>
  );
};
export default memo(BuyNowTitle, (prevProps, nextProps) => {
  if (prevProps.isFractionRoute !== nextProps.isFractionRoute) {
    return false;
  } else {
    return true;
  }
});
