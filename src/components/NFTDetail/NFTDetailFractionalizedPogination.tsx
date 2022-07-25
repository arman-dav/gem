import { FC, memo } from "react";

type NFTDetailFractionalizedPaginationProps = {
  children: React.ReactNode;
};

const NFTDetailFractionalizedPagination: FC<NFTDetailFractionalizedPaginationProps> = ({ children }) => {
  return <div className="fractionalizedPagination">{children}</div>;
};

export default memo(NFTDetailFractionalizedPagination);
