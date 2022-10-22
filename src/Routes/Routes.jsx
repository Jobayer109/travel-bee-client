import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Booking from "../Pages/Booking";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Location from "../Pages/Location";
import Profile from "../Pages/Profile";
import PrivetRoute from "../Routes/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/hotels`),
      },
      {
        path: "hotels/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/hotels/${params.id}`);
        },
        element: <Location></Location>,
      },
      {
        path: "booking",
        element: (
          <PrivetRoute>
            <Booking></Booking>
          </PrivetRoute>
        ),
      },
      {
        path: "booking/:id",
        element: <Booking></Booking>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/hotels/${params.id}`);
        },
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
