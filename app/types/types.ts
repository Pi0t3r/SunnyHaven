interface commonProps {
  title: string;
}
export interface SidebarProps {
  openSidebar: boolean;
}

export interface InfoProps extends commonProps {
  desc: string;
}

export interface ProductProps extends commonProps {
  price: number;
  src: string;
}

export interface ImageIconButtonProps extends commonProps {
  src: string;
  alt: string;
  link: string;
}

export interface ItemProps extends commonProps {
  price: number;
  src: string;
}

export type CreateUserProps = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};
export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};
