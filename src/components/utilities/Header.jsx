import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title, path = "/product" }) {
  return (
    <>
      <div className="flex justify-between px-4 text-gray-800 mt-8">
        <div className="capitalize font-montserrat font-bold text-xl">
          {title}
        </div>
        <Link to={path} className="text-orange-400">
          see more
        </Link>
      </div>
      <hr />
    </>
  );
}
