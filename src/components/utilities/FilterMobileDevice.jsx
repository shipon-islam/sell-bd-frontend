import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  filterPriceRange,
  filterSelectPrice,
} from "../../app/feature/getProductSlice";

export default function FilterMobileDevice() {
  const [priceFilter, setPriceFilter] = useState(0);
  const dispatch = useDispatch();
  const { maxPrice } = useSelector((state) => state.productList);

  const handlePriceRange = (e) => {
    setPriceFilter(e.target.value);
    dispatch(filterPriceRange(e.target.value));
  };

  return (
    <div className="py-4">
      <div className="flex justify-between items-center">
        <div className="mt-5">
          <h3>Price range</h3>
          <input
            type="range"
            min={0}
            max={maxPrice}
            onChange={handlePriceRange}
          />
          {priceFilter > 0 && (
            <p>
              {priceFilter}
              <TbCurrencyTaka className="inline-block text-lg mb-1" />
            </p>
          )}
        </div>

        <select
          className="focus:outline-none bg-transparent border-b  "
          onChange={(e) => dispatch(filterSelectPrice(e.target.value))}
        >
          <option>Select price</option>
          <option value="lowestprice">Lowest price</option>
          <option value="highestprice">Hightest price</option>
        </select>
      </div>
      <button
        className="bg-orange-300 capitalize px-4 py-1 rounded-md ml-auto block"
        onClick={() => dispatch(clearFilter())}
      >
        clear filter
      </button>
    </div>
  );
}
