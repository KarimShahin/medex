import { StaticImageData } from "next/image";

export interface MegaMenuProps {
  toogleMenu: boolean;
  setToogleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export interface LinksType {
  text: string,
  link: string
}

export interface CategoryType {
  title: string,
  link: string,
  links: LinksType[]
}

export interface ImagesType {
  image: StaticImageData | string,
  link: string,
}

export interface MegaMenuLinksType {
  title: string,
  url: string,
  categories: CategoryType[],
  images: ImagesType[]
}