import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../store/userState/userSlice";
import { cartActions } from "../store/cartState/cartSlice";
import Container from "./ui/Container/Container";
import ProductsPage from "../pages/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import SingleProductPage from "../pages/SingleProductPage";
import Header from "./Header/Header";
import Loader from "./ui/Loader/Loader";

import SignupPage from "../pages/SignupPage";
import OrdersPage from "../pages/OrdersPage";
import OrderPage from "../pages/OrderPage";
import CartPage from "../pages/CartPage";
import ConfirmOrderPage from "../pages/ConfirmOrderPage";
import AdminPages from "../pages/AdminPages/AdminPages";
import ProfilePage from "../pages/ProfilePage";
import Snackbar from "./ui/Snackbar/Snackbar";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userId);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  useEffect(() => {
    dispatch(userActions.checkUserLocalStorage());
    dispatch(cartActions.retrieveFromLocal());
  }, [dispatch]);

  return (
    <Container>
      <div className="App">
        <Loader />
        <Header />
        <Routes>
          {userId && <Route path="/profile" element={<ProfilePage />} />}
          <Route path="/" element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<SingleProductPage />} />
          {userId && <Route path="/orders" element={<OrdersPage />} />}
          {userId && <Route path="/orders/:orderId" element={<OrderPage />} />}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/confirm" element={<ConfirmOrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {isAdmin && <Route path="/admin/*" element={<AdminPages />} />}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Snackbar />
    </Container>
  );
};

export default App;
