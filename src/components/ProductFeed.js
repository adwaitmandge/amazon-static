import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto ">
      {products.slice(0, 4).map((product) => {
        const { id, title, price, description, category, image } = product;
        return <Product key={id} product={product} />;
      })}

      <img
        loading="lazy"
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => {
          const { id, title, price, description, category, image } = product;
          return <Product key={id} product={product} />;
        })}
      </div>

      {products.slice(5, products.length).map((product) => {
        const { id, title, price, description, category, image } = product;
        return <Product key={id} product={product} />;
      })}
    </div>
  );
};

// We are using server-side rendering to get the Products from fakestoreapi.com
// export async function getServerSideProps tells Next.js that this is no longer a static page, it needs to have a middle server step
// Basically the middle server is going to fetch data from the fakeStoreApi, render the page out and then deliver it to the browser rather than sending the entire site to the browser

export default ProductFeed;
