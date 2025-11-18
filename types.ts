export interface Game {
  id: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
  tags: string[];
  isNew?: boolean;
  salePrice?: number;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  count: number;
}

export interface NavItem {
  label: string;
  href: string;
}