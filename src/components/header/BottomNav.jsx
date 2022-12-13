import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BottomNav() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-orange-300 py-2">
      <div className=" mx-8 md:mx-16 lg:mx-24 flex items-center justify-between">
        <div className="cursor-pointer menu">
          {!toggle ? (
            <FiMenu
              className="text-[1.8rem] text-gray-800"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineClose
              className="text-[1.8rem] text-gray-800"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={
              toggle
                ? "absolute px-8 clippath bg-orange-300 w-1/2 sm:w-1/5 mt-2.5 ml-6 pt-16 pb-4 "
                : "hidden"
            }
          >
            <Link
              to="/"
              onClick={handleClick}
              className="block text-[1rem]  font-[500] my-3 uppercase  text-slate-600 hover:text-slate-900"
            >
              home
            </Link>
            <Link
              to="/product"
              onClick={handleClick}
              className="block text-[1rem]  font-[500] my-3 uppercase  text-slate-600 hover:text-slate-900"
            >
              All product
            </Link>
            <Link
              to="/contact"
              onClick={handleClick}
              className="block text-[1rem]  font-[500] my-3 uppercase  text-slate-600 hover:text-slate-900"
            >
              contact us
            </Link>
            <Link
              to="/about"
              onClick={handleClick}
              className="block text-[1rem]  font-[500] my-3 uppercase  text-slate-600 hover:text-slate-900"
            >
              about us
            </Link>
          </div>
          <div />
        </div>
        <div>
          <div
            className='sm:mr-10 relative before:content-["
    "] before:-left-2 before:w-[2px] before:hidden sm:before:block before:h-full before:bg-gray-700 before:absolute inline font-bold font-poppins text-gray-800'
          >
            <BsTelephoneFill className="text-xl  inline-block sm:hidden" />
            <span className="hidden sm:inline">Hotline:</span>+8801641758653
          </div>
          <div
            className='relative hidden sm:inline before:content-["
    "] before:-left-2 before:w-[2px] before:h-full before:bg-gray-700 before:absolute text-gray-800 font-bold font-poppins'
          >
            Tele: +883458565
          </div>
        </div>
      </div>
    </div>
  );
}
