import React, { FC } from "react";

import { NFTItem } from "../../redux/features/marketplace/model";

// import { HomeSliderCollectionCardProps } from "./model";

const HomeSliderCollectionCard: FC<NFTItem> = (props) => {
  return (
    <div className="homeSliderCollectionCard" key={props.key}>
      <div>
        <img src={props.image} alt="/" />
      </div>
      <div>
        <p>{props.metadata.name}</p>
        <span>{props.owner_of}</span>
      </div>
    </div>
  );
};

export default React.memo(HomeSliderCollectionCard);
