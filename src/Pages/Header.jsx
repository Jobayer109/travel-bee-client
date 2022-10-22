import React, { useContext } from "react";
import { FaUserSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOutUser = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <nav className="top navbar px-24 h-4 shadow-md">
      <div className="flex-1">
        <Link to="/" className="text-3xl border-2 border-black rounded-md font-bold p-1">
          Travel Bee
        </Link>
      </div>
      <div className="">
        <div className="">
          <Link className="font-thin mr-8  hover:text-yellow-600" to="/">
            Home
          </Link>
          <Link className="font-thin mr-8  hover:text-yellow-600" to="/booking">
            Booking
          </Link>
          <Link className="font-thin mr-8  hover:text-yellow-600" to="/contact">
            Contact
          </Link>

          {user && user?.uid ? (
            <>
              {" "}
              <Link
                onClick={signOutUser}
                className="font-thin mr-8  hover:text-yellow-600"
                to="/login"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link className="font-thin mr-8  hover:text-yellow-600" to="/login">
                Login
              </Link>
              <Link className="font-thin mr-8  hover:text-yellow-600" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-black">
            <div className="w-10 rounded-full">
              {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <FaUserSlash className="text-4xl text-red-600"/>}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-center"
          >
            <li>
              <Link to="/profile" className="justify-between">
                {user?.uid ? user?.displayName : "no data"}
              </Link>
            </li>
            <li>
              <a>Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
