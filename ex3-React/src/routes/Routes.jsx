import React from "react";
import { Route, Routes } from "react-router-dom";
import CarProvider from "../context/CarProvider";
import WishlistProvider from "../context/WishlistProvider";
import CarLayout from "../layouts/CarLayout";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Car Layout */}
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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
