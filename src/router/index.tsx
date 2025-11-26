import { BmwCar } from "@/components/AllCars/Bmw";
import { AboutDetailedSection } from "@/layouts/AboutDetails";
import { ProDeta1 } from "@/layouts/ProDeta1";
import { FrontLayoutPage } from "@/pages/FrontLayoutPage";
import { HomePage } from "@/pages/HomePage";
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
        path: "/view-all",
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
