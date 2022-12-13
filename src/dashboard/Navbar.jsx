import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-x-8 uppercase my-8 px-4 py-1 rounded-md text-slate-500 font-bold bg-orange-300">
      <Link to="/dashboard/product/list">product list</Link>
      <Link to="/dashboard/product/order/list">see order</Link>
      <Link to="/dashboard/product/add">add product</Link>
      <div className="ml-auto capitalize text-slate-900 hidden md:block">
        author: shipon islam
      </div>
    </div>
  );
}
