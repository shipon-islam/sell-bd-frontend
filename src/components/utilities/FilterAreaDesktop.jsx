import React, { useRef } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { filterSelectPrice } from "../../app/feature/getProductSlice";
import { layoutArea } from "../../app/feature/togglerSlice";

export default function FilterAreaDesktop() {
  const layoutRef = useRef(null);
  const { catToggle, filterToggle, layoutToggle } = useSelector(
    (state) => state.toggler
  );
  const { filterProduct } = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="hidden md:flex justify-between items-center">
        <div className=" flex gap-2">
          <BsFillGrid3X3GapFill
            className={
              layoutToggle
                ? "cursor-pointer text-orange-300"
                : "cursor-pointer text-gray-600"
            }
            onClick={() => {
              !layoutToggle && dispatch(layoutArea());
            }}
          />
          <AiOutlineBars
            className={
              !layoutToggle
                ? "cursor-pointer text-orange-300"
                : "cursor-pointer text-gray-600"
            }
            onClick={() => {
              layoutToggle && dispatch(layoutArea());
            }}
          />
        </div>
        <div>Found {filterProduct.length}</div>
        <select
          className="focus:outline-none bg-transparent border-b  "
          onChange={(e) => dispatch(filterSelectPrice(e.target.value))}
        >
          <option>Select price</option>
          <option value="lowestprice">Lowest price</option>
          <option value="highestprice">Hightest price</option>
        </select>
      </div>
    </div>
  );
}
