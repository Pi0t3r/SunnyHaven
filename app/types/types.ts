import {StaticImport} from 'next/dist/shared/lib/get-img-props';

export interface commonProps {
  title: string;
}

export interface iSidebar {
  isOpen: boolean;
}
export interface iBurgerMenu {
  open: boolean;
  handleClick: () => void;
}
export interface iSectionBackground {
  image: StaticImport;
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
