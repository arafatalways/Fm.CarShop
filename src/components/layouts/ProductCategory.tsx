import { ProductData } from "@/assets/ProductData";
import type { IProductData } from "@/Interfaces/Interface";
import { Link } from "react-router";
import { motion } from "framer-motion";

export const ProductCategory = () => {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-800 py-14">
      <div className="my-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Products Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Explore products by categories
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProductData.map((item: IProductData, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-5 left-5">
                <Link
                  to={`/view-all/${item.id}`}
                  className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-white shadow hover:bg-blue-600 hover:text-white transition"
                >
                  {item.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
