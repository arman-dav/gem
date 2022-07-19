import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  sortBy: number | null;
}

const initialState: CounterState = {
  sortBy: null,
};

export const listingSlice = createSlice({
  name: "listingData",
  initialState,
  reducers: {
    sortByAction: (state, action: any) => {
      state.sortBy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sortByAction } = listingSlice.actions;

export default listingSlice.reducer;
