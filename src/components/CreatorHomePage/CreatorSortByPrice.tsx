import { FC, useState } from "react";

import { ReactComponent as PriceDownIcon } from "../../assets/searchResult/priceDown.svg";
import { ReactComponent as PriceUpIcon } from "../../assets/searchResult/priceUp.svg";
import { ReactComponent as SortFilterIcon } from "../../assets/searchResult/sort.svg";

export type CreatorSortByPriceProps = {};



const CreatorSortByPrice: FC<CreatorSortByPriceProps> = () => {
  const [sortState, setSortState] = useState<boolean>(false);

  const handleOpenSortPrice = () => {
    setSortState(!sortState);
  };

  return (
    <div className="creatorSortByPrice">
      <div onClick={handleOpenSortPrice}>
        <SortFilterIcon />
      </div>
      {sortState ? (
        <div>
          <div>New items</div>
          <div id="up">
            Price <PriceUpIcon />
          </div>
          <div id="down">
            Price <PriceDownIcon />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CreatorSortByPrice;
