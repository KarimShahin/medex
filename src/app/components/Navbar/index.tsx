"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import assets from "@/app/assets";
import Searchbar from "../Searchbar";
import { useAppSelector } from "@/app/redux/hooks";
import { wishlistItemsCount } from "@/app/redux/slices/wishlist";
import { useState } from "react";
import MegaMenu from "../MegaMenu";

export default function Navbar() {
  const items = useAppSelector(wishlistItemsCount);
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Image src={assets.icons.medexLogo} alt="medex logo" loading="lazy" />
          <Searchbar setToogleMenu={setToogleMenu} />
          <div className={styles.wishlistItems}>
            <span className={styles.itemsCount}>{items}</span>
            <Image src={assets.icons.heartIcon} alt="favourits" />
            <p>Favourits</p>
          </div>
        </nav>
      </header>
      <MegaMenu toogleMenu={toogleMenu} setToogleMenu={setToogleMenu} />
    </>
  );
}
