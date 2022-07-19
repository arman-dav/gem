import { FC } from "react";

import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import { ReactComponent as ReloadIcon } from "../../assets/wallet/accoutLoader.svg";
import { ReactComponent as Imgicon } from "../../assets/wallet/emptyImg.svg";

import { WalletNameCardProps } from "./model";

const WalletNameCard: FC<WalletNameCardProps> = ({
  walletName,
  path,
  className,
  onClick,
  children,
}) => {
  const { pathname } = useLocation();

  const clickedStatus = localStorage.getItem("clickedStatus");

  return (
    <div className="connectWalletCard__container">
      <NavLink to={path ? path : pathname}>
        <div
          className={`${className}__container__wallets--walletDiv`}
          onClick={onClick}
        >
          <div
            className={`${className}__container__wallets--walletDiv--iconDiv`}
          >
            {!!children ? <div>{children}</div> : <Imgicon />}
          </div>
          <div className="connectWalletCard__container--walletContent_container">
            <p>{walletName}</p>
            {clickedStatus && !window.ethereum && walletName === "Metamask" ? (
              <div
                className={`${className}__container__wallets--walletDiv--reloadDiv`}
              >
                <span>Install Metamask extension and reload page.</span>
                <ReloadIcon
                  onClick={() => {
                    window.location.reload();
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default WalletNameCard;
