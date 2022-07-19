import { ethers } from "ethers";
import { Moralis } from "moralis/types";

export type TxHandler = (provider: any, args: any) => Promise<any>;

export const handleSaleNFTFraction: TxHandler = async (moralis: Moralis, nft: any) => {

    console.log('handleSaleNFTFraction');

  // get signer for contract
  const moralisProvider: any = (await moralis.Web3.enableWeb3()).currentProvider;
  const externalProvider = new ethers.providers.Web3Provider(moralisProvider);
  const signer = externalProvider.getSigner();

  //todo: verify that this is the right abi, what are the params for the Sales event?
  const tokenSaleContract = new ethers.Contract(
    process.env.REACT_APP_DIAMOND_ADDRESS || '',
    [
/*      "event Sales(uint256 indexed,address indexed,uint256,uint256,uint256 indexed)",//tx status
      "function fetchItem(uint256) view returns (tuple(uint256,address,uint256,address,address,uint256,uint256,bool,bool,address))",//get item info
      "function fetchItems() view returns (tuple(uint256,address,uint256,address,address,uint256,uint256,bool,bool,address)[])",//get item list
      "function purchaseItem(address,uint256) payable",//initiate transaction*/
        //address indexed buyer, address indexed tokenAddress, uint256 indexed tokenId, uint256 salePrice
        "event TokenSold(address indexed,address indexed,uint256 indexed,uint256)",
        "function getTokens(address) view returns (tuple(address,address,uint256,address,uint256,uint256,uint256))",
        "function purchase(address) payable"
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
        tokenSaleContract.on(
          "TokenSold",
          //todo: update signature for event handler
          // address indexed buyer, address indexed tokenAddress, uint256 indexed tokenId, uint256 salePrice
          // async (itemId, owner, amount, quantity, tokenId) => {
          async (buyer, tokenAddress, tokenId, salePrice) => {

            console.log('TokenSold!');

            if (
                buyer !== (await signer.getAddress())
            ) return;

            resolveSale({
                itemId:tokenId,
                buyer,
                salePrice,
                quantity:1,
                tokenId
            });
          }
        );
      });

      try {

        console.log("Purchasing: ", nft.fractionalizedToken);

        //todo: update to pass one param -- the fractionalized address of the fractionalizedAddress (from Seb)
        //todo: pass in address of fractionalized token address

/*
        const tx = await tokenSaleContract.purchase(
          nft.listing.nftContract,
          nft.listing.itemId,
          {
            value: nft.listing.price,
            gasLimit: 4600000,
          }
        );
*/

          // const tokenSale = await getDiamondFacet(hre, 'TokenSaleFacet');
          const tssettings = await tokenSaleContract.getTokens(nft.fractionalizedToken);
          // const price = tssettings.price;
          const price = tssettings[5];
          console.log(`purchase price: ${price}`);

          const tx = await tokenSaleContract.purchase(
              nft.fractionalizedToken,
              {
                  value: price,
                  gasLimit: 4600000,
              }
          );

        // Return transaction promise after wallet confirmation
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
