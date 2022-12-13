import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineCloudDone } from "react-icons/md";
import { Link } from "react-router-dom";

export default function PaymentSuccess({ handleClick, toggle }) {
  return (
    <div className="min-h-screen fixed w-full   top-0 z-[110] bg-black/50 flex items-center justify-center">
      <div className="bg-white py-12 px-4 rounded-md w-[90%] sm:w-fit relative">
        <MdOutlineCloudDone className="text-[6rem] text-green-600 mx-auto" />
        <div>
          <h3 className="text-2xl font-bold font-poppins text-slate-700 text-center py-3">
            Payment Successful !
          </h3>
          <p className="w-[80%] text-md font-montserrat mx-auto text-center">
            We are delighted to inform you that we received your payments
          </p>
        </div>
        <Link
          onClick={() => handleClick()}
          to="/product"
          className="bg-orange-300 py-1 px-4 mx-auto block my-4 w-fit"
        >
          Continue Shopping
        </Link>
        <Link to="/">
          <AiOutlineClose
            onClick={() => handleClick()}
            className="absolute top-4 right-3 text-xl cursor-pointer text-gray-500"
          />
        </Link>
      </div>
    </div>
  );
}
