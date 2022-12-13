import React from "react";
import {
  AiFillClockCircle,
  AiFillFire,
  AiFillShopping,
  AiOutlineBars,
} from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory } from "../../app/feature/getProductSlice";
import {
  catArea,
  filterArea,
  layoutArea,
} from "../../app/feature/togglerSlice";

export default function FilterAria() {
  const dispatch = useDispatch();
  const { catToggle, layoutToggle, filterToggle } = useSelector(
    (state) => state.toggler
  );
  const handleClick = (text) => {
    dispatch(filterCategory(text));
  };

  return (
    <div className="md:hidden">
      <div className="">
        <div className="flex justify-between">
          <button
            className="text-lg font-raleway text-gray-500 font-semibold"
            onClick={() => handleClick("all")}
          >
            <AiFillShopping className=" text-indigo-500 text-[1.4rem] mb-[0.4rem]  inline-block" />
            All
          </button>
          <button
            className="text-lg font-raleway text-gray-500 font-semibold"
            onClick={() => handleClick("new")}
          >
            <AiFillClockCircle className="text-indigo-500 text-[1.2rem] inline-block mb-1" />
            New
          </button>
          <button
            className="text-lg font-raleway text-gray-500 font-semibold"
            onClick={() => handleClick("tending")}
          >
            <AiFillFire className="mb-1 text-indigo-500  text-[1.4rem] inline-block" />
            Tending
          </button>
        </div>
        <div className="flex justify-between mt-5">
          <button
            onClick={() => dispatch(catArea())}
            className="px-3 py-[0.2rem] mr-2 text-md font-[500] rounded-md bg-gray-200 text-gray-700 "
          >
            Category
            {catToggle ? (
              <IoMdArrowDropdown className="inline-block" />
            ) : (
              <IoMdArrowDropright className="inline-block" />
            )}
          </button>
          <div>
            <BiFilterAlt
              onClick={() => dispatch(filterArea())}
              className={`${
                filterToggle ? "text-orange-300" : "text-gray-600"
              } text-2xl mr-8 inline-block `}
            />

            {layoutToggle ? (
              <AiOutlineBars
                onClick={() => dispatch(layoutArea())}
                className="cursor-pointer w-8 text-2xl inline-block text-gray-600"
              />
            ) : (
              <BsFillGrid3X3GapFill
                className="cursor-pointer w-8 text-xl inline-block text-gray-600"
                onClick={() => dispatch(layoutArea())}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
