import React from "react";
import { useSelector } from "react-redux";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";

export default function NewProduct() {
  const productList = useSelector((state) => {
    const product = state.productList.product;
    return product.slice(product.length - 5, product.length).reverse();
  });

  return (
    <div>
      <Header title="new product" />
      <CardContainer col="4">
        <Card filterProduct={productList} />
      </CardContainer>
    </div>
  );
}
