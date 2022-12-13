import React from "react";
import { Link } from "react-router-dom";

function WraperSideLinks({ page, children }) {
  return (
    <div className="sm:flex gap-4">
      <div className="bg-orange-300/30 px-5 min-w-[15rem] hidden sm:block rounded-md mt-8 min-h-[31rem]">
        <div className="capitalize font-semibold text-xl pt-3 pb-16 text-gray-800">
          {page}
        </div>
        <Link
          className="block mt-4 font-semibold uppercase text-md text-gray-700"
          to="/profile"
        >
          my account
        </Link>
        <Link
          to="/product/order/list"
          className="block mt-4 font-semibold uppercase text-md text-gray-700"
        >
          my order
        </Link>
        <Link
          className="block mt-4 font-semibold uppercase text-md text-gray-700"
          to="/product/wishlist"
        >
          my wishlist
        </Link>
        <Link
          className="block mt-4 font-semibold uppercase text-md text-gray-700"
          to="/product/card"
        >
          my card
        </Link>
      </div>
      {children}
    </div>
  );
}

export default WraperSideLinks;
