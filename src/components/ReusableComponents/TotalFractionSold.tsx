import { memo, FC } from "react";

import { PieChart } from "react-minimal-pie-chart";

import { calculateTotalFractionCount } from "../../utils/calculateTotalFractionProcent";

export interface TotalFractionSoldProps {
  fractionSold: number;
  totalFraction: number;
}
const TotalFractionSold: FC<TotalFractionSoldProps> = memo(
  ({ fractionSold, totalFraction }) => {
    const [sold, total] = calculateTotalFractionCount(
      fractionSold,
      totalFraction
    );
    return (
      <div className="TotalFractionSold">
        <PieChart
          data={[
            { value: sold, color: "#fff" },
            { value: total, color: "#00000000" },
          ]}
        />
      </div>
    );
  }
);

export default memo(TotalFractionSold);
