import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
    return (

        <footer>
            <div class="bg-[#37475A] h-12 flex justify-center items-center text-white text-sm">
                <p>Back to top</p>
            </div>

            <div class="bg-[#232F3E] text-[#DDDDDD] text-sm flex justify-evenly text-center py-10 flex-col gap-5 px-4 sm:flex-row sm:text-left">
                <ul class="space-y-2.5">
                    <li class="font-bold text-base text-white">Get to Know Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                    <li>Amazon Science</li>
                </ul>
                <ul class="space-y-2.5">
                    <li class="text-base font-bold text-white">Make Money with Us</li>
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon Business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                    <li>See More Make Money with Us</li>
                </ul>

                <ul class="space-y-2.5">
                    <li class="text-base font-bold text-white">Amazon Payment Products</li>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>

                <ul class="space-y-2.5">
                    <li class="text-base font-bold text-white">Let Us Help You</li>
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Amazon Assistant</li>
                    <li>Help</li>
                </ul>
            </div>

            <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4 bg-[#232f3e]">
                <img className="w-24" src={logo} alt="logo" />
                <p className="text-sm -mt-4">
                    All rights reserved{" "}
                    <a
                        className="hover:text-white hover:underline decoration-1 cursor-pointer duration-300"
                        href="https://reactbd.com"
                        target="_blank"
                    >
                        @reactbd.com
                    </a>
                </p>
            </div>

        </footer>
    )
}

export default Footer