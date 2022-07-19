export interface contentData {
  listing: listingType;
  data: ListingDataType;
  txStateCallback?: any;
  token: any;
  image: string;
  giaNumber: string;
  totalFractions: number;
  fractionsSold: number;
  name: string;
  price: number
  picture: string
}

export type listingType = {
  address: string;
  createdAt: string;
  close: boolean;
  itemId: string;
  nftContract: string;
  owner: string;
  price: string;
  seller: string;
  sold: boolean;
  token: string;
  objectId: string;
  tokenId: string;
  updatedAt: string;
  imageUrl?: string;
};
export type ListingDataType = {
  carat: number;
  category: string;
  collection: string;
  color: string;
  createdAt: string;
  cuttingstylecrown: string;
  cuttingstylepavillion: string;
  description: string;
  giaNumber: string;
  measurements: measurementsType;
  price: string | number;
  shape: string;
  species: string;
  title: string;
  token: listingDataTokenType;
  transparency: string;
  type: string;
  updatedAt: string;
  usdValuation: number;
  variety: string;
};

export type measurementsType = {
  width: string;
  height: string;
  depth: string;
};
export type listingDataTokenType = {
  objectId: string;
};
