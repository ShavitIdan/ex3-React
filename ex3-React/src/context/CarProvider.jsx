import React, { createContext, useState } from "react";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";



const initialCars = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: 2,
    price: "99.00",
    image: image1,
    favorite: true,
  },
  {
    id: 2,
    name: "Nissan GT - R",
    type: "Sport",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: 2,
    price: "82.00",
    image: image2,
    favorite: false,
  },
  {
    id: 3,
    name: "Rolls-Royce",
    type: "Sport",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: 4,
    price: "96.00",
    image: image3,
    favorite: false,
  },
  {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    fuelCapacity: "70L",
    transmission: "Manual",
    capacity: 6,
    price: "76.00",
    image: image4,
    favorite: false,
  },
  {
    id: 5,
    name: "CR - V",
    type: "SUV",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: 6,
    price: "80.00",
    image: image5,
    favorite: true,
  },
  {
    id: 6,
    name: "All New Terios",
    type: "SUV",
    fuelCapacity: "90L",
    transmission: "Manual",
    capacity: 6,
    price: "74.00",
    image: image6,
    favorite: false,
  },
  {
    id: 7,
    name: "MG ZX Exclusive",
    type: "Hatchback",
    fuelCapacity: "70L",
    transmission: "Electric",
    capacity: 4,
    price: "76.00",
    image: image7,
    favorite: false,
  },
  {
    id: 8,
    name: "New MG ZS",
    type: "SUV",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: 6,
    price: "80.00",
    image: image8,
    favorite: false,
  },
  {
    id: 9,
    name: "MG ZX Excite",
    type: "Hatchback",
    fuelCapacity: "90L",
    transmission: "Electric",
    capacity: 4,
    price: "74.00",
    image: image9,
    favorite: true,
  },
  {
    id: 10,
    name: "Koenigsegg",
    type: "MPV",
    fuelCapacity: "10L",
    transmission: "Manual",
    capacity: 3,
    price: "20.00",
    image: image1,
    favorite: true,
  },
  {
    id: 11,
    name: "Nissan GT - R",
    type: "Coupe",
    fuelCapacity: "400L",
    transmission: "Manual",
    capacity: 2,
    price: "44.00",
    image: image2,
    favorite: true,
  },
  {
    id: 12,
    name: "Rolls-Royce",
    type: "Sport",
    fuelCapacity: "40L",
    transmission: "Manual",
    capacity: 6,
    price: "30.00",
    image: image3,
    favorite: false,
  },
  {
    id: 13,
    name: "All New Rush",
    type: "SUV",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: 6,
    price: "100.00",
    image: image4,
    favorite: true,
  },
  {
    id: 14,
    name: "CR - V",
    type: "SUV",
    fuelCapacity: "80L",
    transmission: "Manual",
    capacity: 6,
    price: "30.00",
    image: image5,
    favorite: true,
  },
];

export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(initialCars);
  const [filter, setFilter] = useState(false);
  return (
    <CarContext.Provider value={{ cars, setCars, filter, setFilter }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
