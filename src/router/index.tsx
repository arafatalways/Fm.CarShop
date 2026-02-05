import BmwCar from "@/components/AllCars/Bmw";
import { AboutDetailedSection } from "@/components/layouts/AboutDetails";
import Contact from "@/components/layouts/Contact";
import { ProDeta1 } from "@/components/layouts/ProDeta1";
import { FrontLayoutPage } from "@/components/modules/FrontLayoutPage";
import { AllProductsPage } from "@/pages/AllProductsPage";
import { HomePage } from "@/pages/HomePage";
import { ProductCategoryPage } from "@/pages/ProductCategoryPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayoutPage,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/all-products",
        Component: AllProductsPage,
      },
      {
        path: "/categories",
        Component: ProductCategoryPage,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/view-all/:id",
        Component: BmwCar,
      },
      {
        path: "/learn-more",
        Component: AboutDetailedSection,
      },
      {
        path: "/prodetaadd1/:id",
        Component: ProDeta1,
      },
    ],
  },
]);
