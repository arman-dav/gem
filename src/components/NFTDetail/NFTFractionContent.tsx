import { useEffect,useMemo } from "react";
import { ReactText, useRef, useState } from "react";

import { BagCheckFill as BagCheckFillIcon } from "react-bootstrap-icons";
import { useMoralis } from "react-moralis";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuid_v4 } from "uuid";


import Img from "../../assets/home/noImgIcon.svg";
import { ReactComponent as Eterum } from "../../assets/NFTDetail/eterum.svg";
// import { ReactComponent as Clock } from "../../assets/NFTDetail/Group 788.svg";
// import { ReactComponent as Key } from "../../assets/NFTDetail/key.svg";
import { ReactComponent as QuestionMark } from "../../assets/NFTDetail/questionMark.svg";
import { ReactComponent as Share } from "../../assets/NFTDetail/Share.svg";
import { ReactComponent as Union } from "../../assets/NFTDetail/Union.svg";
import { setModal } from "../../redux/features/marketplace/marketplaceSlice";
import { getPriceData } from "../../redux/features/priceCalculate/priceCalculate";
import { useAppSelector } from "../../redux/hook";
import { handleSaleNFTFraction } from "../../utils/buyNftFraction";
import EtherScanUtils from "../../utils/EtherScanUtils";
import WalletUtils from "../../utils/WalletUtils";
import NetworkBanner from "../NetworkBanner/NetworkBanner";
import BuyNowModal from "../ReusableComponents/BuyNowmodal/BuyNowModal";
import { FractionRemaining } from "../ReusableComponents/fractionRemaining";
import AnchorElTooltips from "../ReusableComponents/TollTip";
import TotalFractionSold from "../ReusableComponents/TotalFractionSold";
import TxStateHelper, {
  TxCallbackResult,
  TxState,
  TxStateModifier,
  TxStateModifierCallback,
} from "../TxStateHelper/TxStateHelper";

import { contentData } from "./model";
import NFTDetailFractionalized from "./NFTDetailFractionalized";

interface NFTFractionProps {
  tokenId?: string;
}

