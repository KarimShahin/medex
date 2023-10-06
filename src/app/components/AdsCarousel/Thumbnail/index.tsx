import Image from "next/image";
import { ThumbnailProps } from "../types";
import styles from "./index.module.scss";

export default function Thumbnail(props: ThumbnailProps) {
  const { src } = props;
  return (
    <div className={styles.thumbnail}>
      <Image
        alt=""
        src={src}
        width={70}
        height={45}
        className={styles.thumbnailImage}
      />
    </div>
  );
}
