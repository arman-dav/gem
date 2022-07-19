import { MARKET_PLACE_URL } from "./constant";

export const defaultOwnerAddress = '0x0000000000000000000000000000000000000000'
export const CALCULATE_ETH_PRICE = 10000000000000000
export const DEFAULT_OWNER = 'Freshly Minted'

export const ITEM_PAGE_ROUT = localStorage.getItem("item-page-rout");
export const FRACTION_ROUT = localStorage.getItem("item-page-fraction-route");

export const IS_MARKETPLACE_URL = MARKET_PLACE_URL === process.env.REACT_APP_MORALIS_SERVER_URL

export const MARKETPLACE_TYPE = process.env.TYPE
