import { FC } from "react";

import { shallowEqual, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Props } from "recharts/types/container/Surface";

import {
  changeMobileMenuState,
  connectWallet,
  menuPopup,
} from "../redux/features/create/createSlice";
import { useAppSelector } from "../redux/hook";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import NetworkBanner from "./NetworkBanner/NetworkBanner";
import ConnectWallet from "./wallet/ConnectWallet";
import MenuPopup from "./wallet/MenuPopup";
declare global {
  interface Window {
    ethereum: any;
  }
}
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }:LayoutProps) => {
  const { progress, connectWalletState, createPopupState, menuPopupState } =
    useAppSelector(
      ({ createData, marketplaceData }) => ({
        progress: createData.data.progress,
        connectWalletState: createData.data.connectWalletState,
        createPopupState: createData.data.createPopupState,
        menuPopupState: createData.data.menuPopupState,
        isModal: marketplaceData.isModal,
      }),
      shallowEqual
    );

  const dispatch = useDispatch();

  const handleClickLayout = (e: any) => {
    if (e.target.className === "headerMobileMenu") {
      dispatch(changeMobileMenuState(false));
    }
    if (
      typeof e.target.className === "string" &&
      !e.target.className.includes("menuPopup") &&
      e.target.className.length !== 0
    ) {
      dispatch(menuPopup(false));
    }
    if (e.target.className === "connectWallet") {
      dispatch(connectWallet(false));
      localStorage.removeItem("clickedStatus");
    }
  };
  return (
      <div className='layout' onClick={handleClickLayout}>
          <Header />
          <div
              className={
                  progress === 0 ? 'layout__buffer' : 'layout__buffer--blur'
              }
          ></div>
          <div
              className={
                  connectWalletState
                      ? 'layout__connectWallet'
                      : 'layout__connectWallet--hide'
              }
          >
              <div>
                  <ConnectWallet />
              </div>
          </div>
          <div
              className={
                  menuPopupState
                      ? 'layout__menuPopup'
                      : 'layout__menuPopup--hide'
              }
          >
              <div>
                  <MenuPopup />
                  <div className='layout__menuPopup--hide--toastContainer'>
                      {/* <ToastContainer
              position="bottom-center"
              className="toast-background"
              progressClassName="toast-progress-bar"
              autoClose={4000}
              closeOnClick
              draggable
              pauseOnHover
            /> */}
                  </div>
              </div>
          </div>
          <NetworkBanner />
          <div
              className={
                  connectWalletState || createPopupState || menuPopupState
                      ? 'layout__children--blur'
                      : 'layout__children'
              }
          >
              {children}
          </div>
          <Footer />
          <ToastContainer
              position='bottom-center'
              className='toast-background'
              progressClassName='toast-progress-bar'
              autoClose={4000}
              closeOnClick
              theme='dark'
              draggable
              pauseOnHover
          />
      </div>
  );
};

export default Layout;
