import { useEffect } from "react";

import { useMoralis } from "react-moralis";
import { shallowEqual, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import {
  toast,
  // ToastContainer
} from "react-toastify";

import { ReactComponent as CopyIcon } from "../../assets/header/copyIcon.svg";
import {
  connectWallet,
  menuPopup,
} from "../../redux/features/create/createSlice";
import "../../redux/features/wallet/walletSlice";
import {
  setAccount,
  setBalance,
  setIsOnValidChain,
} from "../../redux/features/wallet/walletSlice";
import { useAppSelector } from "../../redux/hook";
import { SupportedChains } from "../../utils/WalletUtils";

import NativeBalance from "./NativeBalance";

const MenuPopup = () => {
  const { menuPopupState, account, balance } = useAppSelector(
    ({ createData, walletData }) => ({
      menuPopupState: createData.data.menuPopupState,
      account: walletData.account,
      balance: walletData.balance,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const close = (e: any) => {
      if (e.key === "Escape") {
        dispatch(menuPopup(false));
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [dispatch]);

  const { logout, user, isWeb3Enabled, web3, isAuthenticated, chainId } =
    useMoralis();
  useEffect(() => {
    if (isWeb3Enabled && isAuthenticated) {
      web3?.eth
        .getAccounts()
        .then((account) => dispatch(setAccount(account[0])));

      if (account) {
        web3?.eth.getBalance(account).then((res) => dispatch(setBalance(res)));
      }

      dispatch(setIsOnValidChain(SupportedChains.isSupportedById(chainId)));
    }
  }, [web3, isWeb3Enabled, dispatch, account, chainId, isAuthenticated]);

  const handleCloseMenuPopup = () => dispatch(menuPopup(false));

  const accountFirstPart = user
    ?.get("ethAddress")
    .split("")
    .slice(0, 6)
    .join("");
  const accountSecondPart = user
    ?.get("ethAddress")
    .split("")
    .slice(38, 42)
    .join("");

  const accountFirstPartWC = account?.split("").slice(0, 6).join("");
  const accountSecondPartWC = account?.split("").slice(38, 42).join("");

  const copyAccount = async () => {
    const account = user?.attributes.accounts[0];
    navigator.clipboard.writeText(account);
    toast(`${account} was copied on clipboard`);
  };

  const handleLogOut = () => {
    logout();
    dispatch(connectWallet(true));
  };

  const handleClickMenuPopup = (e: any) => {
    if (e.target.className === "menuPopup") {
      dispatch(menuPopup(false));
    }
  };
  return (
    <>
      <div
        className={menuPopupState ? "menuPopup" : "menuPopup--hide"}
        onClick={handleClickMenuPopup}
      >
        <div className="menuPopup__container">
          <div className="menuPopup__container__upperPart">
            <div className="menuPopup__container__upperPart__myWalletDiv">
              <div className="menuPopup__container__upperPart__myWalletDiv--titleDiv">
                <p>My wallet</p>
                {/* <div>
                  <ReloadIcon />
                </div> */}
              </div>
              <div className="menuPopup__container__upperPart__balance">
                <div className="menuPopup__container__upperPart__balance--balanceDiv">
                  <div>
                    {isWeb3Enabled ? (
                      <span>ETH {balance}</span>
                    ) : isAuthenticated ? (
                      <NativeBalance />
                    ) : (
                      <span>0 ETH</span>
                    )}
                    <p>Total Balance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="menuPopup__container__upperPart__myWalletDiv--tokenDiv">
              <p onClick={copyAccount}>
                {isWeb3Enabled
                  ? `${accountFirstPartWC}...${accountSecondPartWC}`
                  : `${accountFirstPart}...${accountSecondPart}`}
              </p>
              <CopyIcon
                onClick={() => {
                  copyAccount();
                }}
              />
            </div>
          </div>
          <div
            className="menuPopup__container__profileDiv"
            onClick={handleCloseMenuPopup}
          >
            <div>
              <a href="https://opensea.io/account">My Profile</a>
            </div>
            <div onClick={handleLogOut}>
              <NavLink to={pathname}>Log Out</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPopup;
