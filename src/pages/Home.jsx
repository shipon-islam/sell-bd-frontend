import React from "react";
import { useSelector } from "react-redux";
import "../animation.css";
import banner1 from "../assets/banner1.png";
import ledBanner from "../assets/ledBanner.png";
import Fashion from "../components/sections/Fashion";
import Hero from "../components/sections/Hero";
import NewProduct from "../components/sections/NewProduct";
import Technology from "../components/sections/Technology";
import Tending from "../components/sections/Tending";
import Layout from "../components/utilities/Layout";
import Loading from "./Loading";

export default function Home() {
  const { loading, product } = useSelector((state) => state.productList);
  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Hero />
      <img
        className="mt-24 mb-12 w-full h-24 sm:h-auto"
        src={banner1}
        alt="banner"
      />
      <Tending />
      <img
        className="mt-24 mb-12 w-full h-24 sm:h-auto"
        src={ledBanner}
        alt="banner"
      />

      <NewProduct />
      <img
        className="mt-24 mb-12 w-full h-24 sm:h-auto"
        src={ledBanner}
        alt="banner"
      />
      <Technology />
      <Fashion />
    </Layout>
  );
}
