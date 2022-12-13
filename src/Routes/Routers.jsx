import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Dashboard from "../dashboard/Dashboard";
import ProductEdit from "../dashboard/ProducEdit";
import ProductAdd from "../dashboard/ProductAdd";
import ProductList from "../dashboard/ProductList";
import ViewOrderDash from "../dashboard/ViewOrderDash";
import AddToCard from "../pages/AddToCard";
import BuyNow from "../pages/BuyNow";
import CustomerOrder from "../pages/CustomerOrder";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import ProductInfo from "../pages/ProductInfo";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Signup from "../pages/Signup";
import ViewOrder from "../pages/ViewOrder";
import WishList from "../pages/WishList";
import ProtectedDashboard from "./ProtectedDashboard";
import ProtectRoutes from "./ProtectRoutes";

export default function Routers() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/info/:_id" element={<ProductInfo />} />

        <Route path="/product/card" element={<AddToCard />} />
        <Route path="/product/wishlist" element={<WishList />} />
        <Route path="/product/search" element={<Search />} />

        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dashboard/*" element={<ProtectedDashboard />}>
          <Route path="product/add" element={<ProductAdd />} />
          <Route path="product/edit/:_id" element={<ProductEdit />} />
          <Route path="product/list" element={<ProductList />} />
          <Route path="product/order/list" element={<ViewOrderDash />} />
        </Route>

        <Route path="/*" element={<ProtectRoutes />}>
          <Route path="product/payment" element={<Payment />} />
          <Route path="product/buy/:_id" element={<BuyNow />} />
          <Route path="product/order/list" element={<CustomerOrder />} />
          <Route path="product/order/list/view/:_id" element={<ViewOrder />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}
