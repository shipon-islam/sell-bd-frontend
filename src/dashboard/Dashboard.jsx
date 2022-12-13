import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../app/feature/authSlice";
import Button from "../components/utilities/Button";
import Layout from "../components/utilities/Layout";
import SignupSvg from "../components/utilities/SignupSvg";

import Form from "../components/utilities/Form";
const yapvalidate = {
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
};

const schema = Yup.object(yapvalidate).required(true);

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [type, setType] = useState({
    password: true,
    cpassword: true,
  });
  const { errorMsg } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    dispatch(login({ data, navigate, redirect: "/dashboard/product/list" }));
  };

  const inputClass =
    "outline-none block border-orange-300 border-b-[0.1rem] bg-transparent  py-1  w-full text-lg pl-1 pr-9";

  return (
    <Layout>
      <div className="text-center mt-8">
        <h3 className="text-xl font-montserrat font-bold capitalize text-gray-700">
          Welcome to admin dashboard
        </h3>
        <p className="">Login only allow for admin</p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2  md:grid-rows-2">
        <SignupSvg />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-24">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Admin email"
                {...register("email")}
              />
              <MdOutlineMarkEmailRead className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400" />
            </div>
          </div>
          <div className="mt-8">
            <div className="relative">
              <input
                className={inputClass}
                placeholder="Admin password"
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
              {errorMsg && errorMsg}
            </small>
          </div>
          <Button type="submit" name="login" />
        </Form>
      </div>
    </Layout>
  );
}
