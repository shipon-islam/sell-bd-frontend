import React from "react";
import { useDispatch } from "react-redux";
import { filterCategory } from "../../app/feature/getProductSlice";

export default function CatLinks() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(filterCategory(e.target.innerText));
  };
  return (
    <div className="flex  justify-between w-full py-3">
      <div>
        <h4 className="border-b">Technology</h4>
        <div>
          <button
            onClick={handleClick}
            className=" text-[0.9rem] checked:bg-red-500  block hover:text-orange-300"
          >
            Mobile
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Television
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Fan
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Router
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Monitor
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Mouse
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Keyboard
          </button>
        </div>
      </div>
      <div>
        <h4 className="border-b">Fashion & Lifestyle</h4>
        <div>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Shirt
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Tshirt
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Panjabi
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Shoes
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Belt
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Jeans pant
          </button>
          <button
            onClick={handleClick}
            className=" text-[0.9rem]  block hover:text-orange-300"
          >
            Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
