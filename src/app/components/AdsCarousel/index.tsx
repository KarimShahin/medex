"use client";
import Slider from "react-slick";
import styles from "./index.module.scss";
import { SliderCarouselProps } from "./types";
import "./carousel.scss";
import Thumbnail from "./Thumbnail";

export default function AdsCarousel(props: SliderCarouselProps) {
  const { children, settings, thumbs } = props;

  const customPaging = (index: number) => {
    return (
      <a>
        <Thumbnail src={thumbs ? thumbs[index].image : ""} />
      </a>
    );
  };
  return (
    <section className={`${styles.carousel}`}>
      <Slider {...settings} customPaging={customPaging}>
        {children}
      </Slider>
    </section>
  );
}
