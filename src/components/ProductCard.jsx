import React from "react";

function ProductCard({
  id,
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  badge = "Deal",
  onAddToCart,
}) {
  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-md
        overflow-hidden
        transition-all
        duration-200
        hover:shadow-md
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative bg-[#f7f7f7]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            w-full
            h-[110px]
            sm:h-[130px]
            md:h-[150px]
            lg:h-[170px]
            object-cover
          "
        />

        <span
          className="
            absolute
            top-1
            left-1
            bg-[#cc0c39]
            text-white
            text-[9px]
            sm:text-[10px]
            font-bold
            px-1.5
            py-0.5
            rounded
          "
        >
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3">
        {/* Title */}
        <h4
          className="
            text-[11px]
            sm:text-xs
            md:text-sm
            font-medium
            text-[#0f1111]
            line-clamp-2
            min-h-[32px]
            sm:min-h-[38px]
          "
        >
          {title}
        </h4>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[#ffa41c] text-[10px] sm:text-xs">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>

          <span className="text-[9px] sm:text-[10px] text-[#007185] hover:underline cursor-pointer">
            ({reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mt-1 flex flex-col">
          <span className="font-bold text-xs sm:text-sm md:text-base">
            ₹{price.toLocaleString()}
          </span>

          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[9px] sm:text-[10px] text-gray-500 line-through">
              ₹{originalPrice.toLocaleString()}
            </span>

            <span className="text-[9px] sm:text-[10px] text-[#cc0c39] font-semibold">
              {discount}% off
            </span>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          onClick={() =>
            onAddToCart?.({
              id,
              title,
              price,
            })
          }
          className="
            mt-2
            w-full
            bg-[#ffd814]
            hover:bg-[#f7ca00]
            rounded-full
            py-1.5
            sm:py-2
            text-[10px]
            sm:text-xs
            font-medium
            transition
            active:scale-95
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;