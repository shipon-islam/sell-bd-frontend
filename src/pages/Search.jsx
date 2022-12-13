import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/utilities/Card";
import CardContainer from "../components/utilities/CardContainer";
import Layout from "../components/utilities/Layout";
import NoFound from "../components/utilities/NoFound";

export default function Search() {
  const { searchProduct } = useSelector((state) => state.productList);

  return (
    <Layout>
      {searchProduct.length > 0 ? (
        <div className="min-h-screen">
          <div className="bg-gray-300/30 sm:pl-16 pl-2 rounded-md capitalize my-4 py-2 font-semibold font-montserrat text-gray-700">
            your search result {searchProduct?.length}
          </div>
          <CardContainer>
            <Card filterProduct={searchProduct} />
          </CardContainer>
        </div>
      ) : (
        <NoFound />
      )}
    </Layout>
  );
}
