import React from "react";
import { useSelector } from "react-redux";
import Card from "../utilities/Card";
import CardContainer from "../utilities/CardContainer";
import Header from "../utilities/Header";

export default function Tending() {
  const { product } = useSelector((state) => state.productList);
  return (
    <>
      <Header title="best selling" />
      <CardContainer col="4">
        <Card filterProduct={product} />
      </CardContainer>
    </>
  );
}
