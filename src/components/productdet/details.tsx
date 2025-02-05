"use client";
import Image from "next/image";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const Details = ({ product }: { product: { title: string; price: number; image: string } }) => {
  const [quantity, setQuantity] = useState(1);

  // Handle quantity change (prevent going below 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="md:w-2/5 w-full md:p-2 md:pt-0 pt-10">
      <h1 className="w-full sm:text-2xl text-xl font-medium">{product?.title}</h1>

      {/* Product rating and stock */}
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4, 5].map((index) => (
          <div className="w-3 h-3 overflow-hidden" key={index}>
            <Image
              src={"/icons/star.png"}
              alt={`Star ${index}`}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <span className="text-zinc-500 text-sm py-2">
          &nbsp; (150 reviews) &nbsp; | &nbsp; <span className="text-green-500">In Stock</span>
        </span>
      </div>

      {/* Product price */}
      <span className="text-xl">${product.price * quantity}.00</span>

      {/* Product description */}
      <p className="text-sm py-3 border-b-2 border-zinc-300">
        PlayStation 5 Controller Skin: High-quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal. Pressure-sensitive.
      </p>

      {/* Colors selection */}
      <div className="flex items-center py-3 gap-2">
        <span className="text-lg mr-4">Colours:</span>
        <button
          className="w-4 h-4 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-red-600"
          aria-label="Red color"
        ></button>
        <button
          className="w-4 h-4 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-zinc-500"
          aria-label="Gray color"
        ></button>
      </div>

      {/* Size selection */}
      <div className="flex items-center py-3 gap-2">
        <span className="text-lg mr-4">Size:</span>
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <button
            key={size}
            className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-primRed hover:text-white focus:bg-primRed focus:text-white focus:border-none"
          >
            {size}
          </button>
        ))}
      </div>

      {/* Quantity selector */}
      <div className="flex flex-wrap items-center py-3 gap-2">
        <div className="flex items-center border border-zinc-400 rounded-md">
          <span
            onClick={decreaseQuantity}
            className="w-10 h-10 border-r border-zinc-400 text-lg flex justify-center items-center hover:bg-primRed hover:text-white"
            aria-label="Decrease quantity"
          >
            <LuMinus />
          </span>
          <span className="md:px-10 px-8 font-medium">{quantity.toString().padStart(2, "0")}</span>
          <span
            onClick={increaseQuantity}
            className="w-10 h-10 border-l border-zinc-400 text-lg flex justify-center items-center hover:bg-primRed hover:text-white"
            aria-label="Increase quantity"
          >
            <GoPlus />
          </span>
        </div>
        <button className="rounded-sm bg-primRed text-white md:px-8 px-5 sm:py-2 py-3 sm:text-base text-xs">
          Buy Now
        </button>
        <span className="w-10 h-10 border border-zinc-400 rounded-md flex justify-center items-center p-1">
          <Image
            src={"/icons/favorite.png"}
            alt="Add to favorite"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </span>
      </div>

      {/* Delivery options */}
      <div className="flex items-center py-3 gap-2 w-full">
        <div className="w-full border border-zinc-400 rounded-md">
          <div className="w-full border-b border-zinc-400 flex items-center gap-5 p-4">
            <div className="w-10 h-10 p-1">
              <Image
                src={"/icons/freedelivery.png"}
                alt="Free delivery"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">Free Delivery</span>
              <span className="text-sm">Enter your postal code for Delivery Availability</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-5 p-4">
            <div className="w-10 h-10 p-1">
              <Image
                src={"/icons/returndelivery.png"}
                alt="Return delivery"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">Return Delivery</span>
              <span className="text-sm">Free 30 Days Delivery Returns. Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
