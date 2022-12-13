import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  filterCategory,
  filterPriceRange,
} from "../../app/feature/getProductSlice";

function SidebarLinks() {
  const navRef = useRef(null);
  const [priceFilter, setPriceFilter] = useState(0);
  const dispatch = useDispatch();
  const { maxPrice } = useSelector((state) => state.productList);

  const handlePriceRange = (e) => {
    setPriceFilter(e.target.value);
    dispatch(filterPriceRange(e.target.value));
  };

  const handleClick = (e) => {
    dispatch(filterCategory(e.target.innerText));
    let list = navRef.current.querySelectorAll(".option");
    [...list].forEach((li) => {
      li.classList.remove("text-orange-300");
      e.target.classList.add("text-orange-300");
    });
  };
  return (
    <div className="hidden md:block sticky top-[10rem] pt-2 pb-8 h-screen  font-montserrat text-gray-800 pr-3 border-r">
      <h1 className="font-semibold">Category</h1>
      <ul ref={navRef}>
        <li
          onClick={handleClick}
          className="option border-b mt-1 text-sm cursor-pointer hover:text-orange-300"
        >
          All
        </li>
        <li
          onClick={handleClick}
          className="option border-b block mt-1 text-sm cursor-pointer hover:text-orange-300"
        >
          New
        </li>
        <li
          onClick={handleClick}
          className="option border-b mt-1 text-sm cursor-pointer hover:text-orange-300"
        >
          Tending
        </li>

        <li>
          <div className="border-b mt-1 text-sm text-black">
            Technology
            <MdOutlineKeyboardArrowDown className="inline-block" />
          </div>
          <ul className="mt-1">
            <li
              onClick={handleClick}
              className="option text-[0.9rem] checked:bg-red-500 cursor-pointer hover:text-orange-300"
            >
              Mobile
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Television
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Monitor
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Mouse
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Keyboard
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Router
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Fan
            </li>
          </ul>
        </li>
        <li>
          <div className="border-b text-sm text-black">
            Fashion & Lifestyle
            <MdOutlineKeyboardArrowDown className="inline-block" />
          </div>
          <ul className="mt-1">
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Shirt
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Tshirt
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Panjabi
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Jeans pant
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Wallet
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Shoes
            </li>
            <li
              onClick={handleClick}
              className="option text-[0.9rem] cursor-pointer hover:text-orange-300"
            >
              Belt
            </li>
          </ul>
        </li>
      </ul>
      <div className="mt-5">
        <h3>Price range</h3>
        {priceFilter > 0 && (
          <p>
            {priceFilter}
            <TbCurrencyTaka className="inline-block text-lg mb-1" />
          </p>
        )}
        <input
          type="range"
          min={0}
          max={maxPrice}
          onChange={handlePriceRange}
        />
      </div>
      <button
        className="bg-orange-300 capitalize px-4 py-1 rounded-md"
        onClick={() => dispatch(clearFilter())}
      >
        clear filter
      </button>
    </div>
  );
}

export default SidebarLinks;
