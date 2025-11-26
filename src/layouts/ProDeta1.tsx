import { useParams } from "react-router-dom";
import { useState } from "react";

export const ProDeta1 = () => {
  const { id } = useParams(); // URL থেকে id নিলাম
  const productId = Number(id); // id number এ convert করলাম

  const allProduct = [
    { id: 1, img: "/images/rr-1.jpg", price: 12 },
    { id: 2, img: "/images/rr-2.jpg", price: 12 },
    { id: 3, img: "/images/rr-3.jpg", price: 12 },
    { id: 4, img: "/images/rr-4.jpg", price: 12 },
    { id: 5, img: "/images/fr-1.jpg", price: 12 },
    { id: 6, img: "/images/fr-2.jpg", price: 12 },
    { id: 7, img: "/images/fr-3.jpg", price: 12 },
    { id: 8, img: "/images/fr-4.jpg", price: 12 },
    { id: 9, img: "/images/bm-1.jpg", price: 12 },
    { id: 10, img: "/images/bm-2.jpg", price: 12 },
    { id: 11, img: "/images/bm-3.jpg", price: 12 },
    { id: 12, img: "/images/bm-4.jpg", price: 12 },
    { id: 13, img: "/images/lm-1.jpg", price: 12 },
    { id: 14, img: "/images/lm-2.jpg", price: 12 },
    { id: 15, img: "/images/lm-3.jpg", price: 12 },
    { id: 16, img: "/images/lm-4.jpg", price: 12 },
    { id: 17, img: "/images/lx-1.jpg", price: 12 },
    { id: 18, img: "/images/lx-2.jpg", price: 12 },
    { id: 19, img: "/images/lx-3.jpg", price: 12 },
    { id: 20, img: "/images/lx-4.jpg", price: 12 },
  ];

  const product = allProduct.find((p) => p.id === productId);

  const [qty, setQty] = useState(1);

  // ❗ Product না পাওয়া গেলে
  if (!product) {
    return (
      <h1 className="text-center text-3xl font-bold py-20 text-red-600">
        Product Not Found ❌
      </h1>
    );
  }

  return (
    <section className="w-full py-14 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <img
          src={product.img}
          className="w-full h-80 object-cover rounded-xl shadow-lg"
          alt="Product"
        />

        {/* DETAILS */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Car Model #{product.id}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-5">
            This premium car offers top-notch performance, sleek design, and
            advanced features for an unmatched driving experience.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mb-6">
            Price: ${product.price}
          </h3>

          {/* QUANTITY CONTROL */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-xl"
            >
              -
            </button>

            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {qty}
            </span>

            <button
              onClick={() => setQty(qty + 1)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-xl"
            >
              +
            </button>
          </div>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};
