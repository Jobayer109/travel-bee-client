import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelDetails from "./HotelDetails";

const Booking = () => {
  const allHotels = useLoaderData();
  console.log(allHotels.resorts);
  const { resorts } = allHotels;
  return (
    <div className="grid grid-cols-2 gap-10 border-2">
      <div>
        <h2 className="text-center mt-3 text-xl font-bold text-gray-400 border-y-2 rounded-md">
          Stay in <span className="font-mono text-3xl text-black">{allHotels.spot}</span>
        </h2>
        {resorts.map((resort) => (
          <HotelDetails resort={resort}></HotelDetails>
        ))}
      </div>
      <div>
        <p>Map Section</p>
        <img className="rounded-xl"
          src="https://bddirectories.com/wp-content/uploads/2021/01/Bangladesh-Districts-Map.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Booking;
