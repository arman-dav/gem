import { FC, useState } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as CloseIcon } from "../../../assets/create/closeIcon.svg";
import { ReactComponent as PriceDown } from "../../../assets/searchResult/priceDown.svg";
import { ReactComponent as PriceUp } from "../../../assets/searchResult/priceUp.svg";
import { ReactComponent as SortFilterIcon } from "../../../assets/searchResult/sort.svg";
import { sortByAction } from "../../../redux/features/marketplace/listingSlice";

import { ISortPriceProps } from "./model";
import { sortFakeData } from "./sortFakeData";

export type sortType = {
  img: string | null;
  text: string;
  active: boolean;
  id: number;
  field: string;
  direction: string;
};
export type sorteItem = {
  field: string;
  direction: string;
};

const SortByPrice: FC<ISortPriceProps> = ({
  sortFilterState,
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
}) => {
  const [data, setData]: any = useState(sortFakeData);

  const handleOpenSortPrice = () => {
    setTypeFilterState(false);
    setCollectionFilterState(false);
    setPriceFilterState(false);
    setSortFilterState(!sortFilterState);
  };

  const dispuch = useDispatch();
  const handleSorting = (id: number) => {
    dispuch(sortByAction(id));
    let sortSettingsCopy: sortType[] = [...data];
    sortSettingsCopy.forEach((i: sortType) => (i.active = false));
    sortSettingsCopy[id].active = true;
    setData(sortSettingsCopy);
  };

  return (
    <>
      {sortFilterState ? <div className="sortByPrice__blur"></div> : null}
      <div className="sortByPrice">
        <div onClick={handleOpenSortPrice}>
          <SortFilterIcon />
        </div>
        {sortFilterState ? (
          <div>
            <div className="sortByPrice__media">
              <SortFilterIcon />
              <p>Filters</p>
              <div
                className="sortByPrice__media__closeIcon"
                onClick={() => {
                  setSortFilterState(!sortFilterState);
                }}
              >
                <CloseIcon />
              </div>
            </div>
            {sortFakeData.map(({ id, text, active }) => (
              <div id={`${id}`} key={id} onClick={() => handleSorting(id)}>
                {text}
                {active ? <span></span> : null}
                {text === "Listed: Latest" ? (
                  <PriceDown />
                ) : text === "Listed: Oldest" ? (
                  <PriceUp />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SortByPrice;
