export const ETHERSCAN_BASE = "https://etherscan.io";
export const ETHERSCAN_ADDRESS = "address";
export const ETHERSCAN_TOKEN = "token";

export const getEtherScanAddressUrl = (address: string) => `${ETHERSCAN_BASE}/${ETHERSCAN_ADDRESS}/${address}`;
export const getEtherScanTokenUrl = (address: string, token: string) => `${ETHERSCAN_BASE}/${ETHERSCAN_TOKEN}/${address}?a=${token}`;
export const getEtherScanTxUrl = (txHash: string) => `${ETHERSCAN_BASE}/tx/${txHash}`;

const EtherScanUtils = {
    BASE_URL: ETHERSCAN_BASE,   
    ADDRESS_SLUG: ETHERSCAN_ADDRESS,
    TOKEN_SLUG: ETHERSCAN_TOKEN,
    getAddressUrl: getEtherScanAddressUrl,
    getTokenUrl: getEtherScanTokenUrl,
    getTxUrl: getEtherScanTxUrl
};

export default EtherScanUtils;