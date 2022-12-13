import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import {
  RiContactsBookFill,
  RiHealthBookFill,
  RiLogoutBoxLine,
  RiSearchLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/feature/authSlice";
import { filterSearch } from "../../app/feature/getProductSlice";
import logo from "../../assets/bandlogo.png";

export default function TopNav() {
  const [toggleInfo, setToggleInfo] = useState(false);
  const [isUserExist, setisUserExist] = useState({});
  const [toggleSearch, setToggleSearch] = useState(false);
  const { product } = useSelector((state) => state.cardList);
  const { searchProduct } = useSelector((state) => state.productList);
  const { user } = useSelector((state) => state.auth);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(filterSearch(searchValue));

    if (searchValue) {
      navigate(`product/search?result=${searchValue}`);
      setSearchValue("");
    }
  };

  const handleSearchButton = () => {
    setToggleSearch(true);
  };
  useEffect(() => {
    setisUserExist(user);
  }, [user]);
  const handleClose = () => {
    setToggleInfo(false);
  };

  return (
    <div className="py-3 mx-8 md:mx-16 lg:mx-24 ">
      <div className="flex justify-between items-center">
        <div className="w-24 sm:w-32">
          <img className="w-full h-auto" src={logo} alt="logo" />
        </div>

        <div
          className={`${
            toggleSearch ? "block absolute -right-9 z-10 sm:static" : "hidden"
          } sm:block`}
        >
          <div className="relative w-[80%] sm:w-full">
            <input
              ref={inputRef}
              className="focus:outline-none
            border-2 w-full lg:w-[32rem] bg-white border-gray-400 px-3 rounded-md py-2"
              type="search"
              placeholder="I'am looking for?"
              value={searchValue}
              onMouseLeave={() => setToggleSearch(false)}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="bg-orange-300 absolute  right-[2.5px] rounded-r-[4px] h-[86%] top-[3px] px-3"
            >
              <RiSearchLine className="text-gray-800 text-2xl cursor-pointer" />
            </button>
          </div>
        </div>

        <div>
          <FaSearch
            onClick={handleSearchButton}
            className="sm:hidden cursor-pointer text-gray-700 text-3xl inline-block"
          />
          <Link to="/product/card" className="inline mx-6 md:mr-8 relative">
            <FaShoppingCart className="text-3xl inline text-gray-800  " />
            <div className="text-[0.7rem] px-1 -right-1 absolute rounded-full bg-orange-300  -top-2  font-bold text-gray-800">
              {product.length}
            </div>
          </Link>
          <FaUserCircle
            className="text-3xl cursor-pointer text-gray-800 inline"
            onClick={() => setToggleInfo(true)}
          />
          <div
            className={
              toggleInfo
                ? "bg-white z-10 w-3/4 md:w-1/3 top-0 h-screen fixed right-0 "
                : "hidden"
            }
          >
            <ul className="px-10 mt-12">
              <li className="text-xl capitalize mt-6">
                <FaUserCircle className="inline-block mr-1 mb-1" />
                {isUserExist ? isUserExist?.username : "unknown user"}
              </li>
              <li
                onClick={handleClose}
                className="text-xl cursor-pointer capitalize mt-6"
              >
                <RiContactsBookFill className="inline-block mr-1 mb-1 " />
                <Link to="/profile">my account</Link>
              </li>

              <li
                onClick={handleClose}
                className=" cursor-pointer text-xl capitalize mt-6 "
              >
                <RiHealthBookFill className="inline-block mr-1 mb-1" />
                <Link to="product/order/list">my order</Link>
              </li>

              <li className="text-xl capitalize  mt-6">
                <BsHeartFill className="inline-block mr-1 mb-1" />
                <Link onClick={handleClose} to="/product/wishlist">
                  my wishlist
                </Link>
              </li>
              <li className="text-xl capitalize mt-6">
                <GiShoppingBag className="inline-block mr-1 mb-1" />
                <Link onClick={handleClose} to="/product/card">
                  my card
                </Link>
              </li>
              {isUserExist ? (
                <li
                  className="text-xl capitalize mt-6 cursor-pointer"
                  onClick={() => {
                    dispatch(logout(navigate));
                    handleClose();
                  }}
                >
                  <RiLogoutBoxLine className="inline-block mr-1 mb-1" />
                  logout
                </li>
              ) : (
                <li className="text-xl capitalize mt-6">
                  <BiLogIn className="inline-block mr-1 mb-1" />
                  <Link onClick={handleClose} to="/login">
                    login
                  </Link>
                </li>
              )}
            </ul>
            <button
              className="absolute top-10 right-8"
              onClick={() => setToggleInfo(false)}
            >
              <AiOutlineClose className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