const NFTFraction = (props:NFTFractionProps) => {
  const dispatch = useDispatch<any>();
  const { isModal, isOnValidChain } = useAppSelector(
    ({ marketplaceData, walletData }) => ({
      isModal: marketplaceData.isModal,
      isOnValidChain: walletData.isOnValidChain,
    }),
    shallowEqual
  );

  const { isAuthenticated } = useMoralis();
  const fractionRecord: any = useSelector((state:any) => {return state.fractionData.fractionRecord;});
  const ethPriceperDay:any = useAppSelector((state)=> state.CalculatePrice.price.USD)
  const convertUsdtoEth = fractionRecord?.gemToken?.attributes.data.attributes.usdValuation / ethPriceperDay
  const typesJson: any = localStorage.getItem("fractionItemType");
  const types: any = JSON.parse(typesJson);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isInitTx, setIsInitTx] = useState(false);
  const [btnText, setBtnText] = useState("Buy now");
  const [buyTxState, setBuyTxState] = useState<TxState>(TxState.NONE);
  const [buyTxStateModifier, setBuyTxStateModifier] = useState<TxStateModifier>(
    TxStateModifier.NONE
  );

  const walletConfirmToastId = useRef(null as unknown as ReactText);
  const networkConfirmToastId = useRef(null as unknown as ReactText);
  const errorToastId = useRef(null as unknown as ReactText);
  const fractionListing = useMemo(() => {
    const strFractionListing: any = localStorage.getItem("fractionListings");
    const fractionListings = JSON.parse(strFractionListing);
    return fractionListings;
  }, [localStorage.getItem("fractionListings")]);

  const params = window.location.href;

  const handleShareIcon = () => {
    navigator.clipboard.writeText(params);
    toast("Copied to clipboard!");
  };
  const handleInitilazed = (content: any) => {
    console.log("handleInitilazed");

    if (isAuthenticated) {
      dispatch(setModal(false));
      setBuyTxState(TxState.NONE);
      setBuyTxStateModifier(TxStateModifier.NONE);
      toast.dismiss(errorToastId.current);
      toast.dismiss(walletConfirmToastId.current);
      toast.dismiss(networkConfirmToastId.current);
      setIsInitTx(true);
    }
  };
  useEffect(()=> {
    dispatch(getPriceData())
  },[ethPriceperDay])

  const txStateModifierCallback: TxStateModifierCallback = (
    txStateModifier: TxStateModifier,
    result: TxCallbackResult
  ) => {


    if (txStateModifier === buyTxStateModifier) return;

    setBuyTxStateModifier(txStateModifier);

    switch (txStateModifier) {
      case TxStateModifier.NONE:
        toast.dismiss(errorToastId.current);
        break;
      case TxStateModifier.CANCELED:
      case TxStateModifier.ERROR:
        toast.dismiss(walletConfirmToastId.current);
        toast.dismiss(networkConfirmToastId.current);
        const toastText = (
          <div className="toast-tx">
            <div className="toast-tx__text">{result.message}</div>
            {result.tx && (
              <div className="toast-tx__link">
                <span>View on Etherscan:</span>
                <a
                  href={EtherScanUtils.getTxUrl(result.tx)}
                  target="_blank"
                  title="View Transaction on Etherscan"
                  rel="noreferrer"
                >
                  {WalletUtils.getAddressAbbreviation(result.tx)}
                </a>
              </div>
            )}
          </div>
        );
        errorToastId.current = toast.error(toastText, {
          hideProgressBar: true,
        });
        break;
    }
  };

  const txStateCallback = (txState: TxState, result: TxCallbackResult) => {
    if (txState === buyTxState) return;

    setBuyTxState(txState);

    let btnText = "Buy now";

    switch (txState) {
      case TxState.WALLET_CONFIRMATION_PENDING:
      case TxState.NETWORK_CONFIRMATION_PENDING:
        walletConfirmToastId.current = toast("Confirming...", {
          autoClose: false,
        });
        btnText = "Confirming...";
        break;
      case TxState.NETWORK_CONFIRMATION_COMPLETED:
      case TxState.COMPLETED:
        btnText = "Purchased!";
        toast.update(walletConfirmToastId.current, {
          render: (
            <div className="toast-tx">
              <div className="toast-tx__text">Purchased!</div>
              {result.tx && (
                <div className="toast-tx__link">
                  <span>View on Etherscan:</span>
                  <a
                    href={EtherScanUtils.getTxUrl(result.tx)}
                    target="_blank"
                    title="View Transaction on Etherscan"
                    rel="noreferrer"
                  >
                    {WalletUtils.getAddressAbbreviation(result.tx)}
                  </a>
                </div>
              )}
            </div>
          ),
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
        });
        break;

      case TxState.WALLET_CONFIRMATION_PENDING:
        btnText = "Confirming on wallet";
        walletConfirmToastId.current = toast(btnText, { autoClose: false });
        break;
      case TxState.WALLET_CONFIRMATION_COMPLETED:
      case TxState.NETWORK_CONFIRMATION_PENDING:
        btnText = "Confirming on network";
        toast.update(walletConfirmToastId.current, {
          render: "Confirmed on wallet",
          type: toast.TYPE.INFO,
          autoClose: 5000,
        });
        networkConfirmToastId.current = toast(btnText, { autoClose: false });
        toast(btnText);
        break;
      case TxState.NETWORK_CONFIRMATION_COMPLETED:
        toast.update(networkConfirmToastId.current, {
          render: "Confirmed on network!",
          type: toast.TYPE.INFO,
          autoClose: 5000,
        });

        toast.success('Purchased!');

        break;
      case TxState.COMPLETED:
        setTimeout(()=>{
          setBuyTxState(TxState.NONE);
        }, 1000)

        break;
    }
    setBtnText(btnText);
  };

  const hadleCloseModul = (e: string) => {
    if (e === "nftDetailContent--modal") {
      dispatch(setModal(false));
    }
  };

  const hasMediaUrl = fractionRecord?.imageUrl !== undefined;
  const imageUrl = fractionRecord?.imageUrl;
  const isVideo = hasMediaUrl && imageUrl.match(/\.(webm)$/);
  const imageUrlForBlurryBg = !isVideo && hasMediaUrl ? imageUrl : "";
  const list = true;

  return (
    <>
      {fractionRecord !== null && (
        <div className={`nftDetailContent`}>
          {isModal && (
            <div
              className="nftDetailContent--modal"
              onClick={(e) =>
                hadleCloseModul((e.target as HTMLDivElement).className)
              }
              style={{
                height: window.innerHeight,
                top: window.scrollY,
              }}
            >
              <BuyNowModal content={fractionRecord} isOnValidChain={isOnValidChain}>
                {isOnValidChain ? (
                  <button
                    type="button"
                    onClick={() => handleInitilazed(fractionRecord)}
                  >
                    Buy now
                  </button>
                ) : (
                  <NetworkBanner
                    message={(networkName) =>
                      `Your wallet appears to be connected to an unsupported network. This token is only available on ${networkName}. Please connect to ${networkName} to proceed.`
                    }
                  />
                )}
              </BuyNowModal>
            </div>
          )}

          <div
            /*
                       //@ts-ignore */
            style={{ "--imageUrl": `url('${imageUrlForBlurryBg}')` }}
            className="nftDetailContent--image"
          >
            <div className="nftDetailContent--image--header">
              <div>
                {/* <Icon /> */}
                <FractionRemaining
                  totalFractions={fractionRecord.fractionalizedQuantity}
                  fractionsSold={
                    fractionRecord.fractionalizedQuantity - fractionRecord.fractionsSold
                  }
                />
                <div className="nftDetailContent--image--header--questionMark">
                  <QuestionMark />
                  <div className="nftDetailContent--image--header--questionMark--fractionalize_listing_counts">
                    {`${
                      fractionRecord.fractionalizedQuantity - fractionRecord.fractionsSold
                    } out of ${fractionRecord.fractionalizedQuantity} remaining `}
                  </div>
                </div>
              </div>
              <div>
                <div className="nftDetailContent--image--header--share">
                  <Share onClick={handleShareIcon} />
                </div>
                <div
                  className="nftDetailContent--image--header--union"
                  onClick={() => setIsOpenModal((modal) => !modal)}
                >
                  <Union />
                </div>
                {isOpenModal ? (
                  <div className="nftDetailContent--image--header--union--modal">
                    <a
                      href={EtherScanUtils.getAddressUrl(fractionRecord.address)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Etherscan
                    </a>
                    <div onClick={() => window.location.reload()}>Refresh</div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="nftDetailContent--image__overflow-container">
              <div className="blurry-bg">
                {hasMediaUrl ? (
                  isVideo ? (
                    <video autoPlay loop>
                      <source src={imageUrl} type="video/webm" />
                    </video>
                  ) : (
                    <img src={imageUrl} alt="#" />
                  )
                ) : (
                  <img
                    className="nftDetailContent--image--header--no_image"
                    src={Img}
                    alt="#"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="nftDetailContent--description">
            <div className="nftDetailContent--description--fractionalized">
              <div className="nftDetailContent--description--fractionalized--title">
                Fractionlized gems
              </div>
              <div className="nftDetailContent--description--fractionalized--description">
                Fractionlized gems are RA NFTs that have been split up into more
                NFTS.
              </div>
            </div> 
            <div className="nftDetailContent__description__container">
              <div className="nftDetailContent--description--container">
                  <div className="nftDetailContent--description--container--genesis">
                    {fractionRecord?.data?.attributes?.collection}
                    <div className="nftDetailContent--description--container--genesis--details">
                        details
                        <div className="nftDetailContent--description--container--genesis--details--modal">
                          <div>
                            <div>
                              <div>Contract Address</div>
                              <div className="nftDetailContent--description--container--genesis--details--modal--token">
                                  <a href={EtherScanUtils.getAddressUrl(   fractionRecord.address )} target="_blank" aria-label="View Contract on Etherscan" title={fractionRecord.address} rel="noreferrer" >
                                    {fractionRecord.address}
                                  </a>
                              </div>
                            </div>
                            <div>
                              <div>Token ID</div>
                              <div   className="nftDetailContent--description--container--genesis--details--modal--token"   title={fractionRecord.tokenId} >
                                <a href={EtherScanUtils.getTokenUrl(   fractionRecord.address,   fractionRecord.tokenId )} rel="noreferrer" target="_blank" title="View Token on Etherscan" >
                                  {fractionRecord.tokenId}
                                </a>
                                <AnchorElTooltips title="View token on etherscan" />
                              </div> 
                            </div> 
                            <div>
                              <div>Token Standard</div>
                              <div className="nftDetailContent--description--container--genesis--details--modal--name">
                                {/* {content.data.type} */}
                                ERC-1155
                              </div>
                            </div>
                            <div>
                              <div>Blockchain</div>/
                              <div className="nftDetailContent--description--container--genesis--details--modal--name">
                                  Ethereum
                              </div>
                            </div>
                            <div>
                              <div>Metadata</div>
                              <div className="nftDetailContent--description--container--genesis--details--modal--name">
                                Centralized
                              </div>
                            </div> 
                          </div>
                    </div>
                  </div> 
                </div>
                <h2 className="nftDetailContent--description--container--name">
                  {fractionRecord?.data?.attributes?.title}
                </h2>
                <p className="nftDetailContent--description--container--text">
                  {fractionRecord?.data?.attributes?.description}
                </p>
                <br />
                <div className="nftDetailContent--description--container--change_container">
                  <div className="nftDetailContent--description--container--owner--ct">
                    {/* {content.data.carat} */}


                    <span>appraised at: </span> <span>{convertUsdtoEth.toFixed(1)} eth</span>
                  </div>
                  {types?.map(({ name }: { name: string }) => (
                    <div
                      className="nftDetailContent--description--container--owner--change_container--gem_type"
                      key={uuid_v4()}
                    >
                      {name}
                      <AnchorElTooltips title="Gem type" />
                    </div>
                  ))}
                </div>
                <div className="nftDetailContent--description--container--owner">
                  <div className="nftDetailContent--description--container--owner--description">
                    Fractionlized gems are RA NFTs that have been split up into
                    more NFTS.
                  </div>
                  <div className="nftDetailContent--description--container--owner--text">
                    {/* <Key /> */}
                    {/* {fractionContent.owner === defaultOwnerAddress ? (
                      <>
                        <span>Freshly Minted</span> <StarsIcon />
                      </>
                    ) : (
                      { ownerAddress }
                    )} */}
                    {/* {ownerAddress} */}
                  </div>
                </div>
              </div>
              <div className="nftDetailContent--description--payment ">
                <div
                  className="nftDetailContent--description--payment--price"
                  style={{ width: "100%" }}
                >
                  <div className="nftDetailContent--description--payment--price--eterum tooltip-container">
                    <Eterum />
                    {fractionRecord.price / 10000000000000000}
                    <AnchorElTooltips title="Current Price" />
                  </div>
                  <div className="nftDetailContent--description--payment--price--clock">
                    <div>
                      <TotalFractionSold
                        fractionSold={fractionRecord.fractionsSold}
                        totalFraction={fractionRecord.fractionalizedQuantity}
                      />
                      {`${
                        fractionRecord.fractionalizedQuantity - fractionRecord.fractionsSold
                      } out of ${fractionRecord.fractionalizedQuantity} remaining`}
                    </div>
                    {/* <div>
                          Fractionlized gems are RA NFTs that have been split up
                          into more NFTS.
                        </div> */}
                  </div>
                  {/* <div className="nftDetailContent--description--payment--price--usd">
                        <span>Initial offering</span>  
                        fractionalize version 
                        <div>
                            {` $${content.data.usdValuation?.toLocaleString()}`}
                        </div> 
                      </div> */}
                </div>
                {true ? (
                  <TxStateHelper
                    txHandler={handleSaleNFTFraction}
                    txArgs={fractionRecord}
                    initTx={isInitTx}
                    setInitTx={setIsInitTx}
                    className="nftDetailContent--description--payment--buy tooltip-container"
                    txStateCallback={txStateCallback}
                    txStateModifierCallback={txStateModifierCallback}
                  >
                    {!isModal && (
                      <button
                        type="button"
                        onClick={() => {
                          isAuthenticated &&
                            buyTxState === TxState.NONE &&
                            dispatch(setModal(true));
                        }}
                        style={{
                          opacity: isAuthenticated ? "1" : "0.5",
                        }}
                        disabled={
                          !isAuthenticated || buyTxState !== TxState.NONE
                        }
                      >
                        <span
                          className={`
                              loading-spinner 
                              ${TxState.NONE}--hide 
                              ${TxState.NETWORK_CONFIRMATION_COMPLETED}--hide 
                              ${TxState.COMPLETED}--hide
                          `}
                        ></span>
                        <BagCheckFillIcon
                          className={`purchase-icon ${TxState.COMPLETED}`}
                        />
                        <span className="button-text">{btnText}</span>
                        {!isAuthenticated && (
                          <AnchorElTooltips title="Please connect your wallet to proceed" />
                        )}
                      </button>
                    )}
                  </TxStateHelper>
                ) : (
                  <div className="closed-btn">{list ? "List" : "Buy"}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
       <NFTDetailFractionalized />
    </>
  );
};
export default NFTFraction;
