import { Footer } from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { Outlet } from "react-router";

export const FrontLayoutPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
