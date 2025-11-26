import { AboutSection } from "@/layouts/AboutSection";
import { AllProducts } from "@/layouts/AllProducts";
import { CarouselDemo } from "@/layouts/Carousel";
import { ProductCategory } from "@/layouts/ProductCategory";
import { ProductInform } from "@/layouts/ProductInform";

export const HomePage = () => {
  return (
    <div>
      <CarouselDemo />
      <AboutSection />
      <ProductInform />
      <ProductCategory />
      <AllProducts />
    </div>
  );
};
