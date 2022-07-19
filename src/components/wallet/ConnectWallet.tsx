import { useCallback, useEffect } from "react";

import { useMoralis } from "react-moralis";
import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as AddWalletIcon } from "../../assets/wallet/AddWalletIcon.svg";
import { ReactComponent as MetaMask } from "../../assets/wallet/MetaMask.svg";
import { connectWallet } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

import WalletNameCard from "./WalletNameCard";

const ConnectWallet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const close = (e: any) => {
      if (e.key === "Escape") {
        dispatch(connectWallet(false));
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [dispatch]);

  const { connectWalletState } = useAppSelector(
    ({ createData }) => ({
      connectWalletState: createData.data.connectWalletState,
    }),
    shallowEqual
  );

  const { isWeb3Enabled, authenticate, isAuthenticated } = useMoralis();

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  

  useEffect(() => {
    if (isAuthenticated || isWeb3Enabled) {
      dispatch(connectWallet(false));
    }
  }, [dispatch, isAuthenticated, isWeb3Enabled]);

  useEffect(() => {
    if (!window.ethereum && localStorage.getItem("clickedStatus")) {
      dispatch(connectWallet(true));
    } else if (window.ethereum && localStorage.getItem("clickedStatus")) {
      dispatch(connectWallet(true));
    }
  }, [dispatch]);

  const handleMetamaskConnect = useCallback(async () => {
    authenticate();
    if (!window.ethereum) {
      localStorage.setItem("clickedStatus", "true");
      openInNewTab("https://metamask.io/download.html");
    } else {
      localStorage.removeItem("clickedStatus");
    }
  }, [authenticate]);

  return (
    <div>
      <div
        className={connectWalletState ? "connectWallet" : "connectWallet--hide"}
      >
        <div className="connectWallet__wrapper">
          <div className="connectWallet__wrapper__container">
            <div className="connectWallet__wrapper__container--heading">
              <p className="connectWallet__wrapper__container--heading--title">
                Connect your wallet
              </p>
            </div>
            <div className="connectWallet__wrapper__container__wallets">
              <WalletNameCard
                className="connectWallet__wrapper"
                walletName="Metamask"
                onClick={handleMetamaskConnect}
              >
                <MetaMask />
              </WalletNameCard>
            </div>
          </div>
        </div>
        <div className="connectWallet__wrapper--btnDiv">
          <AddWalletIcon /> Connect or create a new one.
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
