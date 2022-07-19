import { CALCULATE_ETH_PRICE } from './variable';
export class CalculateTotalFractionCount {

    GetCalculatePrice(totalFraction: number, fractionSold: number) {
        const sold = ((totalFraction - fractionSold) * 100) / totalFraction;
        const total = 100 - sold;
        return [sold, total]
    }
    GetUsdPriceCalculate(USD: number | null, price: number | string) {
        return (
            USD !== null &&
            (
                ((typeof price === "string" ? parseFloat(price) : price) /
                    CALCULATE_ETH_PRICE) *
                USD
            ).toFixed(2)
        )
    }
}

const {
    GetCalculatePrice,
    GetUsdPriceCalculate
} = new CalculateTotalFractionCount()

export const calculateTotalFractionCount = (fractionSold: number, totalFraction: number) => {
    return GetCalculatePrice(fractionSold, totalFraction)
}
export const usdPriceCalculate = (
    USD: number | null,
    price: number | string
) => {
    return GetUsdPriceCalculate(USD, price)
};
