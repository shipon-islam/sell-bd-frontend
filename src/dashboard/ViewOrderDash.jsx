import React, { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import axios from "../axios";
import Layout from "../components/utilities/Layout";
import EmptyItem from "../pages/EmptyItem";
import Navbar from "./Navbar";

export default function ViewOrderDash() {
  const [data, setData] = useState(null);
  const [update, setupdate] = useState(null);
  const fetchGetOrder = async () => {
    try {
      const res = await axios.get(`customer/payment/get/all`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetOrder();
  }, [update]);

  const handleClick = async (_id, status) => {
    const res = await axios.put(`/customer/order/update/${_id}`, { status });
    setupdate(res.data);
  };

  return (
    <Layout>
      <Navbar />
      <div className="mx-auto">
        {data && data.length > 0 ? (
          <>
            {data.map((payment) => (
              <div key={payment._id} className="mt-4 md lg:text-md md:hidden">
                <ul className="border-2 font-montserrat mt-4">
                  <li className="border-b grid grid-cols-[120px,1fr]">
                    <div className="border-r-2 h-full px-2 py-2">Order Id</div>
                    <div className="py-2 pl-2 capitalize text-gray-900 ">
                      {payment.orderId}
                    </div>
                  </li>
                  <li className="border-b  grid grid-cols-[120px,1fr]">
                    <div className="border-r-2 h-full px-2 py-2">Date</div>
                    <div className="py-2 pl-2 capitalize text-gray-900 ">
                      {payment.date}
                    </div>
                  </li>
                  <li className="border-b  grid grid-cols-[120px,1fr] ">
                    <div className="border-r-2 h-full px-2 py-2">Customer</div>
                    <div className="py-2 pl-2 capitalize text-gray-900 ">
                      {payment.customerName}
                    </div>
                  </li>
                  <li className="border-b  grid grid-cols-[120px,1fr]">
                    <div className="border-r-2 h-full px-2 py-2">
                      Order Total
                    </div>
                    <div className="py-2 pl-2 capitalize text-gray-900 ">
                      {payment.totalAmount}
                    </div>
                  </li>
                  <li className="border-b  grid grid-cols-[120px,1fr] ">
                    <div className="border-r-2 h-full px-2 py-2">Status</div>
                    <div className="py-2 pl-2 capitalize text-orange-400 ">
                      {payment.status}
                    </div>
                  </li>
                  <li className=" grid grid-cols-[120px,1fr]">
                    <div className="border-r-2 h-full px-2 py-2">Action</div>
                    <div className="py-2 pl-2 capitalize  text-gray-900 ">
                      <button
                        onClick={() =>
                          handleClick(
                            payment._id,
                            payment.status == "pending"
                              ? "delivered"
                              : "pending"
                          )
                        }
                        className="bg-orange-300 lg:text-lg py-1 px-2 rounded-md lg:text-md md"
                      >
                        {payment.status == "pending" ? "delivered" : "pending"}
                      </button>
                    </div>
                  </li>
                </ul>
                >
              </div>
            ))}

            <div className="mx-auto max-h-[70vh] overflow-auto">
              <table className="table-auto mx-auto hidden md:table whitespace-no-wrap mt-16  font-montserrat">
                <thead>
                  <tr>
                    <th className=" py-4 px-1 sm:px-4 tracking-wider font-normal sm:font-medium text-gray-900 text-sm sm:text-md lg:text-lg bg-orange-100 rounded-tl rounded-bl">
                      Order id
                    </th>

                    <th className=" py-4 px-1 sm:px-4 tracking-wider font-normal sm:font-medium text-gray-900 text-sm sm:text-md lg:text-lg bg-orange-100">
                      Date
                    </th>
                    <th className=" py-4 px-1 sm:px-4  tracking-wider font-normal sm:font-medium text-gray-900  text-sm sm:text-md lg:text-lg bg-orange-100">
                      Customer
                    </th>
                    <th className=" py-4 px-1 sm:px-4 tracking-wider font-normal sm:font-medium text-gray-900 text-sm sm:text-md lg:text-lg bg-orange-100">
                      Order total
                    </th>
                    <th className=" py-4 px-1 sm:px-4 tracking-wider font-normal sm:font-medium text-gray-900 text-sm sm:text-md lg:text-lg bg-orange-100">
                      Status
                    </th>
                    <th className=" py-4 px-1 sm:px-4 tracking-wider font-normal sm:font-medium text-gray-900 text-sm sm:text-md lg:text-lg bg-orange-100">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ele) => (
                    <tr key={ele._id} className="border-b">
                      <td className="py-2 sm:px-4 text-center capitalize lg:text-lg">
                        {ele.orderId}
                      </td>
                      <td className="py-2 sm:px-4 text-center capitalize lg:text-lg">
                        {ele.date}
                      </td>
                      <td className="py-2 sm:px-4 text-center capitalize lg:text-lg">
                        {ele.customerName}
                      </td>
                      <td className="py-2 sm:px-4 text-center capitalize lg:text-lg">
                        {ele.totalAmount}
                        <TbCurrencyTaka className="inline-block text-lg mb-[3px]" />
                      </td>
                      <td className="py-2 sm:px-4 text-center capitalize text-orange-400 lg:text-lg ">
                        {ele.status}
                      </td>
                      <td className="py-2 sm:px-4 text-center">
                        <button
                          onClick={() =>
                            handleClick(
                              ele._id,
                              ele.status == "pending" ? "delivered" : "pending"
                            )
                          }
                          className="bg-orange-300 lg:text-lg py-1 px-2 rounded-md lg:text-md md"
                        >
                          {ele.status == "pending" ? "delivered" : "pending"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <EmptyItem title="order list" />
        )}
      </div>
    </Layout>
  );
}
