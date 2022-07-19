export interface IFiltersProps {
  setTypeFilterState: React.Dispatch<React.SetStateAction<boolean>>;
  setCollectionFilterState: React.Dispatch<React.SetStateAction<boolean>>;
  setSortFilterState: React.Dispatch<React.SetStateAction<boolean>>;
  setPriceFilterState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITypeFilterProps extends IFiltersProps {
  typeFilterState: boolean;
}
export interface ICollectionFilterProps extends IFiltersProps {
  collectionFilterState: boolean;
}

export interface IPriceFilterProps extends IFiltersProps {
  priceFilterState: boolean;
}
export interface ISortPriceProps extends IFiltersProps {
  sortFilterState: boolean;
}
