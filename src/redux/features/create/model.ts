export interface ICreateState {
  loading: boolean;
  data: CreateStateDataType;
  isModal: boolean;
}

export type CreateStateDataType = {
  progress: number;
  connectWalletState: boolean;
  menuPopupState: boolean;
  createPopupState: boolean;
  selectedLoots: CreateSelectedLootType[];
  selectedBlockchain: CreateSelectedBlockchainType | null;
  createLootState: boolean;
  createBlockchainState: boolean;
  mobileMenuState: boolean;
};

export type CreateSelectedLootType = {
  imgSrc: string;
  name: string;
  id: string;
};

export type CreateSelectedBlockchainType = {
  imgSrc: string;
  name: string;
  id: string;
};
