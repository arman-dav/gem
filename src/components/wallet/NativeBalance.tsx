import { useNativeBalance, useMoralis } from "react-moralis";

const NativeBalance = () => {
  const { data: balance } = useNativeBalance();
  const { account, isAuthenticated, isWeb3Enabled } = useMoralis();

  if (!account || (!isAuthenticated && !isWeb3Enabled)) return null;

  return <div className="nativeBalance">{balance.formatted}</div>;
};

export default NativeBalance;
