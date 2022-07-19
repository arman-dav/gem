import { ethers } from "ethers";
import { Moralis } from "moralis/types";

export type TxHandler = (provider: any, args: any) => Promise<any>;

export const handleSaleNFT: TxHandler = async (moralis: Moralis, nft: any) => {
  // get signer for contract
  const moralisProvider: any = (await moralis.Web3.enableWeb3())
    .currentProvider;
  const externalProvider = new ethers.providers.Web3Provider(moralisProvider);
  const signer = externalProvider.getSigner();

  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const signer = provider.getSigner()
  // create a new contract form abi
  const marketPlaceContract = new ethers.Contract(
    process.env.REACT_APP_DIAMOND_ADDRESS || '',
    [
      "event Sales(uint256 indexed,address indexed,uint256,uint256,uint256 indexed)",//tx status
      "function fetchItem(uint256) view returns (tuple(uint256,address,uint256,address,address,uint256,uint256,bool,bool,address))",//get item info
      "function fetchItems() view returns (tuple(uint256,address,uint256,address,address,uint256,uint256,bool,bool,address)[])",//get item list
      "function purchaseItem(address,uint256) payable",//initiate transaction
    ],
    signer
  );

  // Create first promise for wallet-confirmation
  const walletConfirmPromise = new Promise(async (resolveWalletConfirm, rejectWalletConfirm) => {

    // Create second promise for transaction-confirmation
    let txPromise = new Promise(async (resolveTx, rejectTx) => {

      // Create final promise for contract event listener
      const salePromise = new Promise((resolveSale, rejectSale) => {
        //event Sales(uint256 indexed itemId, address indexed owner, uint256 amount, uint256 quantity, uint256 indexed tokenId);
        marketPlaceContract.on(
          "Sales",
          async (itemId, owner, amount, quantity, tokenId) => {
            if (
              owner !== (await signer.getAddress()) &&
              itemId !== nft.listing.itemId
            )
              return;
            resolveSale({
              itemId,
              owner,
              amount,
              quantity,
              tokenId,
            });
          }
        );
      });

      try {
        console.log("Purchasing: ", nft.listing.itemId);
        const tx = await marketPlaceContract.purchaseItem(
          nft.listing.nftContract,
          nft.listing.itemId,
          {
            value: nft.listing.price,
            gasLimit: 400000,
          }
        );

        // Return tranasction promise after wallet confirmation
        resolveWalletConfirm(txPromise);

        tx.wait()
          .then((txResult: any) => {
            // Return contract listener promise after transaction confirmation
            resolveTx({ txResult, contractListenerPromise: salePromise });
          })
          .catch(rejectTx)
      } catch (err) {
        rejectWalletConfirm(err);
      }
    });

  });

  return walletConfirmPromise;
};
