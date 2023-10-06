import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { Settings } from "react-slick";

export interface SliderCarouselProps {
  children: ReactNode[];
  settings: Settings;
  thumbs?: {
    id: number,
    image: StaticImageData
  }[]
  dark?: boolean;
  title?: string;
}

export interface ThumbnailProps {
  src: StaticImageData | string
}