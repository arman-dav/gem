import CollectionItemCard from "../ReusableComponents/CollectionItemCard";

const MyCollections = () => {
  return (
    <div className="myCollections">
      <div className="myCollections__container">
        <span>My collections</span>
        <p>Create and manage collections of NFTs to share and sell.</p>
        <button>Create a collection</button>
        <div>
          <CollectionItemCard
            className="myCollections__container"
            collectionName="Amethyst Supreme"
            author="NFT Staking Pool"
            photoCover="Staking Pool cover photo"
          />
          <CollectionItemCard
            className="myCollections__container"
            collectionName="Loot for the Ages"
            author="lootbox"
            photoCover="Staking Pool cover photo"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
