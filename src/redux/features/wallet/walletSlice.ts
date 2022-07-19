import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IWalletState } from "./model";

const initialState: IWalletState = {
  loading: false,
  account: localStorage.getItem("account") as string,
  balance: "",
  accountData: "",
  isOnValidChain: true,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setAccount: (state, { payload }: PayloadAction<string>) => {
      state.account = payload;
    },
    setBalance: (state, { payload }: PayloadAction<string>) => {
      state.balance = payload;
    },
    setAccountData: (state, { payload }: PayloadAction<any>) => {
      state.accountData = payload;
    },
    setIsOnValidChain: (state, { payload }: PayloadAction<boolean>) => {
      state.isOnValidChain = payload;
    },
  },
});

export const { setLoading, setAccount, setBalance, setAccountData, setIsOnValidChain } =
  walletSlice.actions;

export default walletSlice.reducer;

export const walletSelector = (state: IWalletState) => state;
