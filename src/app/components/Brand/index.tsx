import Image from "next/image";
import styles from "./index.module.scss";

export default function Brand(props: any) {
  const { title, image } = props;
  return (
    <div className={styles.brand}>
      <Image src={image} className={styles.brandImage} loading="lazy" alt="" />
      <p>{title}</p>
    </div>
  );
}
