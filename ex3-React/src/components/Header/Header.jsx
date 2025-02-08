import React, { useState , useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Love from "../Svgs/Love";

export default function Header({ searchTerm, setSearchTerm }) {
  const [tempSearch, setTempSearch] = useState(searchTerm);
	useEffect(() => {
    const timeout = setTimeout(() => {
      if (tempSearch.length >= 2 || tempSearch.length === 0) { 
        setSearchTerm(tempSearch); 
      }
    },50 );

    return () => clearTimeout(timeout); 
  }, [tempSearch, setSearchTerm]);

  const handleSearch = () => {
    setSearchTerm(tempSearch);
  };
  return (
    <header className="px-4 lg:px-8 py-3 sticky top-0 z-50 sm:py-7 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <div className="lg:w-[360px] shrink-0">
            <Link
              to="/"
              className="text-2xl sm:text-[32px] font-bold text-primary leading-tight"
            >
              ShenCarCar
            </Link>
          </div>
          <div className="relative max-w-full hidden sm:block lg:w-[490px]">
            <input
              type="text"
              className="w-full py-2 pl-6 pr-8 border border-[#C3D4E9]/40 rounded-full focus:outline-none focus:ring-0 placeholder:text-[#596780] text-dark text-base font-medium"
              placeholder="Search by car name"
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Press "Enter" to search
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-4 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#596780"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19M22 22l-2-2"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <NavLink
          to="/wishlist"
          className="size-[44px] flex justify-center items-center rounded-full border border-[#C3D4E9]/40"
        >
          {({ isActive }) => (
            <Love
              classes={
                isActive
                  ? "stroke-[#ED3F3F] fill-[#ED3F3F]"
                  : "stroke-dark-100 fill-dark-100"
              }
            />
          )}
        </NavLink>
      </div>
    </header>
  );
}
