import Image from "next/image";
import styles from "./index.module.scss";
import assets from "@/app/assets";
import Searchbar from "../Searchbar";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Image src={assets.icons.medexLogo} alt="medex logo" loading="lazy" />
        <Searchbar />
      </nav>
    </header>
  );
}
