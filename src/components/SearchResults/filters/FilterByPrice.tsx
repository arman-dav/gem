import { FC, useState } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as CloseIcon } from "../../../assets/searchResult/close.svg";
import { ReactComponent as DownArrowIcon } from "../../../assets/searchResult/downArrow.svg";
import { ReactComponent as PriceFilterIcon } from "../../../assets/searchResult/priceFilter.svg";
import { setPriceFilter } from "../../../redux/features/marketplace/marketplaceSlice";
import { useAppSelector } from "../../../redux/hook";

import { IPriceFilterProps } from "./model";

const FilterByPrice: FC<IPriceFilterProps> = ({
  priceFilterState,
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
}) => {
  const handleOpenPriceFilter = () => {
    setTypeFilterState(false);
    setCollectionFilterState(false);
    setSortFilterState(false);
    setPriceFilterState(!priceFilterState);
  };

  const [priceFromState, setPriceFromState] = useState<number | null>(null);

  const [priceToState, setPriceToState] = useState<number | null>(null);
  const dispatch = useDispatch();

  const { storedPrice } = useAppSelector(
    ({ marketplaceData }) => ({
      storedPrice: marketplaceData.filters.price,
    }),
    shallowEqual
  );

  const handlePressEnter = (e: any) => {
    if (
      e.key === "Enter" &&
      (storedPrice.from !== priceFromState || storedPrice.to !== priceToState)
    ) {
      dispatch(
        setPriceFilter({
          to: priceToState,
          from: priceFromState,
        })
      );
      setPriceFromState(null);
      setPriceToState(null);
      setPriceFilterState(false);
    }
  };

  return (
    <div
      className="filterByPrice"
      style={{
        border: `1px solid ${priceFilterState ? "#b1dff7" : "#60666b"}`,
      }}
    >
      <div onClick={handleOpenPriceFilter}>
        <PriceFilterIcon />
        <p>Price</p>
      </div>
      {priceFilterState ? (
        <div>
          <div>
            <PriceFilterIcon />
            <span>USD</span>
            <DownArrowIcon />
          </div>
          <div>
            <input
              type="number"
              placeholder="from"
              onChange={(e) => setPriceFromState(Number(e.target.value))}
              value={priceFromState || undefined}
              defaultValue={""}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="to"
              value={priceToState || undefined}
              defaultValue={""}
              onChange={(e) => setPriceToState(Number(e.target.value))}
              onKeyDown={handlePressEnter}
            />
          </div>
          <CloseIcon onClick={() => setPriceFilterState(false)} />
        </div>
      ) : null}
    </div>
  );
};

export default FilterByPrice;
