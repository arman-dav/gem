import { FC } from "react";

type CollectionContainerProps = {
  children: React.ReactNode;
};

const CollectionContainer: FC<CollectionContainerProps> = ({ children }) => {
  return <div className="collection_container">{children}</div>;
};
export default CollectionContainer;
