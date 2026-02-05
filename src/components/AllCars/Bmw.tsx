import { Button } from "@/components/ui/button";
import { useParams } from "react-router";

export default function BmwCar() {
  const params = useParams();
  const carId = Number(params.id);

  const bmwItem = [
    {
      id: 1,
      name: "BMW Item-1",
      img: "/images/bm-4.jpg",
      title:
        "BMW is a luxury German car brand known for powerful performance and premium design.",
      price: "$12",
    },
    {
      id: 2,
      name: "BMW Item-2",
      img: "/images/bm-1.jpg",
      title:
        "BMW is a luxury German car brand known for powerful performance and premium design.",
      price: "$12",
    },
    {
      id: 3,
      name: "BMW Item-3",
      img: "/images/bm-2.jpg",
      title:
        "BMW is a luxury German car brand known for powerful performance and premium design.",
      price: "$12",
    },
    {
      id: 4,
      name: "BMW Item-4",
      img: "/images/bm-3.jpg",
      title:
        "BMW is a luxury German car brand known for powerful performance and premium design.",
      price: "$12",
    },
    {
      id: 5,
      name: "BMW Luxury",
      img: "/images/rr-1.jpg",
      title:
        "BMW is a luxury German car brand known for powerful performance and premium design.",
      price: 200,
    },
    {
      id: 6,
      name: "BMW Sports",
      img: "/images/lm-4.jpg",
      title:
        "BMW is a luxury German car brand known for powerful performance and premium design.",
      price: 200,
    },
  ];

  const car = bmwItem.find((p) => p.id === carId);

  if (!car) {
    return (
      <h2 className="text-center text-red-500 text-3xl py-10">Car Not Found</h2>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center pb-8 text-3xl md:text-4xl font-bold">
          BMW Car Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <div className="w-full h-40 md:h-48 overflow-hidden rounded-xl">
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              {car.title}
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-blue-600">
                ${car.price}
              </span>
              <Button className="cursor-pointer rounded-xl px-4 py-2">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
