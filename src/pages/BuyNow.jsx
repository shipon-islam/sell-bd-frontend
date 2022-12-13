import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../assets/bandlogo.png";
import maestro from "../assets/icon/maestro.png";
import paypal from "../assets/icon/paypal.png";
import visa from "../assets/icon/visa.png";
import axios from "../axios";
import PaymentSuccess from "../components/utilities/PaymentSuccess";
import { paymentSchema } from "../components/YapSchema/Yap";

function BuyNow() {
  const [toggle, setToggle] = useState(false);
  const { _id } = useParams();
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const product = useSelector((state) =>
    state.productList.product.filter((ele) => ele._id === _id)
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  // post payment event
  const onSubmit = async (data) => {
    buttonRef.current.disabled = true;
    setLoadingToggle(true);
    const res = await axios.post("/customer/payment/create", {
      data,
      productList: [_id],
      quantity: 1,
      totalAmount: product[0]?.price,
      deliveryCharge: 50,
    });
    if (res) {
      buttonRef.current.disabled = false;
      setLoading(false);
      setToggle(true);
      formRef.current.reset();
    }
  };

  const handleClick = () => {
    setToggle(false);
  };

  return (
    <div className="py-6">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] rounded-md sm:shadow-2xl sm:shadow-black bg-white py-8 px-6 mx-auto "
      >
        <div className="flex items-center flex-col gap-x-2">
          <img className="w-20 h-auto" src={logo} alt="logo" />
          <h4 className="capitalize font-semibold font-montserrat pb-3 text-slate-700 text-lg ">
            payment details
          </h4>
        </div>
        <hr />
        <div className="flex gap-x-2">
          <div>
            <label htmlFor="first name" className="ml-1">
              First name:
            </label>
            <input
              className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
              placeholder="Enter first name"
              type="text"
              {...register("firstname")}
            />
          </div>
          <div>
            <label htmlFor="lastname" className="ml-1">
              Last name:
            </label>
            <input
              className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
              placeholder="Enter last name"
              type="text"
              {...register("lastname")}
            />
          </div>
        </div>
        <div className="flex gap-x-2">
          <div>
            <label htmlFor="email" className="ml-1">
              Email:
            </label>
            <input
              className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
              placeholder="Enter valid email"
              type="text"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="phone" className="ml-1">
              phone
            </label>
            <input
              className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
              placeholder="Enter phone no-"
              type="text"
              {...register("phone")}
            />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="first name" className="ml-1">
            Address:
          </label>
          <input
            className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
            placeholder="Enter current address"
            type="text"
            {...register("address")}
          />
        </div>
        <div className="grid grid-cols-[3fr,minmax(60px,2fr)] gap-x-2">
          <div className="mt-2">
            <label htmlFor="first name" className="ml-1">
              Country:
            </label>
            <select
              {...register("city")}
              className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
            >
              <option defaultValue="bangladesh">Bangladeh</option>
            </select>
          </div>
          <div className="mt-2">
            <label htmlFor="first name" className="ml-1">
              City:
            </label>
            <select
              {...register("country")}
              className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
            >
              <option value="dhaka">Dhaka</option>
              <option value="mymenshingh">Mymenshingh</option>
              <option value="sylhet">sylhet</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="chittagong">Chittagong</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex justify-between py-3">
            <div>
              <input
                {...register("paymentMethod")}
                value="visa"
                className="w-5 h-5"
                type="radio"
                name="paymentMethod"
              />
              <img className="w-12 inline-block" src={visa} alt="visa" />
            </div>
            <div>
              <input
                {...register("paymentMethod")}
                value="paypal"
                className="w-5 h-5"
                type="radio"
                name="paymentMethod"
              />
              <img className="w-16 inline-block" src={paypal} alt="paypal" />
            </div>
            <div>
              <input
                {...register("paymentMethod")}
                value="maestro"
                className="w-5 h-5"
                type="radio"
                name="paymentMethod"
              />
              <img className="w-12 inline-block" src={maestro} alt="maestro" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[3fr,minmax(60px,2fr)] gap-x-2">
          <input
            className="border-gray-500 border-2 w-full focus:outline-none py-2 pl-2 rounded-md"
            placeholder="1122-4455-6677-8899"
            type="text"
            {...register("cardNumber")}
          />

          <input
            className="border-gray-500 border-2 w-full focus:outline-none py-2  pl-2 rounded-md"
            placeholder="Enter your password"
            type="date"
            {...register("date")}
          />
        </div>
        <button
          ref={buttonRef}
          className=" w-full py-2 font-bold text-md font-montserrat disabled:bg-gray-500/50 disabled:cursor-wait disabled:text-green-900 bg-orange-300  rounded-md mt-4 uppercase"
        >
          <div
            className={`${
              loading ? "flex" : "hidden"
            } justify-center items-center gap-x-2`}
          >
            <span className=" inline-block w-6 h-6 rounded-full border-r-4 border-l-4 border-green-700 animate-spin"></span>
            loading...
          </div>
          <div className={loading ? "hidden" : "block"}>
            Pay {product[0]?.price}
            <TbCurrencyTaka className="-ml-[6px] inline-block text-2xl  mb-[6px]" />
          </div>
        </button>
      </form>
      <div className={toggle ? "block" : "hidden"}>
        <PaymentSuccess handleClick={handleClick} toggle={toggle} />
      </div>
    </div>
  );
}

export default BuyNow;
