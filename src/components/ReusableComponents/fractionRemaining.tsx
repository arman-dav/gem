import { FC } from "react";

interface IFractionRemainingType {
  totalFractions: string;
  fractionsSold: number;
}

export const FractionRemaining: FC<IFractionRemainingType> = ({
  fractionsSold,
  totalFractions,
}) => {
  return (
    <div className="remaining">
      <div>{fractionsSold}</div>
      <div>{totalFractions}</div>
    </div>
  );
};
