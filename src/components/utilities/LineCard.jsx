import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function LineCard({ filterProduct }) {
  return (
    <>
      {filterProduct &&
        filterProduct.map((element) => {
          const { _id, price, image, title, rating } = element;
          return (
            <div key={_id}>
              <Link to={`/product/info/${_id}`} className="flex border-b py-3">
                <img
                  className="w-28 object-cover h-auto"
                  src={image[0]}
                  alt="card"
                />
                <div>
                  <p className="text-[0.8rem] mt-2 mb-3 capitalize ">{title}</p>
                  <Rating rating={rating} />
                  <div className="flex">
                    <div>Price:</div>
                    <div className="text-orange-400 ">
                      {price}
                      <TbCurrencyTaka className="inline-block text-xl" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
}

export default LineCard;
