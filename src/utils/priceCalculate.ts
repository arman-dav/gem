import { CALCULATE_ETH_PRICE } from "./variable";

export const usdPriceCalculate = (
  USD: number | null,
  price: string | number
) => {
  return (
    USD !== null &&
    (
      ((typeof price === "string" ? parseFloat(price) : price) /
        CALCULATE_ETH_PRICE) *
      USD
    ).toFixed(2)
  );
};
