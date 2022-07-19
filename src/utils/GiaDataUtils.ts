import { ListingDataType } from "../components/NFTDetail/model";

export const getListingName = (giaData: ListingDataType) =>
    `${giaData?.carat} Carat ${giaData?.shape} ${giaData?.color} ${giaData?.variety}`;

const GiaDataUtils = {
    getListingName
};

export default GiaDataUtils;
