import CollectionContainer from "./CollectionContainer";
import CollectionFilter from "./CollectionFillter";
import CollectionItems from "./CollectionItems";

const Collection = () => {
  return (
    <div className="collection">
      <CollectionContainer>
        <CollectionFilter />
        <CollectionItems />
      </CollectionContainer>
    </div>
  );
};
export default Collection;
