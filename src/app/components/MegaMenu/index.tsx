"use client";
import React, { MouseEvent, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import {
  CategoryType,
  ImagesType,
  LinksType,
  MegaMenuLinksType,
  MegaMenuProps,
} from "./types";
import assets from "@/app/assets";
import Image from "next/image";

const megaMenuLinks = [
  {
    title: "Restorative",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
  {
    title: "Endodontic",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
  {
    title: "Prosthetic",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
  {
    title: "Bleaching",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
  {
    title: "Orthodontics",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
  {
    title: "Equipments",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
  {
    title: "Medical",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
  {
    title: "Dental Consumables",
    url: "#",
    categories: [
      {
        title: "composite",
        link: "#",
        links: [
          {
            text: "Flowable Komposite",
            link: "#",
          },
          {
            text: "Universal Composite",
            link: "#",
          },
          {
            text: "Posterior Composites",
            link: "#",
          },
          {
            text: "Composite Lacquer",
            link: "#",
          },
          {
            text: "Composite Kits",
            link: "#",
          },
          {
            text: "Anterior Composites",
            link: "#",
          },
          {
            text: "Aesthetic Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Composite Instruments",
        link: "#",
        links: [
          {
            text: "Composite Gun",
            link: "#",
          },
          {
            text: "Other Composites",
            link: "#",
          },
        ],
      },
      {
        title: "Other Products",
        link: "#",
        links: [
          {
            text: "Matrix Materials & Wedges",
            link: "#",
          },
          {
            text: "Pin, Fiber, Pivo & Posts",
            link: "#",
          },
          {
            text: "Core & Base Materials",
            link: "#",
          },
          {
            text: "Dentin Pins",
            link: "#",
          },
          {
            text: "Beam Filler & Polymerization",
            link: "#",
          },
          {
            text: "Devices",
            link: "#",
          },
        ],
      },
      {
        title: "Bonds And Acids",
        link: "#",
        links: [
          {
            text: "Bonding Brush & Applicators",
            link: "#",
          },
          {
            text: "Bonding",
            link: "#",
          },
          {
            text: "Phosphoric Acid & Blue Acids",
            link: "#",
          },
          {
            text: "Porcelain Acid & Silane",
            link: "#",
          },
        ],
      },
      {
        title: "Amalgam",
        link: "#",
        links: [
          {
            text: "Amalgamators",
            link: "#",
          },
          {
            text: "Amalgam Instruments",
            link: "#",
          },
          {
            text: "Amalgams",
            link: "#",
          },
        ],
      },
      {
        title: "Equipments",
        link: "#",
        links: [
          {
            text: "Dental Led Lamp",
            link: "#",
          },
        ],
      },
    ],
    images: [
      {
        image: assets.images.menuImageOne,
        link: "#",
      },
      {
        image: assets.images.menuImageTwo,
        link: "#",
      },
      {
        image: assets.images.menuImageThree,
        link: "#",
      },
      {
        image: assets.images.menuImageFour,
        link: "#",
      },
    ],
  },
];

export default function MegaMenu(props: MegaMenuProps) {
  const { toogleMenu, setToogleMenu } = props;
  const [activeLink, setActiveLink] = useState<MegaMenuLinksType | null>(null);
  const [showMega, setShowMega] = useState<boolean>(false);

  const closeMenu = () => {
    setToogleMenu(false);
  };

  const handleLinkEnter = (link: MegaMenuLinksType) => {
    setActiveLink(link);
    setTimeout(() => {
      setShowMega(true);
    }, 500);
  };

  const handleLinkLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.relatedTarget?.id !== "mega") {
      setShowMega(false);
      setActiveLink(null);
    }
  };

  const handleMegaLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (event.relatedTarget?.textContent !== activeLink?.title) {
      setShowMega(false);
      setActiveLink(null);
    }
  };

  return (
    <div
      className={`${styles.megaMenuWrapper} ${toogleMenu ? styles.slide : ""}`}
    >
      <div className={styles.megaMenu}>
        <header className={styles.megaMenuHeader}>
          <p className={styles.megaMenuHeaderTitle}>Categories</p>
          <button className={styles.closeMenuBtn} onClick={closeMenu}>
            ×
          </button>
        </header>
        <Link href={"#"} className={`${styles.special} ${styles.item}`}>
          Special Offers
        </Link>
        {megaMenuLinks.map((link) => (
          <Link
            key={link.title}
            onMouseEnter={() => handleLinkEnter(link)}
            onMouseLeave={handleLinkLeave}
            href={link.url}
            className={styles.item}
          >
            <span>{link.title}</span>
            <span className={styles.arrow}>
              <svg
                className="svg-inline--fa fa-angle-right fa-w-8 arrow-angle"
                aria-hidden="true"
                focusable="false"
                data-prefix="fa"
                data-icon="angle-right"
                width="7"
                height="14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                ></path>
              </svg>
            </span>
          </Link>
        ))}
        <Link
          href={"#"}
          className={`${styles.special} ${styles.special_gold} ${styles.item}`}
        >
          student club
        </Link>
        {activeLink && showMega && (
          <div
            id="mega"
            className={styles.megaMenuMenu}
            onMouseLeave={handleMegaLeave}
          >
            <div className={styles.menuContent}>
              {activeLink.categories.map(
                (category: CategoryType, index: number) => (
                  <div key={index} className={styles.menuContentContainer}>
                    <Link
                      href={category.link}
                      className={styles.menuContentTitle}
                    >
                      {category.title}
                    </Link>
                    <div className={styles.menuContentLinks}>
                      {category.links.map((link: LinksType, index: number) => (
                        <Link key={index} href={link.link}>
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className={styles.menuImages}>
              {activeLink?.images.map((image: ImagesType, index: number) => (
                <Link
                  className={styles.menuImageLink}
                  href={image.link}
                  key={index}
                >
                  <Image
                    src={image.image}
                    className={styles.menuImage}
                    alt=""
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
