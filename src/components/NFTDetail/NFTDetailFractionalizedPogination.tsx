import { FC, memo, ReactNode } from "react";

const NFTDetailFractionalizedPagination: FC<ReactNode> = ({ children }) => {
  return <div className="fractionalizedPagination">{children}</div>;
};

export default memo(NFTDetailFractionalizedPagination);
