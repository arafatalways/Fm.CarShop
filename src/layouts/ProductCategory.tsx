import { ProductData } from "@/assets/ProductData";
import type { IProductData } from "@/Interfaces/Interface";
import { Link } from "react-router";

export const ProductCategory = () => {
  return (
    <div className="w-full bg-gray-100 py-10 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-center pb-8 text-3xl md:text-4xl font-bold">
          Products Category
        </h2>

        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
        >
          {ProductData.map((item: IProductData) => (
            <div
              key={item.id}
              className="
                relative 
                group 
                overflow-hidden 
                rounded-2xl 
                shadow-lg 
                bg-white
              "
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full 
                  h-64 
                  object-cover 
                  duration-500 
                  group-hover:scale-110
                "
              />

              {/* Overlay Title */}
              <div
                className="
                  absolute 
                  top-3
                  left-3
                  bg-blue-600
                  bg-opacity-50 
                  dark:text-white 
                  py-1
                  px-2
                  rounded-sm
                  text-center 
                  shadow-lg
                  text-xl 
                  font-semibold 
                  opacity-0 
                  group-hover:opacity-100 
                  duration-300
                "
              >
                <Link to="/view-all">{item.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
