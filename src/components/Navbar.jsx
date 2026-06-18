import { useState } from "react";
import logo from "../assets/logo.png";
import locpinIcon from "../assets/loc-pin.png";
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/cart.png"

const categories = [
    "All",
    "Alexa Skills",
    "Books",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Mobiles",
    "Sports",
    "Toys",
];

const secondaryNav = [
    "Fresh",
    "MiniTV",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Customer Service",
    "Electronics",
    "Fashion",
    "Prime",
    "New Releases",
    "Home & Kitchen",
];

export default function Navbar() {
    const [cartCount] = useState(0);

    return (
        <header className="sticky top-0 z-50 shadow-lg">
            {/* Top Navbar */}
            <div className="bg-[#131921] text-white">
                <div className="flex h-15 items-center gap-1 px-3">

                    {/* Logo */}
                    <a
                        href="/"
                        className="rounded border border-transparent px-2 py-1 hover:border-white"
                    >
                        <div className="font-bold text-white flex items-center justify-baseline">
                            <img src={logo} alt="" />
                            <span className="text-xs mb-1.5">.in</span>
                        </div>
                    </a>

                    {/* Delivery */}
                    <div className="hidden cursor-pointer items-end gap-1 rounded border border-transparent px-2 py-1 hover:border-white md:flex">
                        <img src={locpinIcon} className="-mr-1" />

                        <div className="flex flex-col">
                            <span className="text-[11px] text-gray-300">
                                Delivering to Delhi 110001
                            </span>

                            <span className="text-[13px] font-bold">
                                Update location
                            </span>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative mx-2 flex h-10 flex-1 overflow-hidden rounded borde">
                        <select className="hidden md:block bg-gray-100 px-3 text-xs w-15 border-r border-gray-200 text-black outline-none">
                            {categories.map((cat) => (
                                <option key={cat}>{cat}</option>
                            ))}
                        </select>

                        <input
                            type="text"
                            placeholder="Search Amazon.in"
                            className="w-full px-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#FF9900] bg-white"
                        />

                        <button className="flex w-14 items-center justify-center bg-[#FF9900] hover:bg-[#f3a847]">
                            <img src={searchIcon} className="flex-none w-5 h-5" alt="Search" />
                        </button>
                    </div>


                    {/* Language */}
                    <div className="hidden cursor-pointer items-center gap-1 rounded border border-transparent px-2 py-1 hover:border-white md:flex">
                        <img
                            src="https://flagcdn.com/w20/in.png"
                            alt="India"
                            className="h-4 w-5"
                        />
                        <span className="text-sm">EN</span>
                        <span className="text-xs">▾</span>
                    </div>

                    {/* Account */}
                    <div className="cursor-pointer rounded border border-transparent px-2 py-1 hover:border-white">
                        <span className="block text-[11px] text-gray-300">
                            Hello, Sign in
                        </span>

                        <span className="text-[13px] font-bold">
                            Account & Lists ▾
                        </span>
                    </div>

                    {/* Orders */}
                    <div className="hidden cursor-pointer rounded border border-transparent px-2 py-1 hover:border-white md:block">
                        <span className="block text-[11px] text-gray-300">
                            Returns
                        </span>

                        <span className="text-[13px] font-bold">
                            & Orders
                        </span>
                    </div>

                    {/* Cart */}
                    <div className="relative flex cursor-pointer items-center rounded border border-transparent px-2 py-1 hover:border-white">
                        <div className="relative flex items-center">
                            <img src={cartIcon} alt=""/>

                            <span className="absolute left-3.5 top-0 flex h-5 w-5 items-center justify-center rounded-full text-[#FF9900] text-xl font-bold">
                                {cartCount}
                            </span>
                        </div>

                        <span className="text-sm font-bold -ml-1 -mb-1">
                            Cart
                        </span>
                    </div>
                </div>
            </div>

            {/* Secondary Navbar */}
            <nav className="flex h-9.5 items-center overflow-x-auto bg-[#232f3e] px-3 scrollbar-hide">
                <button className="flex items-center gap-2 whitespace-nowrap border border-transparent px-3 py-2 text-sm font-bold text-white hover:border-white">
                    {/* <Menu size={18} /> */}
                    All
                </button>

                {secondaryNav.map((item) => (
                    <a
                        key={item}
                        href="#"
                        className={`whitespace-nowrap border border-transparent px-3 py-2 text-sm text-white hover:border-white ${item === "Prime"
                                ? "font-bold text-sky-400"
                                : ""
                            }`}
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </header>
    );
}