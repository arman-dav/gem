import React, { ReactText, useEffect, useMemo, useRef, useState } from "react";

import { BagCheckFill as BagCheckFillIcon } from "react-bootstrap-icons";
import { Stars as StarsIcon } from "react-bootstrap-icons";
import { useMoralis } from "react-moralis";
import { useDispatch, shallowEqual } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Img from "../../assets/home/noImgIcon.svg";
import { ReactComponent as Eterum } from "../../assets/NFTDetail/eterum.svg";
import { ReactComponent as Key } from "../../assets/NFTDetail/key.svg";
import { ReactComponent as Share } from "../../assets/NFTDetail/Share.svg";
import { ReactComponent as Union } from "../../assets/NFTDetail/Union.svg";
import { setModal } from "../../redux/features/marketplace/marketplaceSlice";
import { useAppSelector } from "../../redux/hook";
import { handleSaleNFT } from "../../utils/buyNft";
import EtherScanUtils from "../../utils/EtherScanUtils";
import GiaDataUtils from "../../utils/GiaDataUtils";
import { defaultOwnerAddress } from "../../utils/variable";
import WalletUtils from "../../utils/WalletUtils";
import NetworkBanner from "../NetworkBanner/NetworkBanner";
import BuyNowModal from "../ReusableComponents/BuyNowmodal/BuyNowModal";
import AnchorElTooltips from "../ReusableComponents/TollTip";
import TxStateHelper, {
  TxCallbackResult,
  TxState,
  TxStateModifier,
  TxStateModifierCallback,
} from "../TxStateHelper/TxStateHelper";

import { contentData } from "./model";

