import { ethers } from "ethers";
import * as ChainInfo from 'evm-chains';

export const metaMaskDeepLink = `https://metamask.app.link/dapp/${process.env.REACT_APP_CLIENT_DAPP_URL}`;

export const getAddressAbbreviation = (address: string) => address ? `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}` : '';
export const getAddressChecksum = (address: string) => ethers.utils.getAddress(address);

export const getChainInfoById = (chainId: string) => {
    const chaindIdNumber = parseInt(chainId);
    let chainInfo = null;
    try {
        chainInfo = ChainInfo.getChainByChainId(chaindIdNumber);
    } catch(e) {
        console.log('Unknown network with chainId: ' + chainId);
    }
    return chainInfo;
}

export const getDisplayAddresses = (address: string, chainId?: string | null) => {
    if (!address) return ['', ''];
    let addressChecksum = getAddressChecksum(address);
    let addressAbbreviation = getAddressAbbreviation(addressChecksum);
    if (chainId) {
        const chainInfo = getChainInfoById(chainId);
        const chainName = (chainInfo && chainInfo.shortName) || '???'
        addressAbbreviation = `${chainName}:${addressAbbreviation}`;
    }
    return [addressChecksum, addressAbbreviation];
};

export const SupportedChains = {
    ids: process.env.REACT_APP_CHAIN_IDS?.split(',') || ['0x2a'],
    isSupportedById: (chainId: string | null) => false,
    getMainChainId: () => null as unknown as string,
    getMainChainName: () => null as unknown as string,
};

SupportedChains.isSupportedById = (chainId: string | null) => {return SupportedChains.ids.indexOf(chainId || '') >= 0 }

SupportedChains.getMainChainId = () => SupportedChains.ids[0];

SupportedChains.getMainChainName = () => getChainInfoById(SupportedChains.getMainChainId())?.name || 'Unknown';

const WalletUtils = {
    metaMaskDeepLink,
    getAddressAbbreviation,
    getAddressChecksum,
    getDisplayAddresses,
    getChainInfoById,
    SupportedChains,
}

export default WalletUtils;