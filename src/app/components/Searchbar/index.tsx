"use client";
import assets from "@/app/assets";
import Image from "next/image";
import styles from "./index.module.scss";
import { SearchBarProps } from "./types";

export default function Searchbar(props: SearchBarProps) {
  const { setToogleMenu } = props;
  const toogleMenu = () => {
    setToogleMenu((prevState: boolean) => !prevState);
  };
  return (
    <label className={styles.searchLabel}>
      <button className={styles.megaMenuBtn} onClick={toogleMenu}>
        <svg
          className="svg-inline--fa fa-bars fa-w-14"
          aria-hidden="true"
          focusable="false"
          data-prefix="fa"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <input
        className={styles.searchInput}
        placeholder="Search by product name,category and type..."
      />
      <button className={styles.searchBtn}>
        <Image src={assets.icons.searchIcon} alt="search icon" />
      </button>
    </label>
  );
}
