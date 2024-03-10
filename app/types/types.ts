import {StaticImageData} from 'next/image';

export interface commonProps {
  title: string;
}

export interface iSidebar {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
export interface iBurgerMenu {
  open: boolean;
  handleClick: () => void;
}
export interface iSectionBackground {
  children: React.ReactNode;
}

export interface iCard {
  src: string;
  name: string;
  price: number;
  isNew: boolean;
  isSold: boolean;
  isDiscount: boolean;
  discountPrice?: number;
}
export interface iCarouselImage {
  items: {
    src: StaticImageData;
    title: string;
    desc: string;
    bolderDesc?: string;
  }[];
}

export interface iCarouselText {
  items: {
    text: string;
    author: string;
  }[];
}

export interface iButton extends commonProps {
  href: string;
}

export interface iFetchDataCat {
  whichData: 'AccesCat' | 'foodCat' | 'toysCat';
}
export interface iFetchDataDog {
  whichData: 'AccesDog' | 'foodDog' | 'toysDog';
}
export interface iPost extends commonProps {
  src: string;
  desc: string;
  title: string;
  day: number;
  month: string;
}

export interface ErrorState {
  message: string;
}
