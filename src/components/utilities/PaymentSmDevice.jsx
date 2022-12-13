import React from "react";
import { Link } from "react-router-dom";

export default function PaymentSmDevice({ payment }) {
  return (
    <ul className="border-2 font-montserrat mt-4">
      <li className="border-b grid grid-cols-[120px,1fr]">
        <div className="border-r-2 h-full px-2 py-2">Order Id</div>
        <div className="py-2 pl-2 capitalize text-gray-900 ">
          {payment.orderId}
        </div>
      </li>
      <li className="border-b  grid grid-cols-[120px,1fr]">
        <div className="border-r-2 h-full px-2 py-2">Date</div>
        <div className="py-2 pl-2 capitalize text-gray-900 ">
          {payment.date}
        </div>
      </li>
      <li className="border-b  grid grid-cols-[120px,1fr] ">
        <div className="border-r-2 h-full px-2 py-2">Customer</div>
        <div className="py-2 pl-2 capitalize text-gray-900 ">
          {payment.customerName}
        </div>
      </li>
      <li className="border-b  grid grid-cols-[120px,1fr]">
        <div className="border-r-2 h-full px-2 py-2">Order Total</div>
        <div className="py-2 pl-2 capitalize text-gray-900 ">
          {payment.totalAmount}
        </div>
      </li>
      <li className="border-b  grid grid-cols-[120px,1fr] ">
        <div className="border-r-2 h-full px-2 py-2">Status</div>
        <div className="py-2 pl-2 capitalize text-orange-400 ">
          {payment.status}
        </div>
      </li>
      <li className=" grid grid-cols-[120px,1fr]">
        <div className="border-r-2 h-full px-2 py-2">Action</div>
        <div className="py-2 pl-2 capitalize  text-gray-900 ">
          <Link to={`/product/order/list/view/${payment._id}`}>
            <button className="bg-orange-300 py-1 px-2 rounded-md">
              view order
            </button>
          </Link>
        </div>
      </li>
    </ul>
  );
}
