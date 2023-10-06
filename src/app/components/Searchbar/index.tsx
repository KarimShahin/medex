import assets from "@/app/assets";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Searchbar() {
  return (
    <label className={styles.searchLabel}>
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
