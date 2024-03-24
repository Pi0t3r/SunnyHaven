import {StaticImageData} from 'next/image';
import {ObjectId} from 'mongodb';
import {SetStateAction} from 'react';

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
  _id: ObjectId;
  name: string;
  src: string;
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
  day: number;
  month: string;
}

export interface ErrorState {
  message: string;
}
export interface iModalComponent {
  open: boolean;
  onClose: () => void;
}