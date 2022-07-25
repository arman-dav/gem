import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";


import blogSlice from "./features/blog/blogSlice";
import createReducer from "./features/create/createSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";
import faqSlice from "./features/faq/faqSlice";
import fractionSlice from "./features/fraction/fractionSlice";
import homeReducer from "./features/home/homeSlice";
import listingSliceReducer from "./features/marketplace/listingSlice";
import marketplaceReducer from "./features/marketplace/marketplaceSlice";
import CalculatePrice from "./features/priceCalculate/priceCalculate";
import walletReducer from "./features/wallet/walletSlice";



export const store = configureStore({
  reducer: {
    homeData: homeReducer,
    createData: createReducer,
    walletData: walletReducer,
    marketplaceData: marketplaceReducer,
    faq: faqSlice,
    dashboard: dashboardSlice,
    blog: blogSlice,
    CalculatePrice: CalculatePrice,
    listingData: listingSliceReducer,
    fractionData: fractionSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
