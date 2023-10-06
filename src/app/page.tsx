import styles from "./page.module.scss";
import assets from "./assets";
import SliderCarousel from "./components/SliderCarousel";
import Image from "next/image";
import NextArrow from "./components/SliderCarousel/NextArrow";
import PrevArrow from "./components/SliderCarousel/PrevArrow";
import Brand from "./components/Brand";
import AdsCarousel from "./components/AdsCarousel";
import AdsNextArrow from "./components/AdsCarousel/AdsNextArrow";
import AdsPrevArrow from "./components/AdsCarousel/AdsPrevArrow";
import Thumbnail from "./components/AdsCarousel/Thumbnail";
import Link from "next/link";

export default function Home() {
  const slides = [
    { id: 1, image: assets.images.brandOne, title: "Karim" },
    { id: 2, image: assets.images.brandOne, title: "Karim" },
    { id: 3, image: assets.images.brandOne, title: "Karim" },
    { id: 4, image: assets.images.brandOne, title: "Karim" },
    { id: 5, image: assets.images.brandOne, title: "Karim" },
    { id: 6, image: assets.images.brandOne, title: "Karim" },
    { id: 7, image: assets.images.brandOne, title: "Karim" },
    { id: 8, image: assets.images.brandOne, title: "Karim" },
    { id: 9, image: assets.images.brandOne, title: "Karim" },
    { id: 10, image: assets.images.brandOne, title: "Karim" },
    { id: 11, image: assets.images.brandOne, title: "Karim" },
    { id: 12, image: assets.images.brandOne, title: "Karim" },
    { id: 13, image: assets.images.brandOne, title: "Karim" },
    { id: 14, image: assets.images.brandOne, title: "Karim" },
    { id: 15, image: assets.images.brandOne, title: "Karim" },
  ];

  const ads = [
    { id: 1, image: assets.images.ad_1 },
    { id: 2, image: assets.images.ad_2 },
    { id: 3, image: assets.images.ad_3 },
    { id: 4, image: assets.images.ad_4 },
  ];

  const adsSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 500,
    className: "ad-slider",
    nextArrow: <AdsNextArrow />,
    prevArrow: <AdsPrevArrow />,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const brandSettings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "slick-dark slider",
  };
  return (
    <main className={styles.main}>
      <AdsCarousel thumbs={ads} settings={adsSettings}>
        {ads.map((ad) => {
          return (
            <Link href={""} key={ad.id}>
              <Image loading="lazy" src={ad.image} alt="" />;
            </Link>
          );
        })}
      </AdsCarousel>
      <SliderCarousel dark={true} title={"Brands"} settings={brandSettings}>
        {slides.map((slide) => {
          return <Brand key={slide.id} {...slide} />;
        })}
      </SliderCarousel>
    </main>
  );
}
