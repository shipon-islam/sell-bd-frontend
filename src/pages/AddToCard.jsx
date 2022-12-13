import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { TbCurrencyTaka, TbMinus, TbPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import {
  decreament,
  increament,
  removecard,
  total,
} from "../app/feature/cardSlice";
import Layout from "../components/utilities/Layout";

function AddToCard() {
  const dispatch = useDispatch();
  const { product, subtotal, totalAmount, deliveryCharge } = useSelector(
    (state) => state.cardList
  );
  useEffect(() => {
    dispatch(total());
  }, [product]);

  const handleAlert = () => {
    if (totalAmount <= 50) {
      toast.warn("Add product then try !", {
        autoClose: 800,
      });
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="grid lg:grid-cols-[2fr_minmax(340px,1fr)]  grid-cols-1 gap-x-6 mt-16">
        <section className="text-gray-600">
          <div className="mx-auto max-h-[70vh] overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100 rounded-tl rounded-bl">
                    Product
                  </th>

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 hidden md:block text-sm bg-orange-100">
                    Price
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100">
                    Subtotal
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-orange-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {product.length > 0 &&
                  product.map((ele) => {
                    const {
                      _id,
                      price,
                      image,
                      name,
                      title,
                      quantity,
                      subtotal,
                      subcategory,
                    } = ele;
                    return (
                      <tr key={_id} className="border-b">
                        <td className="">
                          <div className="flex flex-col-reverse md:flex-row items-center">
                            <img
                              className="md:max-w-[150px] max-w-[110px] h-auto"
                              src={image[0]}
                              alt="card"
                            />
                            <small className="text-[1rem] md:text-lg w-fit pl-4 capitalize">
                              {name}
                            </small>
                          </div>
                          <div className="px-4 md:hidden text-center text-md py-3 text-gray-600  ">
                            <TbCurrencyTaka className="text-xl text-gray-500 inline-block relative bottom-1" />
                            {price}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex bg-gray-200/50 w-fit rounded-sm px-[2px]">
                            <button onClick={() => dispatch(decreament(_id))}>
                              <TbMinus className="text-xl hover:text-orange-400 " />
                            </button>
                            <p className="px-2 md:px-4 text-gray-500 font">
                              {quantity}
                            </p>

                            <button onClick={() => dispatch(increament(_id))}>
                              <TbPlus className="text-xl hover:text-orange-400 " />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 hidden md:table-cell text-md py-3 text-gray-600  ">
                          <TbCurrencyTaka className="text-xl text-gray-500 inline-block relative bottom-1" />
                          {price}
                        </td>
                        <td className="px-4 relative py-3 text-md text-gray-600 ">
                          <AiOutlineClose className="text-lg absolute text-gray-500 top-4 right-6 hover:text-red-500 cursor-pointer md:hidden" />
                          <TbCurrencyTaka className="text-xl text-gray-500 inline-block relative bottom-1" />
                          {subtotal}
                        </td>
                        <td className="w-10 text-center hidden md:table-cell">
                          <button onClick={() => dispatch(removecard(_id))}>
                            <AiOutlineClose className="text-lg text-gray-500 hover:text-red-500" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {product.length <= 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-full sm:w-[60%] mx-auto h-auto"
                fill="none"
                viewBox="0 0 896 748"
              >
                <g clipPath="url(#clip0_157_76)">
                  <path
                    fill="#2F2E41"
                    d="M41.634 712.738c12.428 23.049 38.806 32.943 38.806 32.943s6.227-27.475-6.201-50.524c-12.429-23.049-38.806-32.944-38.806-32.944s-6.227 27.476 6.201 50.525z"
                  ></path>
                  <path
                    fill="#F9A826"
                    d="M50.176 705.155c22.439 13.5 31.08 40.314 31.08 40.314s-27.737 4.927-50.176-8.573C8.642 723.396 0 696.582 0 696.582s27.738-4.927 50.176 8.573z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M553.249 35.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M515.249 37.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M454.249 37.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M624.249 131.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M524.249 113.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M585.249 113.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M810.249 176.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M710.249 158.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M771.249 158.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M796.249 640.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M696.249 622.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M757.249 622.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M557.249 319.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M457.249 301.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M518.249 301.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M601.249 560.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M501.249 542.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M562.249 542.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M825.249 487.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M725.249 469.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M786.249 469.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M362.06 702.184H125.274v-1.703h235.082v-82.62H145.18l-10.453-21.777 1.536-.737 9.989 20.81H362.06v86.027z"
                  ></path>
                  <path
                    fill="#3F3D56"
                    d="M156.789 743.92c9.878 0 17.886-8.008 17.886-17.887 0-9.879-8.008-17.887-17.886-17.887-9.879 0-17.887 8.008-17.887 17.887 0 9.879 8.008 17.887 17.887 17.887z"
                  ></path>
                  <path
                    fill="#3F3D56"
                    d="M333.101 743.92c9.878 0 17.886-8.008 17.886-17.887 0-9.879-8.008-17.887-17.886-17.887-9.879 0-17.887 8.008-17.887 17.887 0 9.879 8.008 17.887 17.887 17.887z"
                  ></path>
                  <path
                    fill="#3F3D56"
                    d="M540.927 357.226c6.116 0 11.073-4.958 11.073-11.073s-4.957-11.073-11.073-11.073c-6.115 0-11.073 4.958-11.073 11.073s4.958 11.073 11.073 11.073z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M387.385 589.753H121.237L63.648 401.517h383.045l-.349 1.107-58.959 187.129zm-264.888-1.703h263.639l58.234-184.83H65.95l56.547 184.83z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M366.61 579.958H132.842L82.26 413.015h336.441l-.306.983-51.785 165.96z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M451.465 384.7l-1.647-.437 11.241-42.369h65.389v1.704H462.37L451.465 384.7z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M427.551 458.584H82.258v1.703h345.293v-1.703z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M407.778 521.344H101.459v1.703h306.319v-1.703z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M256.017 402.368h-1.703v186.533h1.703V402.368z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M332.286 402.315l-12.228 186.528 1.7.112 12.228-186.529-1.7-.111z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M178.081 402.313l-1.701.111 12.158 186.533 1.7-.111-12.157-186.533z"
                  ></path>
                  <path fill="#2F2E41" d="M896 745H0v2h896v-2z"></path>
                  <path
                    fill="#A0616A"
                    d="M595.411 61.876s14.618 41.606 5.622 48.007c-8.996 6.401 30.361 58.676 30.361 58.676l47.229-12.802-25.863-43.74s-3.374-43.74-3.374-50.141c0-6.401-53.975 0-53.975 0z"
                  ></path>
                  <path
                    fill="#000"
                    d="M595.411 61.876s14.618 41.606 5.622 48.007c-8.996 6.401 30.361 58.676 30.361 58.676l47.229-12.802-25.863-43.74s-3.374-43.74-3.374-50.141c0-6.401-53.975 0-53.975 0z"
                    opacity="0.1"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M570.874 358.454s-4.268 53.341 0 81.079c4.267 27.737 10.668 104.549 10.668 104.549s0 145.089 23.47 147.222c23.47 2.134 40.54 4.268 42.673-4.267 2.134-8.535-10.668-12.802-4.267-17.069 6.401-4.268 8.535-19.203 0-36.272-8.535-17.07 0-189.896 0-189.896l40.539 108.817s4.268 89.613 8.535 102.415c4.267 12.802-4.267 36.272 10.668 38.406 14.936 2.134 32.005-10.668 40.54-14.936 8.534-4.267-12.802-4.267-8.535-6.401 4.267-2.133 17.069-8.534 12.802-10.668-4.267-2.134-8.535-104.549-8.535-104.549s-11.735-218.7-26.67-227.234c-14.936-8.535-24.537 6.166-24.537 6.166l-117.351 22.638z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M609.279 682.77v17.069s-19.202 46.399 0 46.399c19.203 0 34.139 4.808 34.139-1.592v-57.609l-34.139-4.267z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M735.165 682.739v17.069s19.203 46.4 0 46.4-34.138 4.808-34.138-1.593v-57.608l34.138-4.268z"
                  ></path>
                  <path
                    fill="#A0616A"
                    d="M625.282 92.814c21.211 0 38.406-17.195 38.406-38.406 0-21.21-17.195-38.406-38.406-38.406s-38.406 17.195-38.406 38.406 17.195 38.406 38.406 38.406z"
                  ></path>
                  <path
                    fill="#F9A826"
                    d="M613.547 125.886s10.668 32.004 27.737 25.603l17.069-6.401 29.872 204.831s-23.471 34.139-57.609 12.802c-34.139-21.336-17.069-236.835-17.069-236.835z"
                  ></path>
                  <path
                    fill="#3F3D56"
                    d="M643.418 119.485l9.601-20.27s56.542 26.671 65.077 35.205c8.535 8.535 8.534 21.337 8.534 21.337l-14.935 53.341s4.267 117.351 4.267 121.619c0 4.267 14.936 27.737 4.268 19.202-10.669-8.534-12.802-17.069-21.337-4.267s-27.737 27.738-27.737 27.738l-27.738-253.905z"
                  ></path>
                  <path
                    fill="#A0616A"
                    d="M718.096 273.108l-6.401 59.742s-38.406 34.139-29.871 36.272c8.534 2.134 12.802-6.401 12.802-6.401s14.935 14.936 23.47 6.401c8.534-8.534 29.871-89.613 29.871-89.613l-29.871-6.401z"
                  ></path>
                  <path
                    fill="#2F2E41"
                    d="M626.1.13c-8.514-.304-17.626-.455-24.804 4.133a36.301 36.301 0 00-8.572 8.392c-6.992 8.838-13.033 19.959-10.436 30.925l3.016-1.176c0 2.927-.65 5.817-1.905 8.462.425-1.235 1.847.762 1.467 2.011l-3.323 10.9c5.462-2.002 12.257 2.053 13.088 7.81.38-12.66 1.693-27.18 11.964-34.593 5.18-3.739 11.735-4.88 18.042-5.893 5.818-.935 11.918-1.827 17.491.088 5.572 1.916 10.318 7.615 9.055 13.371 2.569-.885 5.443.906 6.713 3.309 1.27 2.403 1.337 5.237 1.375 7.955 2.739 1.936 5.856-1.908 6.973-5.071 2.62-7.425 4.949-15.328 3.538-23.073-1.412-7.746-7.724-15.148-15.597-15.174a5.464 5.464 0 001.422-3.849l-6.489-.548a7.17 7.17 0 004.285-2.26C650.798 8.716 630.313.28 626.1.13z"
                  ></path>
                  <path
                    fill="#3F3D56"
                    d="M624.215 113.084s-17.369-17.021-23.62-15.978c-6.251 1.042-14.786 15.978-14.786 15.978s-51.207 17.069-49.074 34.138c2.134 17.069 25.604 100.282 25.604 100.282s19.203 100.282 2.134 110.95c-17.069 10.668 81.079 38.406 83.212 25.604 2.134-12.802 6.401-140.821 0-160.024-6.401-19.203-23.47-110.95-23.47-110.95z"
                  ></path>
                  <path
                    fill="#3F3D56"
                    d="M698.893 147.222h26.383s18.424 81.079 20.557 89.614c2.134 8.534 6.401 49.074 4.268 49.074-2.134 0-44.807-8.535-44.807-2.134l-6.401-136.554z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M698 348H597c-9.856-45.34-10.68-89.146 0-131h101c-16.299 41.101-17.318 84.607 0 131z"
                  ></path>
                  <path
                    fill="#A0616A"
                    d="M555.938 292.311l29.871 12.802s57.609 8.534 57.609-14.936-57.609-10.668-57.609-10.668l-19.204-6.14-10.667 18.942z"
                  ></path>
                  <path
                    fill="#3F3D56"
                    d="M562.339 134.42l-25.604 6.401-19.203 113.084s-6.401 29.871 4.268 32.005c10.668 2.133 40.539 19.203 40.539 19.203s4.267-32.005 12.802-32.005l-21.337-17.069 12.802-74.678-4.267-46.941z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M200.249 352.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M100.249 334.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M161.249 334.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M249.249 56.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M211.249 58.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M150.249 58.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M390.249 253.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M352.249 255.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M291.249 255.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M152.249 252.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M114.249 254.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M53.248 254.408h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M320.249 152.908h-140v2h140v-2z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M220.249 134.908h-2v18.5h2v-18.5z"
                  ></path>
                  <path
                    fill="#F2F2F2"
                    d="M281.249 134.908h-2v18.5h2v-18.5z"
                  ></path>
                  <g filter="url(#filter0_d_157_76)">
                    <path
                      fill="#F9A826"
                      d="M274.914 344.948c.348-.261.611-.427.788-.497a.45.45 0 01.542-.03l.419 1.835c-.011.333-.112.701-.301 1.104-.161.372-.323.713-.487 1.024a64.213 64.213 0 01-2.034 2.561 118.38 118.38 0 00-2.332 2.894l-2.508 2.994a964.77 964.77 0 00-2.337 2.804l3.72 3.329c1.173.993 2.137 1.77 2.894 2.333.584-.909 1.202-2.016 1.855-3.321a120.62 120.62 0 002.029-4.283c.7-1.549 1.41-3.175 2.132-4.877a144.115 144.115 0 002.031-5.053c.239-.588.482-1.115.728-1.582l.728-1.581a.907.907 0 01.244.304l.015.271c.169.323.263.665.283 1.027a8.951 8.951 0 01-.083.956c-.015.273-.032.516-.05.728-.015.273.048.587.188.941.169.323.208.759.118 1.308-.578 3.205-1.392 6.227-2.443 9.065a95.955 95.955 0 01-3.734 8.682c-.325.683-.693 1.127-1.104 1.331-.38.232-.908.247-1.584.042a3.1 3.1 0 00-.834-.316c-.244-.047-.65-.009-1.217.113-.27.045-.548-.06-.834-.317a15.014 15.014 0 00-1.044-.848 70.634 70.634 0 01-2.894-2.332 188.094 188.094 0 01-3.487-3.206l-1.109 1.24a7.098 7.098 0 01-.65.534c-.178.071-.508.119-.99.146-.222-.199-.323-.375-.301-.527a1.27 1.27 0 00.013-.59 2.509 2.509 0 00-.216-.623 1.034 1.034 0 01.008-.68c.11-.188.249-.407.416-.658.196-.283.405-.611.626-.986a176.447 176.447 0 00-3.402-3.302 550.859 550.859 0 01-3.12-3.135l-.597.667c-.342.382-.615.624-.821.726a3.762 3.762 0 01-.495.073 3.182 3.182 0 01-.366-.071c-.124-.053-.273-.015-.447.116-.259.226-.421.31-.484.253-.064-.057-.185-.05-.362.02-.209.042-.278-.105-.206-.442.101-.368.074-.85-.08-1.446-.023-.421-.084-.705-.183-.851-.07-.177-.029-.512.125-1.004.126-.46.571-1.149 1.336-2.068a43.719 43.719 0 012.737-2.962 55.612 55.612 0 013.268-3.173c1.148-1.091 2.172-1.978 3.071-2.663a10.53 10.53 0 011.714-.956 6.654 6.654 0 011.735-.595c.095.086.088.222-.023.409-.114.128-.167.251-.16.372a3.445 3.445 0 01-.103.595 1.42 1.42 0 00-.156.462c-.05.184-.116.354-.198.509a27.02 27.02 0 01-1.022 2.006 30.546 30.546 0 01-1.426 2.073 54.351 54.351 0 01-1.991 2.513l-2.774 3.1c.893.857 1.882 1.799 2.967 2.827l3.433 3.073a130.818 130.818 0 014.143-5.397c1.551-1.99 3.037-3.81 4.456-5.46a2.976 2.976 0 011.135-.788 2.838 2.838 0 001.092-.74zm38.522-16.367a1.93 1.93 0 01-.961-.173c-.248-.108-.632-.222-1.152-.344-.549-.091-1-.323-1.353-.696-.385-.402-.889-.766-1.511-1.094-.343-.193-.759-.336-1.248-.43-.489-.094-.86-.254-1.114-.482a3079.37 3079.37 0 00-6.037-5.059 237.692 237.692 0 00-6.594-5.299c.05.903.151 1.91.303 3.019a40.61 40.61 0 00.585 3.186c.241 1.074.51 2.117.808 3.128.266.982.557 1.873.873 2.671.211.532.316 1.055.314 1.569a17.43 17.43 0 01-.063 1.318c-.015.273-.002.514.04.723.07.177.003.317-.203.419-1.229.733-2.628 1.113-4.198 1.139a77.976 77.976 0 01-4.671-.058 31.246 31.246 0 00-4.391.108c-1.414.108-2.565.595-3.454 1.46.894.857 1.897 1.784 3.01 2.78 1.141.964 2.314 1.956 3.519 2.977l3.614 3.063a116.87 116.87 0 003.324 2.716l2.337 2.092c-.727-.021-1.322-.124-1.785-.309a31.18 31.18 0 00-1.715-.676 13.98 13.98 0 00-1.375-.286c-.581-.119-1.043-.275-1.386-.467-1.461-.735-2.948-1.665-4.46-2.789a63.852 63.852 0 01-4.368-3.565 104.148 104.148 0 01-3.873-3.638 166.175 166.175 0 01-2.929-2.965 1.431 1.431 0 01-.254-.485.608.608 0 01.151-.552c.114-.127.167-.251.161-.371a.805.805 0 01.113-.414c.199-.223.454-.252.765-.088.34.132.846.27 1.519.414.492.154.8.258.924.311.123.054.357.177.7.369.86-.833 1.915-1.435 3.163-1.807a14.683 14.683 0 013.951-.672 25.02 25.02 0 014.039.093 55.74 55.74 0 013.374.357 50.281 50.281 0 01-1.054-4.293 57.592 57.592 0 01-.607-4.408 49.715 49.715 0 01-.321-4.152 554.798 554.798 0 01-.11-3.62l.173-.961c-.127-.114-.159-.429-.098-.947-.006-.12-.114-.159-.323-.118-.181.01-.259-.031-.234-.123.082-.155.196-.282.342-.381a.43.43 0 01.399-.158c1.31.199 2.523.54 3.637 1.022 1.083.453 2.14.999 3.173 1.637a178.169 178.169 0 016.27 5.182 93.04 93.04 0 015.728 5.211c.802.832 1.587 1.65 2.357 2.453.77.803 1.495 1.624 2.176 2.463zm-.708-39.996c2.404 1.407 4.408 3.2 6.009 5.377 1.569 2.149 2.624 4.553 3.165 7.212.457 1.154.483 2.179.08 3.078-.404.899-.975 1.761-1.715 2.588-.171.191-.397.475-.678.854a8.881 8.881 0 00-.886 1.182c-.281.378-.546.77-.796 1.177-.253.346-.433.643-.54.891l3.605 2.882c.318.285.623.615.916.992.293.376.554.725.783 1.044.325.405.628.706.911.902.315.224.635.538.959.943.325.405.665.825 1.022 1.258.385.402.8.802 1.245 1.2-1.006-.155-2.208-.572-3.605-1.25a51.845 51.845 0 01-4.393-2.385 108.831 108.831 0 01-4.756-3.226 362.546 362.546 0 01-4.629-3.37 346.88 346.88 0 01-3.981-3.133 223.34 223.34 0 00-2.899-2.423 16.627 16.627 0 00-.668 2.666c-.159.946-.306 1.845-.44 2.699-.015.273-.156.462-.422.567a.581.581 0 00-.426.477c.013.241-.037.425-.151.552a.68.68 0 01-.352.201 2.064 2.064 0 01-.404.068c-.152-.022-.257-.001-.313.063-.248-.108-.39-.205-.425-.294a1.431 1.431 0 00-.291-.347c-.162-.202-.309-.39-.439-.564a.79.79 0 01-.264-.666c.181-3.273.644-6.094 1.389-8.462.713-2.396 1.535-4.466 2.466-6.21.952-1.896 2.079-3.379 3.379-4.448 1.269-1.098 3-1.753 5.194-1.965.408-.264.808-.423 1.198-.474.386-.112.77.002 1.152.344zm-1.138 3.19c-.79-.077-1.55.101-2.282.535-.731.433-1.422 1.045-2.073 1.837-.651.791-1.235 1.7-1.753 2.726-.52.966-.949 1.956-1.285 2.972l2.146 1.921 2.671 2.39c.95.793 1.917 1.6 2.899 2.422.979.762 1.894 1.466 2.746 2.114.268-.619.608-1.288 1.022-2.005.41-.779.79-1.555 1.14-2.33.346-.835.602-1.665.768-2.49a4.977 4.977 0 00-.098-2.578 28.03 28.03 0 00-.971-1.986 18.83 18.83 0 00-1.4-2.37 11.933 11.933 0 00-1.742-1.988c-.608-.601-1.204-.991-1.788-1.17zm23.927-27.216c.272.015.419.203.439.565l-.056.637c-.142.159-.194.313-.155.462.035.089.013.241-.065.457a3.494 3.494 0 00-.184.781c-.022.152-.2.479-.535.981-1.069.875-2.143 1.947-3.221 3.216-1.109 1.24-2.002 2.301-2.678 3.185a54.334 54.334 0 014.829 3.721 110.505 110.505 0 014.822 4.401 158.906 158.906 0 014.646 4.501 153.532 153.532 0 004.446 4.15l.81.725a17.82 17.82 0 01-2.106-1.197 7.689 7.689 0 01-.748-.412 10.41 10.41 0 00-.7-.369c-2.974-1.86-5.891-4.07-8.753-6.631a87.123 87.123 0 01-7.876-7.993 244.208 244.208 0 00-3.884 5.972 46.8 46.8 0 00-3.242 6.117c-.107.248-.23.481-.369.7a6.01 6.01 0 00-.326.653c-.301.017-.541.06-.718.13-.178.071-.408.008-.69-.188-.407-.249-.592-.587-.555-1.012.005-.453-.006-.921-.033-1.403.054-.124.031-.258-.067-.404l-.297-.437a3.492 3.492 0 00-.205-.442c-.099-.145-.122-.28-.068-.404a45.287 45.287 0 013.108-6.064 47.597 47.597 0 014.037-5.663 41.178 41.178 0 014.848-4.938 29.232 29.232 0 015.546-3.797zm16.12-25.788c.216.079.373.191.472.336.096.086.221.169.377.251.311.164.546.318.705.46.187.11.348.283.482.517 1.021 2.059 1.819 4.462 2.394 7.21.604 2.716 1.17 6.114 1.699 10.194.512.516 1.199 1.188 2.061 2.016l2.813 2.518a71.063 71.063 0 003.223 2.541 30.779 30.779 0 003.198 2.089c.216.078.372.16.467.246l.382.341c.19.171.291.347.301.527.042.21.114.417.216.623.14.355.355.69.645 1.007.289.316.487.607.592.873.141.355.248.651.321.889.102.206.158.399.168.58-1.278-.171-2.632-.61-4.061-1.316a34.269 34.269 0 01-4.084-2.538 44.612 44.612 0 01-3.615-3.063c-1.119-1.116-2.007-2.14-2.663-3.07-1.616.271-3.24.421-4.87.451-1.633-.03-3.252-.076-4.857-.138a63.41 63.41 0 00-4.714-.011 18.845 18.845 0 00-4.504.522.84.84 0 01-.542.03 7.423 7.423 0 00-.6-.193c-.46-.126-.775-.35-.944-.673l-.201-.352a.817.817 0 01-.158-.399l.522-.391c.867-.713 2.079-1.203 3.635-1.471a28.62 28.62 0 014.828-.404c1.69-.033 3.309.013 4.857.139 1.545.065 2.74.105 3.587.118-.12-1.081-.282-2.371-.486-3.871a331.66 331.66 0 00-.665-4.631 320.667 320.667 0 00-.775-4.988 93.646 93.646 0 00-.899-4.755l-.472-1.968c.079-.216.239-.331.48-.344.241-.013.469.019.685.098z"
                    ></path>
                  </g>
                  <path
                    fill="#F9A826"
                    d="M163.852 358.028c-.682-2.433-.678-5.204.011-8.312.543-2.468 1.799-4.744 3.768-6.828a16.915 16.915 0 014.815-3.567c1.789-.924 3.556-1.41 5.299-1.46.613-.017 1.236-.07 1.87-.159 1.011-.099 1.623-.14 1.836-.123 2.429.002 4.418.735 5.969 2.2 1.212 1.145 2.081 2.7 2.609 4.666.71 2.597 1.18 5.036 1.41 7.317.23 2.28.152 4.523-.233 6.726-.648 3.745-1.968 6.671-3.96 8.779a11.506 11.506 0 01-2.003 1.683c-2.452 1.674-5.047 2.455-7.786 2.344-2.762-.134-5.113-1.116-7.051-2.948-1.478-1.396-2.567-3.204-3.267-5.424-.075-.163-.105-.375-.089-.635.039-.284.068-.508.087-.674l1.19-.458 1.155-.422c1.122-.362 1.919-.526 2.391-.493.496.01.986.244 1.47.701.339.321.765.792 1.278 1.414.195.23.499.54.911.929.896.847 2.078 1.757 3.544 2.729.409.295.825.413 1.248.354.445-.084.851-.319 1.218-.707.183-.194.319-.363.41-.507.857-1.344 1.519-2.554 1.983-3.628a9.1 9.1 0 00.786-3.454c.103-2.195.093-4.199-.029-6.012a26.935 26.935 0 00-.894-5.315c-.34-1.193-.874-2.133-1.601-2.819a5.82 5.82 0 00-2.158-1.283c-.834-.283-1.854-.513-3.062-.691-1.964-.251-3.587.302-4.869 1.659a7.471 7.471 0 00-1.19 1.696c-.112.216-.59 1.231-1.434 3.047-.089.192-.189.395-.301.61-.089.191-.189.395-.301.61l-2.715 5.277c-.334.693-.882 1.734-1.644 3.123l-.671.055zm42.165-27.885c-.266.62-.536 1.076-.81 1.367-.504.533-1.166.87-1.988 1.011-.798.117-1.661.036-2.589-.244l.308-1.636c.323-1.896.542-3.317.657-4.263.308-3.239.485-6.145.53-8.716.034-.473-.117-1.211-.452-2.216l-.392-1.333-.945.346c-.093.049-.313.162-.662.337-.35.128-.618.265-.802.412a256.289 256.289 0 00-7.277 6.538c-.851.755-.907 1.711-.166 2.869l11.254 16.41a48.202 48.202 0 001.548 2.22c.442.6.81 1.109 1.105 1.525l1.326 1.872c.296.463.463.918.499 1.365.012.424-.164.854-.529 1.289l-.41.506c-.435.461-.853.685-1.255.673-.378-.037-.834-.33-1.369-.881l-1.385-1.446c-2.722-2.847-4.694-5.054-5.918-6.623a69.898 69.898 0 01-2.869-3.88 251.487 251.487 0 01-1.922-2.916c-1.085-1.667-1.922-2.917-2.512-3.749l-2.112 1.581c-.905-.304-1.588-.674-2.048-1.109-.775-.732-1.219-1.84-1.332-3.322a8.45 8.45 0 01.299-3.157 9.949 9.949 0 011.333-2.867c.909-1.205 1.764-2.231 2.566-3.079 3.136-3.32 7.02-6.024 11.653-8.113.559-.251 1.215-.412 1.967-.48a129.13 129.13 0 001.41-.182c1.692-.189 2.975.128 3.847.952.581.55 1.052 1.338 1.411 2.365.229.583.392 1.357.491 2.321.342 4.588-.478 9.339-2.46 14.253zm25.149-.847c.17.161.342.415.517.764.175.348.336.639.484.87-1.331.439-2.496.531-3.493.276-.951-.256-1.909-.794-2.876-1.616-4.349-3.696-8.061-8.189-11.135-13.477l-1.858-3.131a1194.576 1194.576 0 01-2.971-5.009l-4.47.799c-.289-1.053-.304-2.007-.046-2.863a9.856 9.856 0 011.031-2.329c.427-.743.73-1.258.911-1.546a27.902 27.902 0 014.393-5.961c1.421-1.455 3.055-2.846 4.904-4.172 2.172-1.57 4.858-2.059 8.058-1.467a3.103 3.103 0 011.434.667c.604.525.982 1.387 1.134 2.585.122.987.096 2.131-.079 3.433-.644 4.711-2.493 9.774-5.546 15.19-.539.958-.967 1.654-1.285 2.088-.658.891-.62 1.821.115 2.791.735.969 1.346 1.73 1.833 2.282a275.26 275.26 0 005.573 6.916 4.2 4.2 0 00.511.551c.46.435.943.822 1.448 1.162.627.5 1.098.9 1.413 1.197zm-13.74-18.001c.523-.699 1.128-2.237 1.815-4.615a76.23 76.23 0 001.705-7.193c.473-2.442.626-4.109.459-5l-.84.307a13.197 13.197 0 00-3.462 2.645 26.398 26.398 0 00-1.917 2.247l-.648.832c-.751.941-1.198 1.826-1.339 2.656-.143.782.129 1.635.815 2.558.123.162.236.43.341.804.128.35.253.606.376.768.196.277.445.742.747 1.393.429 1.002.874 1.72 1.334 2.155.122.115.326.262.614.443zm15.494-41.592c.814-.376 1.439-.359 1.876.053.436.412.707 1.242.813 2.488-.276.244-.654.62-1.135 1.129a14.797 14.797 0 00-2.549 3.645c-.671 1.292-1.206 2.781-1.606 4.467a6.525 6.525 0 00-.037 2.441c.039.541.252.995.64 1.361.654.618 1.627.85 2.92.696 1.391-.016 3.799.08 7.224.289l1.662-.011c2.405.026 4.377.123 5.915.291 1.56.145 3.151.524 4.771 1.138.692.287 1.244.625 1.656 1.014 1.042.984 1.622 2.288 1.738 3.912.148 1.882-.12 3.647-.804 5.293-.66 1.669-1.651 3.325-2.972 4.965-.158.217-.352.47-.579.76a14.51 14.51 0 01-.822.943c-.206.218-.54.522-1 .912-.479.556-1.103 1.022-1.87 1.398a7.114 7.114 0 01-2.383.775c-1.646.188-2.941-.164-3.886-1.057-.799-.756-1.291-1.862-1.473-3.318.368-.294.661-.385.876-.273.214.065.395.213.543.444.171.208.317.369.438.483.073.069.205.148.396.237 1.329-.533 2.612-1.454 3.848-2.763 1.373-1.453 2.424-3.051 3.153-4.793.727-1.789.865-3.173.412-4.15-.324-.628-1.561-1.017-3.711-1.168a48.783 48.783 0 00-6.757-.056c-2.141.179-4.167.26-6.077.244a9.442 9.442 0 01-3.201-.617 9.3 9.3 0 01-2.811-1.83 8.76 8.76 0 01-2.372-3.823c-.444-1.52-.443-3.147.003-4.881.824-3.348 2.312-6.161 4.464-8.439a24.1 24.1 0 011.343-1.276c.552-.487 1.003-.795 1.354-.923zm30.216 20.031c-.229.242-.475.377-.739.403-.264.007-.522-.108-.774-.346a1.29 1.29 0 01-.421-.893c-.02-.368.085-.672.313-.915.239-.252.499-.382.782-.39.282-.027.554.083.816.331a1.2 1.2 0 01.379.909c.001.348-.118.649-.356.901zm-10.331-9.072a.915.915 0 01.262-.715.916.916 0 01.699-.303c.274.002.493.08.658.236.164.156.831.886 2 2.193a65.889 65.889 0 003.847 3.937.61.61 0 01.195.404.517.517 0 01-.144.386.523.523 0 01-.378.167.666.666 0 01-.401-.187 66.21 66.21 0 00-4.149-3.617c-1.37-1.093-2.138-1.717-2.303-1.873a.96.96 0 01-.286-.628zm13.617 5.594c-.229.242-.475.376-.739.403-.263.007-.521-.108-.773-.346a1.289 1.289 0 01-.422-.894c-.02-.367.085-.672.314-.914.238-.252.498-.382.781-.39.282-.027.554.083.816.33a1.2 1.2 0 01.379.909c.001.349-.118.65-.356.902zm-10.331-9.073a.92.92 0 01.262-.715.92.92 0 01.699-.302c.274.001.493.08.658.236.164.155.831.886 2 2.192a65.59 65.59 0 003.847 3.937c.116.11.182.245.196.405a.52.52 0 01-.145.386.517.517 0 01-.377.166.659.659 0 01-.402-.186 65.009 65.009 0 00-4.149-3.617c-1.37-1.093-2.138-1.718-2.303-1.873a.965.965 0 01-.286-.629z"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_d_157_76"
                    width="166.235"
                    height="168.302"
                    x="248.515"
                    y="236.978"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="21" dy="13"></feOffset>
                    <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.46 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_157_76"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_157_76"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <clipPath id="clip0_157_76">
                    <path fill="#fff" d="M0 0H896V747.971H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
          <Link
            to="/product"
            className="block w-fit mx-auto  border-orange-300 hover:bg-orange-300 hover:text-gray-600 text-orange-300 px-4 py-1 my-2 "
          >
            Continue shopping
          </Link>
        </section>
        <section className="bg-orange-400/10 w-[95%] md:w-full mx-auto h-fit  px-3 pt-8 border-2 border-orange-300 md:font-montserrat font-poppins rounded-md pb-8">
          <div>
            <h1 className="md:text-xl text-md text-gray-600  capitalize pb-4">
              card total
              <FiShoppingCart className="inline-block text-2xl  ml-2" />
            </h1>
            <hr />

            <div className="flex justify-between py-2">
              <div className="capitalize text-md md:text-lg   text-gray-500">
                subtotal:
              </div>
              <div className=" text-md text-gray-600">
                <TbCurrencyTaka className="text-md md:text-lg text-gray-500 inline-block relative bottom-1" />
                {subtotal}
              </div>
            </div>
            <hr />
            <div>
              <h1 className="capitalize text-md md:text-lg  text-gray-500 pb-3 pt-1">
                shipping:
              </h1>
              <div className="flex justify-between py-2">
                <div className="capitalize text-md md:text-lg text-gray-500 pb-1">
                  Delivery charge
                </div>
                <div className=" text-md md:text-lg text-gray-600">
                  <TbCurrencyTaka className="text-xl text-gray-500 inline-block relative bottom-1" />
                  {deliveryCharge}
                </div>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="capitalize text-md md:text-lg text-gray-500">
                total:
              </div>
              <div className=" text-md text-gray-600">
                <TbCurrencyTaka className="text-md md:text-xl text-gray-500 inline-block relative bottom-1" />
                {totalAmount}
              </div>
            </div>
            <div className="ml-2 mt-8">
              <Link
                onClick={handleAlert}
                to={totalAmount > 50 ? "/product/payment" : "/product/card"}
              >
                <button
                  className={`border-orange-300 block sm:w-fit w-[90%] mx-auto sm:ml-auto border-2 text-orange-300 hover:bg-orange-300 hover:text-gray-100
            sm:mx-1 px-12 py-1 text-md md:text-md capitalize rounded-md font-semibold   transition-colors duration-500`}
                >
                  checkout
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default AddToCard;
