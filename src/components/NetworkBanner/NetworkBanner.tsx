import { useEffect } from 'react';

import { ExclamationDiamond as ExclamationDiamondIcon} from 'react-bootstrap-icons';
import { useChain, useMoralis } from "react-moralis";
import { useDispatch } from 'react-redux';

import "../../redux/features/wallet/walletSlice";
import { setIsOnValidChain } from '../../redux/features/wallet/walletSlice';
import { useAppSelector } from "../../redux/hook";
import { SupportedChains } from '../../utils/WalletUtils';

type NetworkBannerProps = {
  message?: string | ((networkName: string) => string);
}

const NetworkBanner = ({message}: NetworkBannerProps) => {
  const { Moralis, isAuthenticated } = useMoralis();
  const { switchNetwork } = useChain();
  const supportedChainId = SupportedChains.getMainChainId();
  const supportedNetworkName = SupportedChains.getMainChainName();

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = Moralis.Web3.onChainChanged((chain) => {
      dispatch(setIsOnValidChain(chain === supportedChainId));
    });
    return unsubscribe;
  }, []);


  const { isOnValidChain } = useAppSelector(({ walletData }) => ({
    isOnValidChain: walletData.isOnValidChain,
  }));

// triggering to switch network to Rinkeby
  const triggerNetworkChange = async () => {
    await Moralis.Web3.enableWeb3();
    switchNetwork(supportedChainId);
  };

  // should not show banner if not logged in or chainId is already Rinkeby
  if (isAuthenticated && !isOnValidChain) {
    let textContent = (
        <p>
            Your wallet is connected to an unsupported network. To use Genesis
            Gems, please{' '}
            <span
                className='switch-network-link'
                onClick={triggerNetworkChange}
            >
                switch to {supportedNetworkName}
            </span>
            .
        </p>
    );

    if (message) {
      const messageText =
          typeof message === 'function'
              ? message(supportedNetworkName)
              : message;
      textContent = (
          <>
              <p>{messageText}</p>
              <button
                  className='switch-network-button'
                  onClick={triggerNetworkChange}
              >
                  Switch to {supportedNetworkName}
              </button>
          </>
      );
    }

    const networkBannerClasses = ['network-banner'];
    if (message) networkBannerClasses.push('network-banner--custom');

    return (
      <div className={networkBannerClasses.join(' ')}>
        <ExclamationDiamondIcon className='warning-icon' />
        <div className="text-content">
          {textContent}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NetworkBanner;
