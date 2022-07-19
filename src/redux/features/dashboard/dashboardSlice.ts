import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDashBoardState } from "./model";
const initialState: IDashBoardState = {
  collection: [],
  gemToken: [],
  filterCategory: [],
  getCollectionGemToken: [],
  checkedCollection: [],
  listing: [],
};

const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    getCollections: (state, { payload }: PayloadAction<any>) => {
      state.collection = payload;
    },
    getGemToken: (state, { payload }: PayloadAction<any>) => {
      state.gemToken = payload;
    },
    getFilterCategory: (state, { payload }: PayloadAction<any>) => {
      state.filterCategory = [payload];
    },
    getCollectionGemToken: (state, { payload }: PayloadAction<any>) => {
      const DataArr: any = [];
      DataArr.push(...state.getCollectionGemToken, ...payload);
      state.getCollectionGemToken = payload;
    },
    getCheckedCollection: (state, { payload }: PayloadAction<any>) => {
      state.checkedCollection = payload;
    },
    getListing: (state, { payload }: PayloadAction<any>) => {
      state.listing = payload;
    },
  },
});

export const {
  getCollections,
  getGemToken,
  getFilterCategory,
  getCollectionGemToken,
  getCheckedCollection,
  getListing,
} = dashboard.actions;
export default dashboard.reducer;

export const dashboardSelector = (state: IDashBoardState) => state;
