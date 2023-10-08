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
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { slides, ads, products, getProducts } from "./Database";

export default function Home() {
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

  const bestSellingSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "slider product-slider",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const mostViewedSettings = {
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "product-row-slider slider",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const justArrivedSettings = {
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "product-row-slider slider",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bestSellingProducts = getProducts("best selling", 9);
  const mostViewedProducts = getProducts("most viewed", 15);
  const justArrivedProducts = getProducts("normal", 15);

  return (
    <main className={styles.main}>
      <section className={styles.adsSection}>
        <AdsCarousel thumbs={ads} settings={adsSettings}>
          {ads.map((ad) => {
            return (
              <Link href={""} key={ad.id}>
                <Image loading="lazy" src={ad.image} alt="" />;
              </Link>
            );
          })}
        </AdsCarousel>
      </section>
      <section>
        <SliderCarousel settings={bestSellingSettings} title="Best Selling">
          {bestSellingProducts.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </SliderCarousel>
      </section>
      <section className={styles.brandsSection}>
        <SliderCarousel dark={true} title={"Brands"} settings={brandSettings}>
          {slides.map((slide) => {
            return <Brand key={slide.id} {...slide} />;
          })}
        </SliderCarousel>
      </section>
      <section className={styles.mostViewedSection}>
        <SliderCarousel
          settings={mostViewedSettings}
          title="The most viewed products."
        >
          {mostViewedProducts.map((product, index) => {
            return <ProductCard row={true} product={product} key={index} />;
          })}
        </SliderCarousel>
      </section>
      <section className={styles.justArrivedSection}>
        <SliderCarousel
          settings={justArrivedSettings}
          title="Products that just arrived."
        >
          {justArrivedProducts.map((product, index) => {
            return <ProductCard row={true} product={product} key={index} />;
          })}
        </SliderCarousel>
      </section>
    </main>
  );
}
