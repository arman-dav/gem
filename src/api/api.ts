import axios from "axios";

import { BASE_URL, BLOGS, CALCULATE_PRICE, FAQ } from "../utils/constant";

// export const getMarketplaceData = () => {
//   return axios.get("searchResult.json").then((res) => res.data);
// };

const api: any = axios.create({
  baseURL: BASE_URL,
});
export const getHerokuApp = () => {
  return api.get(`${FAQ}`);
};

export const getBlock = () => {
  return api.get(`${BLOGS}`);
};
export const getCalculatePrice = () => {
  return axios.get(CALCULATE_PRICE).then((res) => res.data);
};
