import React from "react";

function AdBanner() {
  const banners = [
    {
      title: "Grocery Deals",
      description: "Fresh produce delivered in 2 hours",
      buttonText: "Shop Fresh",
      gradient: "from-emerald-500 via-green-500 to-lime-500",
    },
    {
      title: "Amazon Pay",
      description: "Pay bills & earn cashback",
      buttonText: "Add Money",
      gradient: "from-blue-500 via-cyan-500 to-sky-500",
    },
    {
      title: "Books & Audible",
      description: "3 months of Audible free for Prime",
      buttonText: "Start Reading",
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    },
  ];

  return (
    <section className="w-full px-2 sm:px-4 md:px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`
              bg-gradient-to-r ${banner.gradient}
              rounded-xl
              p-4 sm:p-5
              text-white
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              flex
              flex-col
              justify-between
              min-h-[150px]
            `}
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {banner.title}
              </h3>

              <p className="text-sm sm:text-base text-white/90">
                {banner.description}
              </p>
            </div>

            <button
              className="
                mt-4
                w-fit
                bg-white/20
                backdrop-blur-sm
                hover:bg-white/30
                px-4
                py-2
                rounded-lg
                text-sm
                font-medium
                transition
              "
            >
              {banner.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdBanner;