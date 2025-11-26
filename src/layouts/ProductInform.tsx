import {
  FaCarSide,
  FaTools,
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaStar,
} from "react-icons/fa";

export const ProductInform = () => {
  const infoItems = [
    {
      icon: <FaCarSide className="text-4xl text-blue-500 drop-shadow-md" />,
      title: "Fast Car Delivery",
      description: "Get your dream car delivered quickly & safely.",
    },
    {
      icon: <FaTools className="text-4xl text-red-500 drop-shadow-md" />,
      title: "Premium Maintenance",
      description: "Top-notch service support for all car models.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-500 drop-shadow-md" />,
      title: "Secure Payment",
      description: "Safe transactions with full buyer protection.",
    },
    {
      icon: (
        <FaMoneyCheckAlt className="text-4xl text-green-500 drop-shadow-md" />
      ),
      title: "Easy Financing",
      description: "Flexible EMI and affordable installment plans.",
    },
    {
      icon: <FaStar className="text-4xl text-indigo-500 drop-shadow-md" />,
      title: "Certified Quality",
      description: "All cars are verified & quality-checked.",
    },
  ];

  return (
    <section className="w-full py-16 --tw-gradient-stops from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="w-full flex justify-center text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Choose{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-red-500 ml-2">
            AutoX Car Shop?
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center rounded-2xl 
              bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 shadow-lg 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl  from-blue-400/20 via-red-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
