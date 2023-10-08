import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type WishlistState = {
  items: string[];
};

const initialState : WishlistState = {
  items: [],
}

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action:PayloadAction<string>)=>{
      state.items.push(action.payload)
    },
    removeFromWishlist: (state, action:PayloadAction<string>) => {
      state.items = state.items.filter(id => id !== action.payload)
    } 
  },
});

export const {
  addToWishList,
  removeFromWishlist
} = wishlistSlice.actions;

export const existInWishlist = (state:RootState, id:string) => {
  return state.wishlist.items.includes(id)
}

export const wishlistItemsCount = (state: RootState) => {
  return state.wishlist.items.length;
}

export default wishlistSlice.reducer;