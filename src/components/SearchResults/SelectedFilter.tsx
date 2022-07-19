import React, { FC, useRef } from "react";

import { ReactComponent as CloseIcon } from "../../assets/searchResult/close.svg";
import {
  addTypeCollectionFilter,
  addTypeCollectionFilterTextContent,
  removeMergedFilterItems,
} from "../../redux/features/marketplace/marketplaceSlice";
import { useAppDispatch } from "../../redux/hook";

import { SelectedFilterProps } from "./model";

const SelectedFilter: FC<SelectedFilterProps> = ({
  className,
  textContent,
  children,
  id,
}) => {
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const handleRemoveFilter = () => {
    if (window.innerWidth > 673) {
      dispatch(
        addTypeCollectionFilter({
          className: className,
          textContent: textContent,
          id: id,
        })
      );
      dispatch(addTypeCollectionFilterTextContent(textContent as string));
    } else {
      dispatch(removeMergedFilterItems(ref.current));
    }
  };

  let filterTextContent =
    textContent.length > 15 && window.innerWidth < 1024
      ? textContent.split("").splice(0, 5).join("") + "..."
      : textContent;

  return (
    <div
      className="searchResult__searchSection__selectedFilters--selectedFilter"
      key={id}
    >
      <div ref={ref}>
        <p>{filterTextContent}</p>
      </div>
      <div onClick={handleRemoveFilter} className="selectedFilters__closeIcon">
        <CloseIcon />
      </div>
    </div>
  );
};

export default React.memo(SelectedFilter);
