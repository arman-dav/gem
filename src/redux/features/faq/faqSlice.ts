import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getHerokuApp } from "../../../api/api";

import { AppThunk } from "./../../store";
const initialState: any = {
  loading: false,
  faqData: [],
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setFaqData: (state, { payload }: PayloadAction<any>) => {
      state.faqData = payload;
    },
  },
});
export const handleFaqData = () => async (dispatch:any) => {
  dispatch(setLoading(true));
  try {
    const res = await getHerokuApp();
    dispatch(setFaqData(res.data));
  } catch (error) {
    alert(error);
  }
};

export const { setLoading, setFaqData } = faqSlice.actions;

export default faqSlice.reducer;

export const walletSelector = (state: any) => state;
