import React from "react";
import { useLoaderData } from "react-router-dom";
import LocationCard from "./LocationCard";

const Home = () => {
  const locations = useLoaderData()
    console.log(locations);
    

    const handleDetails = () => {
    
}



  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://beautifulbangladesh.gov.bd/storage/backend/images/upload/thumbnil/nilgiri-2020-06-07-5edc99c426aa6.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "1",
      }}
    >
      <div className="grid grid-cols-3  w-[60%] mx-auto">
        {locations.map((location) => (
          <LocationCard location={location} handleDetails={handleDetails}></LocationCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
