import { FC } from "react";

import { ReactComponent as DeFiPngSmall } from "../../assets/details/defiPngSmall.svg";

import { DetailsSliderItemProps } from "./model";

const DetailsSliderItem: FC<DetailsSliderItemProps> = ({
  author,
  collectionName,
}) => {
  return (
    <div className="detailsSlider__card__container">
      <div className="detailsSlider__card">
        <div className="detailsSlider__card__imgDiv">
          <DeFiPngSmall />
        </div>
        <div className="detailsSlider__card__authorDiv">
          <div className="detailsSlider__card__authorDiv--author">
            <p className="detailsSlider__card__authorDiv--author--collectionName">
              {collectionName}
            </p>
            <p className="detailsSlider__card__authorDiv--author--name">
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSliderItem;
