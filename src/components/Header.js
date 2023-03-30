import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const myLoader = ({ src }) => {
  return `https://links.papareact.com/f90`;
};

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center p-6 py-2 flex-grow bg-amazon_blue">
        {/* Image */}
        <div className="flex items-center mt-2 flex-grow sm:flex-grow-0">
          <Image
            loader={myLoader}
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className=" ml-4 hidden sm:flex items-center rounded-md h-10  bg-yellow-400  hover:bg-yellow-500 flex-grow cursor-pointer ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right Nav */}
        <div className="flex items-center text-xs text-white space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p> Hello, Adwait Mandge </p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center ">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold ">0</span>
            
            <ShoppingCartIcon className="h-10" />
            <p className="hidden font-extrabold md:text-sm md:inline mt-2 ">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm p-2 pl-6">
        <p className="link flex items-center ">
            <MenuIcon className="h-6 mr-1 " />
            All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
