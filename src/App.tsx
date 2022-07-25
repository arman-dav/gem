import { useEffect } from "react";

import { useMoralis } from "react-moralis";
import { shallowEqual } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Layout from "./components/Layout";
import Routs from "./components/Routs/Routs";
import { useAppSelector } from "./redux/hook";

export type MoralisNFTData = any;

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated } = useMoralis();
  const {
    progress,
    connectWalletState,
    createPopupState,
    menuPopupState,
    isModal,
    isModalProfile,
  } = useAppSelector(
    ({ createData, marketplaceData }) => ({
      progress: createData.data.progress,
      connectWalletState: createData.data.connectWalletState,
      menuPopupState: createData.data.menuPopupState,
      createPopupState: createData.data.createPopupState,
      isModal: marketplaceData.isModal,
      isModalProfile: createData.isModal,
    }),
    shallowEqual
  );

  useEffect(() => {
    progress !== 0 ||
    connectWalletState ||
    createPopupState ||
    menuPopupState ||
    isModal ||
    isModalProfile
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [
    progress,
    connectWalletState,
    createPopupState,
    menuPopupState,
    isModal,
    isModalProfile,
  ]);
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!isAuthenticated && pathname === "/profile") {
      navigate("/");
    }
  }, [isAuthenticated, pathname]);

  return (
    <div className="App">
      <Layout >
        <Routs />
      </Layout>
    </div>
  );
}

export default App;
