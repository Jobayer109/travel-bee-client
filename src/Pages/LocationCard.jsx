import React from "react";
import { Link } from "react-router-dom";

const LocationCard = ({ location, handleDetails }) => {
  const { img, spot, id } = location;
  return (
    <div onClick={handleDetails} className="card w-60 h-72 bg-base-100 shadow-xl image-full ">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-44 font-semibold text-2xl">{spot}</h2>

        <div className="card-actions mb-0">
          <button className="btn btn-sm btn-outline btn-success w-40 mx-auto">
            <span className="">
              <Link to={`/hotels/${id}`}>See Details</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
