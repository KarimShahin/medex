import { UUID } from "crypto";
import { StaticImageData } from "next/image";

export interface ProductCardProps {
  row?: boolean,
  product: {
    id: UUID,
    image: StaticImageData | string,
    title: string,
    description: string,
    price: number,
    tag: "normal" | "best selling" | "most viewed"
  }
}