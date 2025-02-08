import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../../context/WishlistProvider";
import Love from "../../Svgs/Love";
const CarCard = ({ car }) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const isWishlisted = wishlist.some((item) => item.id === car.id);
  return (
    <div className="bg-white p-4 xl:p-6 rounded-xl relative">
      <button
        onClick={() => toggleWishlist(car)}
        className="absolute right-4 top-4"
      >
        <Love
          classes={
            isWishlisted
              ? "stroke-[#ED3F3F] fill-[#ED3F3F]"
              : "stroke-secondary fill-white"
          }
        />
      </button>
      <div className="space-y-1">
        <h3 className="text-xl  font-bold text-dark">{car.name}</h3>
        <p className="text-sm font-bold text-secondary">{car.type}</p>
      </div>
      <div className="pt-10 xl:min-h-[180px] flex justify-center items-end">
        <Link to={`/details/${car.id}`}>
          <img
            src={car.image}
            alt={car.name}
            className="w-full   object-contain"
          />
        </Link>
      </div>
      <ul className="flex justify-between items-center py-5">
        <li className="flex gap-2 items-center text-sm font-medium text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#90A3BF"
              d="m22.34 9.33-2-1c-.37-.18-.83-.04-1.01.33-.19.38-.04.83.33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.76.76 0 0 0-.41-.67M6 6.89C6 5.5 6.85 5 7.89 5h5.23C14.15 5 15 5.5 15 6.89v1.23C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75"
            ></path>
          </svg>
          <span>{car.fuelCapacity}</span>
        </li>
        <li className="flex gap-2 items-center text-sm font-medium text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#90A3BF"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.53 2 12 2"
            ></path>
            <rect width="16" height="16" x="4" y="4" fill="#fff" rx="8"></rect>
            <path
              fill="#90A3BF"
              d="M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6"
            ></path>
            <rect width="8" height="8" x="8" y="8" fill="#fff" rx="4"></rect>
            <path
              fill="#90A3BF"
              d="M11 17h2v4h-2zM17 11h4v2h-4zM3 11h4v2H3z"
            ></path>
          </svg>
          <span>{car.transmission}</span>
        </li>
        <li className="flex gap-2 items-center text-sm font-medium text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#90A3BF"
              d="M9 2C6.38 2 4.25 4.13 4.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.74 4.74 0 0 0 4.58-4.74C13.75 4.13 11.62 2 9 2M14.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C5.32 21.53 7.16 22 9 22s3.68-.47 5.08-1.41c1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21M19.99 7.34c.16 1.94-1.22 3.64-3.13 3.87h-.05c-.06 0-.12 0-.17.02-.97.05-1.86-.26-2.53-.83 1.03-.92 1.62-2.3 1.5-3.8a4.64 4.64 0 0 0-.77-2.18 3.592 3.592 0 0 1 5.15 2.92"
            ></path>
            <path
              fill="#90A3BF"
              d="M21.99 16.59c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78.72-.65 1.14-1.46 1.22-2.32.1-1.24-.49-2.43-1.67-3.38-.67-.53-1.45-.95-2.3-1.26 2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63"
            ></path>
          </svg>
          <span>{car.capacity}</span>
        </li>
      </ul>

      <div className="flex gap-2 items-center justify-between pt-4">
        <p className="text-dark text-lg xl:text-xl font-bold">
          <span>${car.price}/</span>{" "}
          <span className="text-secondary text-sm font-bold">day</span>
        </p>
        <Link className="inline-block text-center hover:bg-primary/90 transition-all  bg-primary text-sm xl:text-base font-semibold  text-white px-2 sm:px-3 xl:px-5 py-2.5 rounded">
          Rent Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
