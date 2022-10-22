import React from "react";
import { FaDollarSign, FaEye, FaStar } from "react-icons/fa";

const HotelDetails = ({ resort }) => {
  console.log(resort);
  const {name, details, rating, perNight, review, imgURL } = resort;

  return (
    <div className="card card-side bg-base-100 shadow-xl m-4">
      <figure>
        <img className="h-44 w-44 rounded-lg" src={imgURL} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions flex items-center justify-between">
          <div className="flex items-center">
            <FaStar className="mr-2" />
            <p>{ rating}</p>
          </div>
          <div className="flex items-center">
            <FaDollarSign className="mr-2" />
            <p>{ perNight}/per night</p>
          </div>
          <div className="flex items-center">
            <FaEye className="mr-2" />
            <p>{ review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
