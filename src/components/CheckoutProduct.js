import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectItems,
} from "../slices/basketSlice";

const CheckoutProduct = ({ product, hasPrime, rating }) => {
  const { id, title, price, category, image, description } = product;
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      description,
      hasPrime,
      price,
      category,
      image,
    };

    // Push Item into Redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    const product = {
      id,
      title,
      rating,
      description,
      hasPrime,
      price,
      category,
      image,
    };

    dispatch(removeFromBasket({ id }));
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        loader={myLoader}
        src={image}
        width={200}
        height={200}
        objectFit="contain"
      />

      {/* Middle Section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <StarIcon key={index} className="h-5 text-yellow-500 " />;
            })}
        </div>

        <p className="text-xs my-2 line-clamp-3 ">{description} </p>
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "GBP",
        }).format(price)}

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
            />
            <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
          </div>
        )}
      </div>

      {/* Right Add/Remove Buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end ">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
