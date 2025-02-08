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
      stars: 4,
      description: "Koenigsegg is renowned for producing some of the world's fastest and most luxurious hypercars, combining cutting-edge technology with extreme performance."
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
      stars: 4,
      description: "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'."
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
      stars: 5,
      description: "Rolls-Royce represents the pinnacle of automotive luxury, handcrafted with precision and attention to detail for an unparalleled driving experience."
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
      stars: 3,
      description: "The All New Rush offers a stylish and spacious SUV experience, perfect for family adventures and urban commuting."
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
      stars: 4,
      description: "The Honda CR-V is a versatile and reliable SUV, known for its fuel efficiency, comfort, and advanced safety features."
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
      stars: 2,
      description: "The All New Terios is an affordable SUV that combines efficiency, space, and modern design for an enjoyable ride."
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
      stars: 3,
      description: "The MG ZX Exclusive is a stylish hatchback with an electric powertrain, offering a balance of performance, technology, and sustainability."
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
      stars: 5,
      description: "The New MG ZS is a modern SUV with a sleek design, premium interior, and an excellent balance of power and efficiency."
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
      stars: 4,
      description: "The MG ZX Excite is a compact hatchback with an electric drivetrain, designed for city driving with impressive efficiency and comfort."
    },
    {
      id: 10,
      name: "Koenigsegg",
      type: "MPV",
      fuelCapacity: "10L",
      transmission: "Manual",
      capacity: 4,
      price: "20.00",
      image: image1,
      favorite: true,
      stars: 1,
      description: "Koenigsegg's engineering excellence now meets MPV practicality, offering a unique blend of performance and utility."
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
      stars: 3,
      description: "The Nissan GT-R Coupe is a high-performance icon, featuring cutting-edge aerodynamics, twin-turbo power, and legendary handling."
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
      stars: 4,
      description: "A Rolls-Royce Sport model that seamlessly blends luxury with exhilarating performance, crafted to perfection."
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
      stars: 5,
      description: "The All New Rush provides a robust and spacious SUV experience, making it an excellent choice for long road trips and city driving."
    },
    {
      id: 14,
      name: "CR - V",
      type: "Sedan",
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: 6,
      price: "30.00",
      image: image5,
      favorite: true,
      stars: 4,
      description: "A budget-friendly yet powerful SUV, the CR-V is known for its reliability, efficiency, and comfort for all passengers."
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
