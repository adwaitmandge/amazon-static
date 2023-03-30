import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

const Home = ({ products }) => {
  return (
    <div className="bg-gray-100 h-screen ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-100 ">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

export default Home;

// GET ->>  https://fakestoreapi.com/products
