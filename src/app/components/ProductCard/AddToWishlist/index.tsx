"use client";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import HeartIcon from "../HeartIcon";
import styles from "./index.module.scss";
import { AddToWishlistProps } from "./types";
import {
  addToWishList,
  existInWishlist,
  removeFromWishlist,
} from "@/app/redux/slices/wishlist";

export default function AddToWishlist(props: AddToWishlistProps) {
  const { id } = props;
  const dispatch = useAppDispatch();
  const isInWishlist = useAppSelector((state) => existInWishlist(state, id));
  const handleWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishList(id));
    } else {
      dispatch(removeFromWishlist(id));
    }
  };
  return (
    <div className={styles.wishlist} onClick={handleWishlist}>
      <HeartIcon isInWishlist={isInWishlist} />
    </div>
  );
}
