import type { ReactNode } from "react";

export interface IinfoItems {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface IProductData {
  id: number;
  img: string;
  title: string;
  price: number;
}
