import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IHomeState } from "./model";

const initialState: IHomeState = {
  loading: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
     
    },
  },
});

export const { setLoading } = homeSlice.actions;

export default homeSlice.reducer;

export const homeSelector = (state: IHomeState) => state;
