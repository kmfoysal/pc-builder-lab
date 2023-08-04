import FeaturedCategory from "@/components/UI/FeaturedCategory";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import HeroBanner from "@/components/UI/HeroBanner";
import ProductCard from "@/components/UI/ProductCard";
// import { Inter } from 'next/font/google'
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ allProducts }) {
  return (
    <>
      <Head>
        <title>Pc Builder Lab</title>
        <meta
          name="description"
          content="This is Pc Builder Lab where you can make your dream Pc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner />

      <FeaturedProducts allProducts={allProducts} />

      <FeaturedCategory />
      
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProducts: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 10,
  };
};
