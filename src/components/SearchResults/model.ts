import { MouseEventHandler } from "react";

import { IFiltersProps } from "./filters/model";

export type ResultsSectionProps = {
  pageNum: number;
};

export type NFTCollectionCardProps = {
  imageUrl: string;
  price: number;
  likesCount: number;
  owner: string;
  creator: string;
  onDblClick?: MouseEventHandler<HTMLDivElement>;
};

export type SelectedFilterProps = {
  className: string;
  textContent: string;
  id: string;
  displaySize: number;
  children?: any;
};

export type SelectedPriceFilterProps = {
  from: number | null;
  to: number | null;
  children: React.ReactNode;
};

export interface ISearchSectionProps extends IFiltersProps {
  typeFilterState: boolean;
  collectionFilterState: boolean;
  priceFilterState: boolean;
  sortFilterState: boolean;
}

export interface IsSaleType {
  className: "Sales";
  id: "9ACYFiCoOv8FS9ZaEI10kFLL";
  _localId: undefined;
  _objCount: number;
}
export type ISaleType = {
  address: string;
  amount: string;
  amount_decimal: amount_decimalType;
  block_hash: string;
  block_number: number;
  block_timestamp: string;
  confirmed: boolean;
  createdAt: Date;
  itemId: string;
  itemId_decimal: amount_decimalType;
  log_index: number;
  owner: string;
  quantity: string;
  quantity_decimal: amount_decimalType;
  token: tokenType;
  tokenId: string;
  tokenId_decimal: amount_decimalType;
  transaction_hash: string;
  transaction_index: number;
  updatedAt: Date;
};

export type amount_decimalType = {
  __type: string;
  value: valueType;
};
export type valueType = {
  $numberDecimal: string;
};
export type tokenType = {
  id: string;
  _localId: undefined | string;
  _objCount: number;
  className: string;
};
