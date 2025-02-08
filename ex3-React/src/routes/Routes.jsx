import React from "react";
import { Route, Routes } from "react-router-dom";
import CarProvider from "../context/CarProvider";
import WishlistProvider from "../context/WishlistProvider";
import CarLayout from "../layouts/CarLayout";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import Details from "../pages/Details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <CarProvider>
            <WishlistProvider>
              <CarLayout />
            </WishlistProvider>
          </CarProvider>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
