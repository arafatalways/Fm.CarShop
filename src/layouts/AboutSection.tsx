import { Link } from "react-router";

export const AboutSection = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative group">
          <img
            src="images/about-car.jpg"
            alt="Luxury Car"
            className="rounded-2xl shadow-xl w-full object-cover group-hover:scale-105 transition-all duration-500"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl --tw-gradient-stops from-blue-500/20 to-pink-500/20 blur-3xl opacity-0 group-hover:opacity-70 transition duration-500"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Our <span className="text-blue-600">Car Store</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
            We provide premium, luxury and top–brand cars with unmatched quality
            and trusted services. From stylish BMW to powerful Lamborghini,
            you’ll find every model that defines excellence and performance.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Our mission is simple — to deliver world-class cars with honesty,
            transparency, and the best customer experience. Drive your dream car
            with confidence.
          </p>

          <div className="mt-6">
            <Link to="/learn-more">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
