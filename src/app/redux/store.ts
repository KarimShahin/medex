import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlist"
export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice
  },
});
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;