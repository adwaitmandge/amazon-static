import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

const myLoader = ({ src }) => {
  return `https://links.papareact.com/ikj`;
};

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const session = useSession();

  return (
    <div className="bg-gray-100 ">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm ">
          <Image
            loader={myLoader}
            src="https://links.papreact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex-col p-5 space-y-10 bg-white ">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length == 0
                ? "Your Amazon Basket is Empty"
                : "Shopping Basket"}{" "}
            </h1>
            {items.map((item, index) => {
              return (
                <CheckoutProduct
                  product={item}
                  rating={item.rating}
                  hasPrime={item.hasPrime}
                />
              );
            })}
          </div>
        </div>

        {/* Right */}
        {items.length > 0 && (
          <>
            <div className="flex flex-col space-y-2 shadow-md p-10 bg-white` ">
              <h1 className="whitespace-nowrap">
                {`Subtotal (${items.length} items) `}
                <span className="font-bold">
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "GBP",
                  }).format(total)}
                </span>
              </h1>
              <button
                disabled={!session.data}
                className={`button ${
                  !session.data
                    ? "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed border-gray-200 "
                    : ""
                } `}
              >
                {!session.data ? "Sign In to Checkout" : "Proceed to Checkout"}{" "}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Checkout;
