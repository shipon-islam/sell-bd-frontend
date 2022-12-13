import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/utilities/Card";
import CardContainer from "../components/utilities/CardContainer";
import CatLinks from "../components/utilities/CatLinks";
import FilterAreaDesktop from "../components/utilities/FilterAreaDesktop";
import FilterAria from "../components/utilities/FilterAria";
import FilterMobileDevice from "../components/utilities/FilterMobileDevice";
import Layout from "../components/utilities/Layout";
import LineCard from "../components/utilities/LineCard";
import NoFound from "../components/utilities/NoFound";
import SidebarLinks from "../components/utilities/SidebarLInks";
import Loading from "./Loading";

export default function Product() {
  const { catToggle, filterToggle, layoutToggle } = useSelector(
    (state) => state.toggler
  );

  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const { filterProduct, loading } = useSelector((state) => state.productList);
  useEffect(() => {
    setProduct(filterProduct);
  }, [filterProduct]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Layout>
      <div className="grid md:grid-cols-[2fr_minmax(300px,5fr)] gap-x-8">
        <SidebarLinks />

        <div>
          <div className=" sticky border-b top-[8.5rem] md:top-[9.5rem]  bg-white pb-3 pt-5 px-2">
            <FilterAreaDesktop />
            <FilterAria />
            {catToggle && <CatLinks />}
            {filterToggle && <FilterMobileDevice />}
          </div>
          {product.length > 0 ? (
            layoutToggle ? (
              <div className="min-h-[55vh]">
                <CardContainer>
                  <Card filterProduct={product && product} />
                </CardContainer>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 min-h-[55vh]">
                <LineCard filterProduct={product && product} />
                <LineCard />
                <LineCard />
              </div>
            )
          ) : (
            <NoFound />
          )}
        </div>
      </div>
    </Layout>
  );
}
