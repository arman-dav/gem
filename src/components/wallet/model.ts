export type WalletNameCardProps = {
  walletName: string;
  path?: string;
  className: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
