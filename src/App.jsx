import React from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';

const App = () => {
  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };

  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?w=300&q=80",
      title: "Apple AirPods Pro (2nd Gen)",
      price: 21999,
      originalPrice: 26999,
      rating: 5,
      reviews: 12453,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80",
      title: "Samsung Galaxy Watch 6",
      price: 17999,
      originalPrice: 24999,
      rating: 4,
      reviews: 8432,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
      title: "Sony WH-1000XM5 Headphones",
      price: 24990,
      originalPrice: 34990,
      rating: 5,
      reviews: 6210,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80",
      title: "Levi's Men's 511 Slim Fit Jeans",
      price: 1799,
      originalPrice: 3599,
      rating: 4,
      reviews: 9871,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
      title: "Nike Revolution Running Shoes",
      price: 2999,
      originalPrice: 4999,
      rating: 4,
      reviews: 15670,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&q=80",
      title: "boAt Stone Bluetooth Speaker",
      price: 1499,
      originalPrice: 2999,
      rating: 4,
      reviews: 22234,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80",
      title: "Canon EOS M50 Mirrorless Camera",
      price: 54999,
      originalPrice: 62999,
      rating: 5,
      reviews: 2351,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80",
      title: "HP Pavilion Gaming Laptop",
      price: 64999,
      originalPrice: 79999,
      rating: 4,
      reviews: 4923,
    },
  ];




  return (
    <>
      <Navbar />
      <HeroSlider />

      


      <div className="bg-[#e3e6e6] px-2 sm:px-3 md:px-4 lg:px-5 z-2 relative md:-mt-20">
        <div className="bg-white p-3 sm:p-4 md:p-5 rounded">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
            <h2 className="text-sm sm:text-base md:text-lg font-bold">
              Deals inspired by your browsing history
            </h2>

            <a
              href="/"
              className="text-[#007185] text-xs sm:text-sm hover:text-[#c45500]"
            >
              See all deals
            </a>
          </div>

          <div
            className="
        flex
        gap-2
        sm:gap-3
        overflow-x-auto
        pb-2
        scrollbar-hide
      "
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="
            shrink-0

            w-35
            sm:w-40
            md:w-45
            lg:w-50
            xl:w-55
          "
              >
                <ProductCard
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AdBanner />



      <div className="bg-[#e3e6e6] px-2 sm:px-3 md:px-4 lg:px-5">
        <div className="bg-white p-3 sm:p-4 md:p-5 rounded">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
            <h2 className="text-sm sm:text-base md:text-lg font-bold">
              Deals inspired by your browsing history
            </h2>

            <a
              href="/"
              className="text-[#007185] text-xs sm:text-sm hover:text-[#c45500]"
            >
              See all deals
            </a>
          </div>

          <div
            className="
        flex
        gap-2
        sm:gap-3
        overflow-x-auto
        pb-2
        scrollbar-hide
      "
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="
            shrink-0

            w-35
            sm:w-40
            md:w-45
            lg:w-50
            xl:w-55
          "
              >
                <ProductCard
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App