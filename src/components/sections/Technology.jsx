import React from "react";
import { useSelector } from "react-redux";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";

export default function Technology() {
  const filterProduct = useSelector((state) => {
    return state.productList.product.filter(
      (ele) => ele.category === "technology"
    );
  });

  return (
    <>
      <Header title="technology" />
      <CardContainer col="4">
        <Card filterProduct={filterProduct} />
      </CardContainer>
    </>
  );
}
