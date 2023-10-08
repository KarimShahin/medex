import Image from "next/image";
import styles from "./index.module.scss";
import AddToWishlist from "./AddToWishlist";
import { ProductCardProps } from "./types";

export default function ProductCard(props: ProductCardProps) {
  const { product, row } = props;

  return (
    <div className={`${styles.card} ${row ? styles.rowCard : ""}`}>
      <Image className={styles.cardImage} src={product.image} alt="" />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{product.title}</h2>
        <p className={styles.cardDesc}>{product.description}</p>
        <p className={styles.cardPrice}>${product.price}</p>
        <p className={styles.cardTag}>{product.tag}</p>
      </div>
      <AddToWishlist id={product.id} />
    </div>
  );
}
