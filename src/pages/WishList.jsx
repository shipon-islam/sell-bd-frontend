import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/utilities/Card";
import CardContainer from "../components/utilities/CardContainer";
import Layout from "../components/utilities/Layout";
import WraperSideLinks from "../components/utilities/WraperSideLinks";
import EmptyItem from "./EmptyItem";

export default function WishList() {
  const { wishlist } = useSelector((state) => state.wishlists);

  return (
    <Layout>
      <WraperSideLinks page="wish list">
        {wishlist?.length > 0 ? (
          <CardContainer>
            <Card filterProduct={wishlist} />
          </CardContainer>
        ) : (
          <EmptyItem title="wishlist" />
        )}
      </WraperSideLinks>
    </Layout>
  );
}
{
  /* <Layout>
{wishlist?.length > 0 ? (
  <WraperSideLinks page="wish list">
    <div className=" mt-7">
      <CardContainer>
        <Card filterProduct={wishlist} />
      </CardContainer>
    </div>
  </WraperSideLinks>
) : (
  <EmptyItem title="wishlist" />
)}
</Layout>// */
}
