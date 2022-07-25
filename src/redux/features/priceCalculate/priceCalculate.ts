import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCalculatePrice } from "../../../api/api";

import { AppThunk } from "./../../store";
import { calculatePriceState, PriceSlice } from "./model";

const initialState: PriceSlice = {
  price: {
    BTC: null,
    USD: null,
    EUR: null,
  },
  loading: false,
};
const CalculatePrice = createSlice({
  name: "CalculatePrice",
  initialState,
  reducers: {
    // setLoading: (state, { payload }: PayloadAction<boolean>) => {
    //   state.loading = payload;
    // },
    getPrice: (state, { payload }: PayloadAction<calculatePriceState>) => {
      state.price = payload;
    },
  },
});
export const getPriceData = ()=> async (dispatch:any) => {
  try {
    const res = await getCalculatePrice();
    dispatch(getPrice(res));
  } catch (e) {
    console.log(e);
  }
};

export const {
  getPrice,
  //  setLoading
} = CalculatePrice.actions;
export default CalculatePrice.reducer;
export const CalculatePriceSelector = (state: PriceSlice) => state;
