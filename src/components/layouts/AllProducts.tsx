import { Link } from "react-router-dom";

export const AllProducts = () => {
  const allProduct = [
    {
      id: 1,
      img: "images/rr-1.jpg",
      name: "",
      price: 12,
    },
    {
      id: 2,
      img: "images/rr-2.jpg",
      name: "",
      price: 12,
    },
    {
      id: 3,
      img: "images/rr-3.jpg",
      name: "",
      price: 12,
    },
    {
      id: 4,
      img: "images/rr-4.jpg",
      name: "",
      price: 12,
    },
    {
      id: 5,
      img: "images/fr-1.jpg",
      name: "",
      price: 12,
    },

    {
      id: 6,
      img: "images/fr-2.jpg",
      name: "",
      price: 12,
    },
    {
      id: 7,
      img: "images/fr-3.jpg",
      name: "",
      price: 12,
    },
    {
      id: 8,
      img: "images/fr-4.jpg",
      name: "",
      price: 12,
    },
    {
      id: 9,
      img: "images/bm-1.jpg",
      name: "",
      price: 12,
    },
    {
      id: 10,
      img: "images/bm-2.jpg",
      name: "",
      price: 12,
    },
    {
      id: 11,
      img: "images/bm-3.jpg",
      name: "",
      price: 12,
    },
    {
      id: 12,
      img: "images/bm-4.jpg",
      name: "",
      price: 12,
    },
    {
      id: 13,
      img: "images/lm-1.jpg",
      name: "",
      price: 12,
    },

    {
      id: 14,
      img: "images/lm-2.jpg",
      name: "",
      price: 12,
    },
    {
      id: 15,
      img: "images/lm-3.jpg",
      name: "",
      price: 12,
    },
    {
      id: 16,
      img: "images/lm-4.jpg",
      name: "",
      price: 12,
    },
    {
      id: 17,
      img: "images/lx-1.jpg",
      name: "",
      price: 12,
    },
    {
      id: 18,
      img: "images/lx-2.jpg",
      name: "",
      price: 12,
    },

    {
      id: 19,
      img: "images/lx-3.jpg",
      name: "",
      price: 12,
    },
    {
      id: 20,
      img: "images/lx-4.jpg",
      name: "",
      price: 12,
    },
  ];

  return (
    <section className="w-full py-14 bg-gray-50 dark:bg-gray-900">
      <div className="my-container">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">
          Explore <span className="text-blue-600">All Car Models</span>
        </h2>

        {/* GRID */}
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4 sm:gap-6
        "
        >
          {allProduct.map((car) => (
            <div
              key={car.id}
              className="
                rounded-xl overflow-hidden bg-white dark:bg-gray-800 
                shadow-md hover:shadow-xl 
                transition-all duration-300 
                hover:-translate-y-2 cursor-pointer
              "
            >
              <Link to={`/prodetaadd1/${car.id}`}>
                <img
                  src={car.img}
                  alt="Car Photo"
                  className="w-full h-36 sm:h-40 md:h-48 object-cover"
                />
              </Link>

              <div className="p-3 text-center">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-white">
                  ${car.price}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Premium Car
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
