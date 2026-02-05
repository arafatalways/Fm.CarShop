import { AboutSection } from "@/components/layouts/AboutSection";
import { AllProducts } from "@/components/layouts/AllProducts";
import { CarouselDemo } from "@/components/layouts/Carousel";
import { ProductCategory } from "@/components/layouts/ProductCategory";
import { ProductInform } from "@/components/layouts/ProductInform";

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
