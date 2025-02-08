import React, { createContext, useState } from "react";
import carsData from "../data/carsData"; 

export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(carsData);
  const [filter, setFilter] = useState(false);
  return (
    <CarContext.Provider value={{ cars, setCars, filter, setFilter }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
