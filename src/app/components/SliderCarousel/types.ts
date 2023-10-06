import { ReactNode } from "react";
import { Settings } from "react-slick";

export interface SliderCarouselProps {
  children: ReactNode[];
  settings: Settings;
  dark?: boolean;
  title?: string;
}