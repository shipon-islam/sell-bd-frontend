import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "../../axios";

import { changePasswordSchema } from "../YapSchema/Yap";
import Button from "./Button";

export default function ChangePassword({ email, handleChangePasswordToggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [type, setType] = useState({
    oldPassword: true,
    password: true,
    cpassword: true,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append("oldPassword", data.oldPassword);
    formdata.append("newPassword", data.password);
    formdata.append("email", email);
    const res = await axios.put("/user/update", formdata);

    if (res.data.message) {
      return toast.error(res.data.message, { autoClose: 1000 });
    }
    if (res.data && !res.data.message) {
      toast.success("password changed successfull", { autoClose: 700 });
      formRef.current.reset();
    }
  };

  const inputClass =
    "outline-none block border-orange-300 border-b-[0.1rem] bg-transparent  py-1  w-full text-lg pl-1 pr-9";

  return (
    <div className="bg-slate-700/50 w-full h-screen fixed top-0 left-0 z-[20] grid place-content-center">
      <form
        ref={formRef}
        className="bg-white w-[90%] mx-auto max-w-[400px] sm:w-full rounded-md py-8 px-8 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="text-center my-4">
            <h3 className="text-xl uppercase font-semibold font-poppins text-gray-700">
              change your password
            </h3>
            <p className="text-sm capitalize text-orange-400">
              remember password for login
            </p>
          </div>
          <div
            onClick={() => handleChangePasswordToggle()}
            className="absolute -right-2 -top-3 rounded-full cursor-pointer bg-white p-1"
          >
            <AiOutlineClose className="text-xl text-gray-600 hover:text-orange-400" />
          </div>
          <ToastContainer />
        </div>
        <div className="inline">
          <div className="relative">
            <input
              className={inputClass}
              placeholder="Enter your old password"
              {...register("oldPassword")}
              type={type.oldPassword ? "password" : "text"}
            />
            {type.oldPassword ? (
              <FaEye
                onClick={() =>
                  setType({ ...type, oldPassword: !type.oldPassword })
                }
                className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
              />
            ) : (
              <BsEyeSlashFill
                onClick={() =>
                  setType({ ...type, oldPassword: !type.oldPassword })
                }
                className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
              />
            )}
          </div>
          <small className="font-montserrat ml-2">
            {errors.oldPassword && errors.oldPassword.message}
          </small>
        </div>
        <div className="inline">
          <div className="relative">
            <input
              className={inputClass}
              placeholder="Enter new your password"
              type={type.password ? "password" : "text"}
              {...register("password")}
            />
            {type.password ? (
              <FaEye
                onClick={() => setType({ ...type, password: !type.password })}
                className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
              />
            ) : (
              <BsEyeSlashFill
                onClick={() => setType({ ...type, password: !type.password })}
                className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
              />
            )}
          </div>
          <small className="font-montserrat ml-2">
            {errors.password && errors.password.message}
          </small>
        </div>

        <div className="inline">
          <div className="relative">
            <input
              className={inputClass}
              placeholder="Enter your new confirm password"
              {...register("cpassword")}
              type={type.cpassword ? "password" : "text"}
            />
            {type.cpassword ? (
              <FaEye
                onClick={() => setType({ ...type, cpassword: !type.cpassword })}
                className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
              />
            ) : (
              <BsEyeSlashFill
                onClick={() => setType({ ...type, cpassword: !type.cpassword })}
                className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
              />
            )}
          </div>
          <small className="font-montserrat ml-2">
            {errors.cpassword && errors.cpassword.message}
          </small>
        </div>

        <div className="">
          <Button type="submit" name="change password" />
        </div>
      </form>
    </div>
  );
}
