import { useState } from "react";

/**
 * AboutDetailedSection
 * - Responsive About / Product detail style section for a car shop
 * - TailwindCSS based
 *
 * Requirements:
 * - Put a good image at public/images/about-car.jpg or replace image URLs
 */

export const AboutDetailedSection = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "reviews" | "faq"
  >("overview");
  const [showContact, setShowContact] = useState(false);

  const specs = [
    { label: "Engine", value: "3.0L Twin Turbo V6" },
    { label: "Horsepower", value: "420 hp" },
    { label: "Top Speed", value: "250 km/h" },
    { label: "0-100 km/h", value: "4.6 s" },
    { label: "Transmission", value: "8-speed Automatic" },
    { label: "Fuel Type", value: "Petrol" },
  ];

  const features = [
    "Premium leather interior",
    "Adaptive cruise control",
    "Advanced driver assistance (ADAS)",
    "Panoramic sunroof",
    "Wireless Apple CarPlay & Android Auto",
  ];

  const faqs = [
    {
      q: "Do you offer financing/EMI?",
      a: "Yes — we offer flexible financing plans. Contact us for a personalized quote.",
    },
    {
      q: "Can I schedule a test drive?",
      a: "Absolutely. Click 'Request Test Drive' and we will contact you to confirm a slot.",
    },
    {
      q: "Do you provide warranty?",
      a: "All certified cars come with a standard 1-year warranty. Extended plans available.",
    },
  ];

  // JSON-LD structured data for SEO (product)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium Car Model",
    image: ["https://yourdomain.com/images/about-car.jpg"],
    description:
      "Premium luxury car with high performance, comfort, and modern features.",
    brand: { "@type": "Brand", name: "AutoX" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "120000",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <section className="w-full --tw-gradient-stops from-white to-gray-50 dark:from-gray-900 dark:to-black py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Discover the <span className="text-blue-600">Premium Car</span>{" "}
              Experience
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
              Explore detailed specs, features, pricing and reviews. Book a test
              drive or request a quote — everything from one place.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab("specs")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                aria-pressed={activeTab === "specs"}
              >
                View Specs
              </button>

              <button
                onClick={() => setShowContact(true)}
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow transition"
              >
                Request Test Drive
              </button>

              <a
                href="#gallery"
                className="px-4 py-2 text-sm text-blue-600 hover:underline"
              >
                See Gallery
              </a>
            </div>
          </div>

          {/* Price / Quick Info */}
          <div className="w-full lg:w-auto bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 shadow-md">
            <div className="text-sm text-gray-500">Starting Price</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              $120,000
            </div>
            <div className="text-sm text-green-600 mt-2">
              Certified & Available
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Mileage</span>
                <span className="font-medium">10 km/l</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Color</span>
                <span className="font-medium">Metallic Black</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Warranty</span>
                <span className="font-medium">1 year</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content: Gallery + Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery / Images */}
          <div className="lg:col-span-1">
            <div id="gallery" className="grid grid-cols-2 gap-2">
              <img
                src="/images/about-car.jpg"
                alt="Main car"
                loading="lazy"
                className="rounded-xl col-span-2 object-cover w-full h-56 md:h-72 shadow-lg"
              />
              <img
                src="/images/rr-1.jpg"
                alt="Car angle"
                loading="lazy"
                className="rounded-xl object-cover w-full h-28 md:h-36"
              />
              <img
                src="/images/lm-1.jpg"
                alt="Interior"
                loading="lazy"
                className="rounded-xl object-cover w-full h-28 md:h-36"
              />
            </div>

            {/* small badges */}
            <div className="mt-4 flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                Certified
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                Warranty
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full">
                Free Delivery
              </span>
            </div>
          </div>

          {/* Tabs & content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-2 mb-4 flex-wrap">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                }`}
                aria-pressed={activeTab === "overview"}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "specs"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                }`}
                aria-pressed={activeTab === "specs"}
              >
                Specs
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "reviews"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                }`}
                aria-pressed={activeTab === "reviews"}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "faq"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 border dark:border-gray-700"
                }`}
                aria-pressed={activeTab === "faq"}
              >
                FAQ
              </button>
            </div>

            {/* Tab content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              {activeTab === "overview" && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    This premium car combines top-tier performance with elegant
                    design. Designed for drivers who value power, comfort and
                    technology. Ideal for city driving and highway cruising.
                  </p>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 dark:text-white mb-2">
                      Key Features
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                      {features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specs.map((s, i) => (
                      <div
                        key={i}
                        className="flex justify-between bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
                      >
                        <span className="text-gray-600">{s.label}</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    Customer Reviews
                  </h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                          A
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-white">
                            Arafat
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            “Great driving experience — engine is smooth and
                            interior is top-notch.”
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                          S
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-white">
                            Abdullah
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            “Very satisfied with the purchase and the delivery
                            was smooth.”
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {faqs.map((f, idx) => (
                      <details
                        key={idx}
                        className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
                      >
                        <summary className="font-medium cursor-pointer">
                          {f.q}
                        </summary>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {f.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dealer info & CTA row */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/images/dealer-logo.jpeg"
                  alt="Dealer"
                  className="w-14 h-14 rounded-md object-cover shadow"
                />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Authorized Dealer
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    AutoX Cars — Dhaka
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowContact(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
                >
                  Request Quote
                </button>
                <a
                  href="/contact"
                  className="px-4 py-2 border rounded-lg border-gray-200 dark:border-gray-700"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact / Test Drive Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowContact(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl max-w-xl w-full p-6 shadow-xl z-10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Request Test Drive
              </h4>
              <button
                onClick={() => setShowContact(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                Close
              </button>
            </div>

            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Request submitted!");
                setShowContact(false);
              }}
            >
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  required
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  required
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Preferred Date</label>
                <input
                  type="date"
                  required
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowContact(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
