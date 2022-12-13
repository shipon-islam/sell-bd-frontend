import React from "react";
import { useSelector } from "react-redux";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";

export default function fashion() {
  const filterProduct = useSelector((state) => {
    return state.productList.product.filter(
      (ele) => ele.category === "fashion & lifestyle"
    );
  });

  return (
    <>
      <Header title="fashion & lifestyle" />
      <CardContainer col="4">
        <Card filterProduct={filterProduct} />
      </CardContainer>
    </>
  );
}
