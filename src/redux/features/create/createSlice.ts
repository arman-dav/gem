import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CreateSelectedBlockchainType,
  CreateSelectedLootType,
  ICreateState,
} from "./model";

const initialState: ICreateState = {
  loading: false,
  data: {
    progress: 0,
    createPopupState: false,
    connectWalletState: false,
    menuPopupState: false,
    selectedLoots: [],
    selectedBlockchain: null,
    createLootState: false,
    createBlockchainState: false,
    mobileMenuState: false,
  },
  isModal: false,
};

const makeSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    changeProgress: (state, { payload }: PayloadAction<number>) => {
      state.data.progress = payload;
    },
    createPopup: (state, { payload }: PayloadAction<boolean>) => {
      state.data.createPopupState = payload;
    },
    connectWallet: (state, { payload }: PayloadAction<boolean>) => {
      state.data.connectWalletState = payload;
    },
    menuPopup: (state, { payload }: PayloadAction<boolean>) => {
      state.data.menuPopupState = payload;
    },
    changeMobileMenuState: (state, { payload }: PayloadAction<boolean>) => {
      state.data.mobileMenuState = payload;
    },
    changeCreateLootState: (state, { payload }: PayloadAction<boolean>) => {
      state.data.createLootState = payload;
    },
    changeCreateBlockchainState: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.data.createBlockchainState = payload;
    },
    selectLoot: (state, { payload }: PayloadAction<CreateSelectedLootType>) => {
      const idArr = state.data.selectedLoots.map(({ id }) => id);
      if (!idArr.includes(payload.id)) {
        state.data.selectedLoots = [...state.data.selectedLoots, payload];
      } else {
        const index = idArr.indexOf(payload.id);
        state.data.selectedLoots.splice(index, 1);
      }
    },
    selectBlockchain: (
      state,
      { payload }: PayloadAction<CreateSelectedBlockchainType>
    ) => {
      if (state.data.selectedBlockchain?.id !== payload.id) {
        state.data.selectedBlockchain = payload;
      } else {
        state.data.selectedBlockchain = null;
      }
    },
    setModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isModal = payload;
    },
  },
});

export const {
  setLoading,
  changeProgress,
  connectWallet,
  menuPopup,
  changeMobileMenuState,
  changeCreateLootState,
  changeCreateBlockchainState,
  createPopup,
  selectLoot,
  selectBlockchain,
  setModal,
} = makeSlice.actions;

export default makeSlice.reducer;

export const createSelector = (state: ICreateState) => state;
