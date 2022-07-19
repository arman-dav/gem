export interface IMarketplaceState {
  loading: boolean;
  error: string;
  data: MarketplaceDataType[];
  filteredData: MarketplaceDataType[];
  filters: SearchFilterTypes;
  marketPlaceResultSection: marketPlaceResultSectionState;
  mergedFilters: string[];
  nftData: any;
  nftDataAnimation: NFTItem[];
  detailRout: any;
  Item: ListingType | null;
  priceHistory: any;
  sale: saleType[];
  isModal: boolean;
  isFractionalized: boolean
}
export type marketPlaceResultSectionState = {
  address: string;
  data: NFTItem[];
};

export type MarketplaceDataType = {
  imageUrl: string;
  price: number;
  likesCount: number;
  owner: string;
  creator: string;
  id: number;
  isLiked: boolean;
  type: string;
  collection: string;
};

type SearchFilterTypes = {
  type: CollectionAndTypeFilterTypes[];
  collection: CollectionAndTypeFilterTypes[];
  price: PriceFilterTypes;
  sort: SortByPriceTypes | any;
};

export type CollectionAndTypeFilterTypes = {
  className: string;
  textContent: string;
  id: string;
};
export type PriceFilterTypes = {
  from: number | null;
  to: number | null;
};
export type SortByPriceTypes = {
  id: string;
  className: string;
};

export type NFTItem = {
  amount: string;
  block_number: string;
  block_number_minted: string;
  contract_type: string;
  frozen: number;
  image: string;
  is_valid: number;
  metadata: MetaData;
  name: string;
  owner_of: string;
  symbol: string;
  synced_at: string;
  syncing: number;
  token_address: string;
  token_id: string;
  token_uri: string | null;
  key?: string;
  nftPrice: any | INftPrice | null;
};
export type INftPrice = {
  nativePrice: {
    value: string;
    decimals: number;
    name: string;
    symbol: string;
  };
  usdPrice: number;
  exchangeAddress: string;
  exchangeName: string;
};

export type MetaData = {
  name: string | null;
  description: string | null;
  external_link: string | null;
  image: string | null;
  animation_url: string | null;
};
export type saleType = {
  transaction_hash: string;
  transaction_index: string;
  token_ids: string[];
  seller_address: string;
  buyer_address: string;
  marketplace_address: string;
  price: string;
  block_timestamp: string;
  block_number: string;
  block_hash: string;
};
export type ListingType = {
  address: string;
  block_hash: string;
  block_number: number;
  block_timestamp: string;
  close: boolean;
  confirmed: boolean;
  createdAt: string;
  itemId: string;
  itemId_decimal: tokenID_dec;
  log_index: number;
  nftContract: string;
  owner: string;
  price: string;
  price_decimal: tokenID_dec;
  seller: string;
  sold: boolean;
  tokenId: string;
  tokenId_decimal: tokenID_dec;
  transaction_hash: string;
  transaction_index: number;
  updatedAt: string;
};
export type tokenID_dec = {
  _type: string;
  value: string;
};
export type TransactionType = {};
