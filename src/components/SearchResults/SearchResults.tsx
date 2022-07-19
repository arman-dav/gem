import { useRef, useState } from "react";

import ResultsSection from "./ResultsSection";
import SearchSection from "./SearchSection";

const SearchResults = () => {
  const scrollTopRef = useRef<HTMLDivElement>(null);

  const [typeFilterState, setTypeFilterState] = useState<boolean>(false);
  const [collectionFilterState, setCollectionFilterState] =
    useState<boolean>(false);
  const [priceFilterState, setPriceFilterState] = useState<boolean>(false);
  const [sortFilterState, setSortFilterState] = useState<boolean>(false);

  const handleSearchPageClick = (e: any) => {
    if (
      e.target.className.length &&
      e.target.className.length !== 0 &&
      e.target.className !== "focus-visible"
    ) {
      setCollectionFilterState(false);
      setPriceFilterState(false);
      setSortFilterState(false);
      setTypeFilterState(false);
    }
  };

  return (
    <div
      className={
        sortFilterState ? "searchResult searchResult--blur" : " searchResult"
      }
      onClick={handleSearchPageClick}
    >
      <div className="searchResult__scrollTop" ref={scrollTopRef}></div>
      <SearchSection
        setCollectionFilterState={setCollectionFilterState}
        setPriceFilterState={setPriceFilterState}
        setSortFilterState={setSortFilterState}
        setTypeFilterState={setTypeFilterState}
        typeFilterState={typeFilterState}
        collectionFilterState={collectionFilterState}
        priceFilterState={priceFilterState}
        sortFilterState={sortFilterState}
      />
      <div className="searchResult__openCollection">
        <ResultsSection pageNum={1} />
        {/* <PaginationSection
          pageNum={pageNum}
          scrollTopRef={scrollTopRef}
          setPageNum={setPageNum}
        /> */}
      </div>
    </div>
  );
};

export default SearchResults;
