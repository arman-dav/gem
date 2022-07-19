export interface PriceSlice {
  price: calculatePriceState;
  loading: boolean;
}
export type calculatePriceState = {
  BTC: number | null;
  USD: number | null;
  EUR: number | null;
};
