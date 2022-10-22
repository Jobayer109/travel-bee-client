import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Location = () => {
  const spotInfo = useLoaderData();
  console.log(spotInfo);
  const { img, spot, description, id } = spotInfo;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-[70%] mx-auto mt-12">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-mono">{spot}</h2>
            <p className="font-thin text-justify">
              <small>{description}</small>
            </p>
          </div>
        </div>
        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Origin</span>
            </label>

            <input type="text" name="origin" className="input input-bordered w-60 h-8" required />
            <label className="label">
              <span className="label-text">Destination</span>
            </label>
            <input
              type="text"
              name="Destination"
              className="input input-bordered w-60 h-8"
              required
            />
          </div>
          <button className="btn btn-outline btn-sm mt-8 w-3/5 ">
            <Link to={`/booking/${id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
