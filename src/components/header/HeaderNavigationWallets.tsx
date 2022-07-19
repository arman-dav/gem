import { FC } from "react";

import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as WalletIcon } from "../../assets/header/walletIcon.svg";
import {
  connectWallet,
  createPopup,
  menuPopup,
} from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

import { HeaderNavigationWalletsProps } from "./model";

const HeaderNavigationWallets: FC<HeaderNavigationWalletsProps> = ({
  isAuthenticated,
  isWeb3Enabled,
}) => {
  const dispatch = useDispatch();

  const { connectWalletState, menuPopupState } = useAppSelector(
    ({ createData }) => ({
      connectWalletState: createData.data.connectWalletState,
      menuPopupState: createData.data.menuPopupState,
    }),
    shallowEqual
  );

  const handleOpenConnectWalletModal = () => {
    dispatch(createPopup(false));
    dispatch(connectWallet(!connectWalletState));
  };

  const handleOpenMenuPopup = () => {
    dispatch(createPopup(false));
    dispatch(menuPopup(!menuPopupState));
  };

  return (
    <div className="header__navigation__btn__container">
      {isAuthenticated || isWeb3Enabled ? (
        <div
          className="header__navigation__btn__container--div--black"
          onClick={handleOpenMenuPopup}
        >
          <WalletIcon />
        </div>
      ) : (
        <div
          className="header__navigation__btn__container--div--black"
          onClick={handleOpenConnectWalletModal}
        >
          <button>Connect Wallet</button>
        </div>
      )}
    </div>
  );
};

export default HeaderNavigationWallets;
