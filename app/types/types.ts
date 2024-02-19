import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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
