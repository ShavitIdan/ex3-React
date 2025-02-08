import React, { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (car) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some(
        (item) => item.id === car.id
      );

      if (isAlreadyInWishlist) {
        return prevWishlist.filter((item) => item.id !== car.id); 
      } else {
        return [...prevWishlist, car]; 
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
