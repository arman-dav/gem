import { FC, useEffect, useState } from "react";

import { shallowEqual } from "react-redux";

import SearchIcon from "../../assets/home/SearchIcon";
import { useAppSelector } from "../../redux/hook";

import FilterByCollection from "./filters/FilterByCollection";
import FilterByType from "./filters/FilterByType";
import SortByPrice from "./filters/SortByPrice";
import { ISearchSectionProps } from "./model";
import SelectedFilters from "./SelectedFilters";

const SearchSection: FC<ISearchSectionProps> = ({
  collectionFilterState,
  setCollectionFilterState,
  setPriceFilterState,
  sortFilterState,
  setSortFilterState,
  typeFilterState,
  setTypeFilterState,
}) => {
  const [searchSectionHeight, setSearchsectionHeight]: any = useState([]);
  const { filtersData, mergedFilters } = useAppSelector(
    ({ marketplaceData }) => ({
      filtersData: marketplaceData.filters,
      filteredTypes: marketplaceData.filters.type,
      filteredCollections: marketplaceData.filters.collection,
      filteredData: marketplaceData.filteredData,
      mergedFilters: marketplaceData.mergedFilters,
    }),
    shallowEqual
  );
  useEffect(() => {
    setSearchsectionHeight(mergedFilters);
  }, [mergedFilters]);

  return (
    <div className="searchResult_searchSection_container">
      <div className="searchResult__searchSection">
        <div className="searchResult__searchSection__upperPart">
          <div className="searchResult__searchSection__upperPart__searchPart">
            <SearchIcon color="#C4C4C4" />
            <input type="text" placeholder="Enter your search..." />
          </div>
          <div className="searchResult__searchSection__upperPart__filters">
            <div className="fractionalizedChecking"></div>
            <FilterByType
              setCollectionFilterState={setCollectionFilterState}
              setPriceFilterState={setPriceFilterState}
              setSortFilterState={setSortFilterState}
              setTypeFilterState={setTypeFilterState}
              typeFilterState={typeFilterState}
            />

            <FilterByCollection
              collectionFilterState={collectionFilterState}
              setCollectionFilterState={setCollectionFilterState}
              setPriceFilterState={setPriceFilterState}
              setSortFilterState={setSortFilterState}
              setTypeFilterState={setTypeFilterState}
            />
          </div>
          <SortByPrice
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
            sortFilterState={sortFilterState}
          />
        </div>
        {filtersData.collection.length === 0 &&
        filtersData.type.length === 0 &&
        filtersData.price.to === null &&
        filtersData.sort === null ? null : (
          <SelectedFilters />
        )}
      </div>
    </div>
  );
};

export default SearchSection;
