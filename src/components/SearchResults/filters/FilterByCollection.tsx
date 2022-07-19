import { FC } from "react";

import { useMoralisQuery } from "react-moralis";
import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as CollectionFilterIcon } from "../../../assets/searchResult/collectionFilter.svg";
import collectionNameIcon from "../../../assets/searchResult/collectionNameIcon.png";
// import { getCollectionGemToken } from "../../../redux/features/dashboard/dashboardSlice";
import {
  addTypeCollectionFilter,
  addTypeCollectionFilterTextContent,
} from "../../../redux/features/marketplace/marketplaceSlice";
import { useAppSelector } from "../../../redux/hook";

import { ICollectionFilterProps } from "./model";

const FilterByCollection: FC<ICollectionFilterProps> = ({
  collectionFilterState,
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
}) => {
  const handleOpenCollectionFilter = () => {
    setTypeFilterState(false);
    setPriceFilterState(false);
    setSortFilterState(false);
    setCollectionFilterState(!collectionFilterState);
  };

  const { filterByCollection } = useAppSelector(
    ({ marketplaceData }) => ({
      filterByCollection: marketplaceData.filters.collection,
      //margedFil: marketplaceData.mergedFilters,
    }),
    shallowEqual
  );
  const idArr = filterByCollection.map(({ id }) => id);
  // const { Moralis } = useMoralis();
  const dispatch = useDispatch();

  const handleAddFilter = async (e: any) => {
    dispatch(
      addTypeCollectionFilter({
        className: e.target.parentElement.parentElement.parentElement.className,
        textContent: e.target.textContent as string,
        id: e.target.parentElement.id,
      })
    );

    // dispatch(getCollectionGemToken(fillterColelction));

    dispatch(
      addTypeCollectionFilterTextContent(e.target.textContent as string)
    );
  };

  const collection = useMoralisQuery("Collection");
  let id = 0;

  return (
    <div
      className="filterByCollection"
      style={{
        border: `1px solid ${collectionFilterState ? "#b1dff7" : "#60666b"}`,
      }}
    >
      <div onClick={handleOpenCollectionFilter}>
        <CollectionFilterIcon />
        <p>Collection</p>
      </div>
      {collectionFilterState ? (
        <div onClick={handleAddFilter}>
          {collection.data.map(({ attributes }) => {
            id++;
            return (
              <div id={`${id}`} key={id}>
                <img src={collectionNameIcon} alt="/" />
                <p>{attributes.name}</p>
                {idArr.includes(`${id}`) ? <span></span> : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default FilterByCollection;
