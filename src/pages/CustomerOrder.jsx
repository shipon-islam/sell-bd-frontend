import React, { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPayment } from "../app/feature/getPaymentSlice";
import Layout from "../components/utilities/Layout";
import PaymentSmDevice from "../components/utilities/PaymentSmDevice";
import WraperSideLinks from "../components/utilities/WraperSideLinks";
import EmptyItem from "./EmptyItem";
import Loading from "./Loading";

export default function CustomerOrder() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(fetchPayment());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <WraperSideLinks page="customer order">
        {data && data.length > 0 ? (
          <div className="mx-auto">
            {data.map((ele) => (
              <div key={ele._id} className="mt-4 md lg:text-md md:hidden">
                <PaymentSmDevice payment={ele} />
              </div>
            ))}

            <div className="mx-auto max-h-[70vh] overflow-auto">
              <table className="table-auto mx-auto hidden md:table whitespace-no-wrap mt-8  font-montserrat">
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
                        <TbCurrencyTaka className="inline-block text-gray-700 text-2xl mb-[3px]" />
                      </td>
                      <td className="py-2 sm:px-4 text-center capitalize text-orange-400 lg:text-lg ">
                        {ele.status}
                      </td>
                      <td className="py-2 sm:px-4 text-center">
                        <Link to={`/product/order/list/view/${ele._id}`}>
                          <button className="bg-orange-300 lg:text-lg py-1 px-2 rounded-md lg:text-md md">
                            view order
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <EmptyItem title="order list" />
        )}
      </WraperSideLinks>
    </Layout>
  );
}
