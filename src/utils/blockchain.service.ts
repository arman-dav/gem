import {ethers} from 'ethers';

export const handleSaleNFT = (nft: any) => {
  // get signer for contract
  const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = metamaskProvider.getSigner()
  // create a new contract form abi
  const marketPlaceContract = new ethers.Contract(
    "0x03B94d620C43F5A0Cd5f8752eF806510967a60B4"
    ,[
      "event Bids(uint256 indexed,address,uint256)",
      "event Closes(uint256 indexed)",
      "event Listings(uint256 indexed,address indexed,uint256 indexed,address,address,address,uint256,bool)",
      "event Sales(uint256 indexed,address indexed,uint256,uint256,uint256 indexed)",
      "function delistItem(uint256)",
      "function fetchItem(uint256) view returns (tuple(uint256,address,uint256,address,address,uint256,uint256,bool,bool,address))",
      "function fetchItems() view returns (tuple(uint256,address,uint256,address,address,uint256,uint256,bool,bool,address)[])",
      "function listItem(address,address,uint256,uint256,uint256,bool) payable",
      "function onERC1155BatchReceived(address,address,uint256[],uint256[],bytes) pure returns (bytes4)",
      "function onERC1155Received(address,address,uint256,uint256,bytes) pure returns (bytes4)",
      "function purchaseItem(address,uint256) payable"
    ], signer);

  const tx = marketPlaceContract.purchaseItem(nft.listing.nftContract, nft.listing.itemId, {
    value: nft.listing.price,
    gasLimit: 400000
  });
  return tx;
};


const BlockChainService = {

};

export default BlockChainService;