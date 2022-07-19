import { FC, memo } from "react";

import Img from "../../../assets/home/noImgIcon.svg";

interface IBuyNowModalImageType {
  content: any;
  isFractionRoute: boolean;
}

const BuyNowModalImage: FC<IBuyNowModalImageType> = ({
  content,
  isFractionRoute,
}) => {

  console.log(content);



  return (
    <div className="buyNowModal--content--image">
      {
        <img
          src={
            content.image !== undefined
              ? content.image
              : isFractionRoute
              ? content.imageUrl
              : Img
          }
          alt="#"
          style={{
            width:
              content.image || (isFractionRoute && content.imageUrl !== undefined)
                ? "100%"
                : "50%",
          }}
        />
      }
    </div>
  );
};

export default memo(BuyNowModalImage, (prevProps, nextProps) => {
  if (prevProps.isFractionRoute !== nextProps.isFractionRoute) {
    return false;
  } else {
    return true;
  }
});
