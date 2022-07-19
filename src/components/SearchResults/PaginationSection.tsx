import React, { FC } from "react";

import { ReactComponent as LeftArrow } from "../../assets/searchResult/leftArrow.svg";
import { ReactComponent as RighgtArrow } from "../../assets/searchResult/rightArrow.svg";

import { searchResultFakeData } from "./searchResultFakeData";

export type PaginationSectionProps = {
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
  scrollTopRef: React.MutableRefObject<any>;
};

const PaginationSection: FC<PaginationSectionProps> = ({
  setPageNum,
  pageNum,
  scrollTopRef,
}) => {
  const lastPageNum = Math.ceil(searchResultFakeData.length / 15);

  const executeScroll = () =>
    scrollTopRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

  const decrementPageNum = () => {
    pageNum === 1 ? setPageNum(pageNum) : setPageNum(pageNum - 1);
    executeScroll();
  };

  const incrementPageNum = () => {
    pageNum === lastPageNum ? setPageNum(pageNum) : setPageNum(pageNum + 1);
    executeScroll();
  };

  return (
    <div className="searchResult__openCollection__pagination">
      <p>Page</p>
      <div className="searchResult__openCollection__pagination--page">
        <span>{pageNum}</span> of &nbsp;&nbsp;&nbsp; {lastPageNum}
      </div>
      <div className="searchResult__openCollection--arrowsDiv">
        <LeftArrow onClick={decrementPageNum} />
        <RighgtArrow onClick={incrementPageNum} />
      </div>
    </div>
  );
};

export default PaginationSection;
