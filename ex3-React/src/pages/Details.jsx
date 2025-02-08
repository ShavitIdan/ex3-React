import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CarDetailsSlider from "../components/Car/CarDetailsSlider/CarDetailsSlider";
import Love from "../components/Svgs/Love";
import Star from "../components/Svgs/Star";
import { CarContext } from "../context/CarProvider";
import { WishlistContext } from "../context/WishlistProvider";

const Details = () => {
  const { cars } = useContext(CarContext);
  const { setFilter } = useContext(CarContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div className="p-4 text-center text-red-500">Car not found!</div>;
  }
  const isWishlisted = wishlist.some((item) => item.id === car.id);
  return (
    <div className="  space-y-5 pb-10">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setFilter(true)}
          type="button"
          className="shrink-0 lg:hidden size-10 hover:border-secondary rounded-md border border-secondary/50 text-secondary flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-filter"
            viewBox="0 0 24 24"
          >
            <path d="M22 3H2l8 9.46V19l4 2v-8.54z"></path>
          </svg>
        </button>
        <h2 className="text-xl font-bold text-dark ">Car Details</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10">
        <div>
          <CarDetailsSlider items={[car.slider1, car.slider2, car.slider3]} />
        </div>
        <div className="bg-white p-4 xl:p-7 rounded-xl space-y-5 xl:space-y-10 relative">
          <button
            onClick={() => toggleWishlist(car)}
            className="absolute right-6 top-6"
          >
            <Love
              classes={
                isWishlisted
                  ? "stroke-[#ED3F3F] fill-[#ED3F3F]"
                  : "stroke-secondary fill-white"
              }
            />
          </button>
          <div className="space-y-2 pr-8">
            <h2 className="text-xl font-bold lg:text-[32px] lg:leading-tight">
              {car.name}
            </h2>
            <div className="flex gap-3 items-center">
              <ul className="flex gap-1 items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                        <Star
                        classes={
                            index < car.stars
                            ? "stroke-yellow-400 fill-yellow-400"
                            : "stroke-secondary"
                        }
                        />
                    </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[#596780]">
                440 Reviewers
              </p>
            </div>
          </div>
          <p className=" text-base  2xl:text-xl !leading-[2] ">
            {car.description}
          </p>
          <ul className="grid gap-x-5 xl:gap-x-10 gap-y-2 xl:gap-y-4 grid-cols-1 sm:grid-cols-2">
            <li className="flex justify-between items-center">
              <p className="text-sm xl:text-base  2xl:text-xl text-secondary">
                Type Car
              </p>
              <p className="text-sm xl:text-base  2xl:text-xl text-[#596780]">
                {car.type}
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm xl:text-base  2xl:text-xl text-secondary">
                Capacity
              </p>
              <p className="text-sm xl:text-base  2xl:text-xl text-[#596780]">
                {car.capacity} Person
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm xl:text-base  2xl:text-xl text-secondary">
                Steering
              </p>
              <p className="text-sm xl:text-base  2xl:text-xl text-[#596780]">
                {car.transmission}
              </p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm xl:text-base  2xl:text-xl text-secondary">
                Gasoline
              </p>
              <p className="text-sm xl:text-base  2xl:text-xl text-[#596780]">
                {car.fuelCapacity}
              </p>
            </li>
          </ul>
          <div className="flex gap-2 items-center justify-between pt-4">
            <p className="text-dark text-lg sm:text-xl lg:text-[28px] lg:leading-tight font-bold">
              <span>${car.price}/</span>{" "}
              <span className="text-secondary text-base font-bold">day</span>
            </p>
            <button
              type="button"
              className="inline-block text-center hover:bg-primary/90 transition-all  bg-primary text-sm sm:text-base font-semibold  text-white px-3 sm:px-4 lg:px-6 py-3 rounded"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
