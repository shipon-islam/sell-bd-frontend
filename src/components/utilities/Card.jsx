import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Card({ filterProduct }) {
  return (
    <>
      {filterProduct.map((element) => {
        const { _id, price, discountprice, image, title, rating, subcategory } =
          element;
        return (
          <div key={_id} className="max-w-[250px]  py-2 px-3">
            <Link to={`/product/info/${_id}`}>
              <img className="w-auto h-auto" src={image[0]} alt="card" />
              {price < discountprice && (
                <p
                  className="text-[0.8rem]
      mt-2 mb-3 "
                >
                  {discountprice}
                  <TbCurrencyTaka className="inline-block text-lg mb-[3px]" />
                </p>
              )}
              <Rating rating={rating} />
              <div className="flex justify-between">
                <div>Price:</div>
                <div className="text-orange-400">
                  {price}{" "}
                  <TbCurrencyTaka className="inline-block text-xl mb-[3px]" />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
