import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../slices/basketSlice";

const myLoader = ({ src }) => {
  return `${src}`;
};

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ product }) => {
  const { id, title, price, description, category, image } = product;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();
  const selector = useSelector(selectItems);

  const addItemToBasket = () => {
    // Product to be added to the basket
    const product = {
      id,
      title,
      description,
      price,
      category,
      image,
      hasPrime,
      rating,
    };

    // Sending a product as an action to the REDUX store... the basket slice
    // Dispatching an action to the REDUX Store and we are passing the product inside of it as a payload
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 p-10 bg-white ">
      <p className="absolute top-2 right-2 italic text-gray-400 ">{category}</p>

      <Image
        loader={myLoader}
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />

      <h4 className="my-3 ">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, index) => {
            return (
              <div>
                <StarIcon key={index} className="h-5 text-yellow-500 " />
              </div>
            );
          })}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description} </p>

      <div className="mb-5">
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "GBP",
        }).format(price)}
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 ">
          <img className="w-12" src="https://links.papareact.com/fdw" />
          <p className="text-gray-500 text-xs">Free Next-Day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
