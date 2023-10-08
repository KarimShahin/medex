"use client";
import Slider from "react-slick";
import styles from "./index.module.scss";
import { SliderCarouselProps } from "./types";
import "./carousel.scss";

export default function SliderCarousel(props: SliderCarouselProps) {
  const { children, settings, title, dark } = props;
  return (
    <section className={`${styles.carousel} ${dark ? styles.dark : ""}`}>
      <h2 className={styles.carouselTitle}>{title}</h2>
      <Slider {...settings}>{children}</Slider>
    </section>
  );
}