const NFTDetailContent = () => {
  const dispatch = useDispatch();

  const { isModal, isOnValidChain } = useAppSelector(
    ({ marketplaceData, walletData }) => ({
      isModal: marketplaceData.isModal,
      isOnValidChain: walletData.isOnValidChain,
    }),
    shallowEqual
  );

  const { isAuthenticated, user } = useMoralis();
  const contentJson: any = localStorage.getItem("itemDetail");
  const content: contentData = JSON.parse(contentJson);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isInitTx, setIsInitTx] = useState<boolean>(false);
  const [btnText, setBtnText] = useState<string>("Buy now");
  const [buyTxState, setBuyTxState] = useState<TxState>(TxState.NONE);
  const [buyTxStateModifier, setBuyTxStateModifier] = useState<TxStateModifier>(
    TxStateModifier.NONE
  );

  const walletConfirmToastId = useRef(null as unknown as ReactText);
  const networkConfirmToastId = useRef(null as unknown as ReactText);
  const errorToastId = useRef(null as unknown as ReactText);

  const tokenAddress = useMemo(() => {
    return (
      content.listing.address.slice(0, 6) +
      "..." +
      content.listing.address.slice(38, 42)
    );
  }, [content.listing.address]);

  const params = window.location.href;

  const handleShareIcon = () => {
    navigator.clipboard.writeText(params);
    toast("Copied to clipboard!");
  };
  const handleInitilazed = (content: any) => {
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

  useEffect(() => {
    //fixme: NFTDetailContent is invoking fetchFractionDetail but it probably shouldn't as there is a separate
    // component for fraction sales
    //dispatch(fetchFractionDetail(null));
  }, [dispatch]);

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
    }
    setBtnText(btnText);
  };
  const hadleCloseModul = (e: string) => {
    if (e === "nftDetailContent--modal") {
      dispatch(setModal(false));
    }
  };

  const hasMediaUrl = content.image !== undefined;
  const isVideo = hasMediaUrl && content.image.match(/\.(webm)$/);
  const imageUrlForBlurryBg = !isVideo && hasMediaUrl ? content.image : "";

  const isClosed = content.listing.close;
  const isSold = content.listing.sold;
  const isBuyable = !isClosed && !isSold;
  const closedText = isSold ? "Sold" : "Unlisted";
  const ownerAddress = content.listing.owner.slice(0, 20) + "...";
  const list = content.listing.owner === user?.attributes.accounts[0];

  return (
    <>
      {content !== null && (
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
              <BuyNowModal content={content} isOnValidChain={isOnValidChain}>
                {isOnValidChain ? (
                  <button
                    type="button"
                    onClick={() => handleInitilazed(content)}
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
            <div
              className="nftDetailContent--image--header"
              style={{ justifyContent: "flex-end" }}
            >
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
                      href={EtherScanUtils.getAddressUrl(
                        content.listing.address
                      )}
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
                      <source src={content.image} type="video/webm" />
                    </video>
                  ) : (
                    <img src={content.image} alt="#" />
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
            <div className="nftDetailContent__description__container">
              <div className="nftDetailContent--description--container">
                <div className="nftDetailContent--description--container--genesis">
                  {content.data.collection}
                  <div className="nftDetailContent--description--container--genesis--details">
                    details
                    <div className="nftDetailContent--description--container--genesis--details--modal">
                      <div>
                        <div>
                          <div>Contract Address</div>
                          <div className="nftDetailContent--description--container--genesis--details--modal--token">
                            <a
                              href={EtherScanUtils.getAddressUrl(
                                content.listing.address
                              )}
                              target="_blank"
                              aria-label="View Contract on Etherscan"
                              title={content.listing.address}
                              rel="noreferrer"
                            >
                              {tokenAddress}
                            </a>
                          </div>
                        </div>
                        <div>
                          <div>Token ID</div>
                          <div
                            className="nftDetailContent--description--container--genesis--details--modal--token"
                            title={content.listing.tokenId}
                          >
                            <a
                              href={EtherScanUtils.getTokenUrl(
                                content.listing.address,
                                content.listing.tokenId
                              )}
                              rel="noreferrer"
                              target="_blank"
                              title="View Token on Etherscan"
                            >
                              {content.listing.tokenId}
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
                          <div>Blockchain</div>
                          <div className="nftDetailContent--description--container--genesis--details--modal--name">
                            Ethereum
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="nftDetailContent--description--container--name">
                  {GiaDataUtils.getListingName(content.data)}
                </h2>
                <p className="nftDetailContent--description--container--text">
                  {content.data.description}
                </p>
                <div>
                  <br />
                  <a
                    href={`https://storageapi.fleek.co/a53128e9-5926-44ef-bcb2-ccca1e4c31da-bucket/genesis-gems/gia-reports/${content.giaNumber}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="nftDetailContent--description--container--GIA_data_link"
                  >
                    GIA Report
                  </a>
                </div>

                <div className="nftDetailContent--description--container--owner">
                  <div className="nftDetailContent--description--container--change_container">
                    <div className="nftDetailContent--description--container--owner--change_container--gem_type">
                      {content.data.type}
                    </div>
                    <div className="nftDetailContent--description--container--owner--change_container--gem_type">
                      {content.data.carat}
                    </div>
                  </div>
                  <div className="nftDetailContent--description--container--owner--text">
                    <Key />
                    {content.listing.owner === defaultOwnerAddress ? (
                      <>
                        <span>Freshly Minted</span> <StarsIcon />
                      </>
                    ) : (
                      <>
                        { ownerAddress }
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="nftDetailContent--description--payment ">
                <div className="nftDetailContent--description--payment--price">
                  <div className="nftDetailContent--description--payment--price--eterum tooltip-container">
                    <Eterum />
                    {content.data.price}
                    <AnchorElTooltips title="Current Price" />
                  </div>
                  <div className="nftDetailContent--description--payment--price--clock"></div>
                  <div className="nftDetailContent--description--payment--price--usd">
                    <span>Initial offering</span>
                  </div>
                </div>
                {isBuyable ? (
                  <TxStateHelper
                    txHandler={handleSaleNFT}
                    txArgs={content}
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
                  <div className="closed-btn">{list ? "List" : closedText}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(NFTDetailContent);
