import React, { useContext } from "react";
import { CarContext } from "../../context/CarProvider";
const Sidebar = ({ filters, setFilters, cars }) => {
  const { filter, setFilter } = useContext(CarContext);

  const typeCounts = {};
  const capacityCounts = { 2: 0, 4: 0, 6: 0 };

  cars.forEach((car) => {
    if (car.price <= filters.price) {
      // Count types
      if (!filters.capacity || car.capacity === filters.capacity) {
        typeCounts[car.type] = (typeCounts[car.type] || 0) + 1;
      }

      // Count capacity
      if (filters.type.length === 0 || filters.type.includes(car.type)) {
        if (capacityCounts[car.capacity] !== undefined) {
          capacityCounts[car.capacity] += 1;
        }
      }
    }
  });
  return (
    <aside
      className={`${
        filter ? "-translate-x-0" : "-translate-x-full"
      } w-[340px]  lg:translate-x-0 transition-all duration-300 max-lg:fixed max-lg:left-0 top-0 bottom-0 max-lg:shadow-2xl bg-white z-50 xl:w-[360px] lg:sticky lg:top-[100px] min-h-[calc(100vh-140px)] px-8 py-8 space-y-6 xl:space-y-12`}
    >
      <button
        type="button"
        onClick={() => setFilter(false)}
        className="absolute top-5 right-5 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-x"
          viewBox="0 0 24 24"
        >
          <path d="M18 6 6 18M6 6l12 12"></path>
        </svg>
      </button>
      <div className="space-y-4">
        <h2 className=" uppercase font-semibold text-xs text-secondary">
          Type
        </h2>
        <div className="space-y-3 xl:space-y-5">
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
            (type) => (
              <label
                key={type}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="size-5 rounded-lg"
                  checked={filters.type.includes(type)}
                  onChange={() =>
                    setFilters((prev) => ({
                      ...prev,
                      type: prev.type.includes(type)
                        ? prev.type.filter((t) => t !== type)
                        : [...prev.type, type],
                    }))
                  }
                />
                <p className="text-base xl:text-xl font-semibold text-dark-100">
                  {type}{" "}
                  <span className="text-secondary">
                    ({typeCounts[type] || 0})
                  </span>{" "}
                  {/* ✅ Show count */}
                </p>
              </label>
            )
          )}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className=" uppercase font-semibold text-xs text-secondary">
          Capacity
        </h2>
        <div className="space-y-3 xl:space-y-5">
          {[2, 4, 6].map((cap) => (
            <label key={cap} className="flex items-center space-x-2">
              <input
                type="radio"
                className="size-5"
                name="capacity"
                checked={filters.capacity === cap}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, capacity: cap }))
                }
              />
              <p className="text-base xl:text-xl font-semibold text-dark-100">
                {cap} People{" "}
                <span className="text-secondary">({typeCounts[cap] || 0})</span>
              </p>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className=" uppercase font-semibold text-xs text-secondary">
          Price (Per Day)
        </h2>

        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-full h-3 flex items-center">
            <div className="absolute w-full h-3 bg-secondary rounded-full"></div>
            <div
              className="absolute h-3 bg-primary rounded-full"
              style={{ width: `${filters.price}%` }}
            ></div>
            <div
              style={{ left: `${filters.price}%` }}
              className="absolute right-0 size-6 border-4 -ml-4 border-white bg-primary rounded-full"
            ></div>
          </div>

          {/* Input Range */}
          <input
            type="range"
            min="0"
            max="100"
            value={filters.price}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, price: e.target.value }))
            }
            className="absolute w-full opacity-0 cursor-pointer"
          />
        </div>
        <p className="text-base xl:text-xl font-semibold text-dark-100">
          Max: ${filters.price}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
