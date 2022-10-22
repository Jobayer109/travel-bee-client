import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Register = () => {

    const { createUser, profile, verify } = useContext(AuthContext);
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(name, email, password, photoURL)
            .then(result => {
                profile(name, photoURL )
                verify()
                navigate("/login")
                form.reset('')
            console.log(result.user);
            })
            .catch(error => {
            setError(error.message)
        })
}




  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center font-mono mt-2 text-3xl">Register</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered h-8"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photo url"
              className="input input-bordered h-8"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered h-8"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered h-8"
              required
            />
                  </div>
                  <p>{ error}</p>
          <div className="form-control mt-6">
            <button className="btn btn-warning btn-sm w-3/5 mx-auto">Sign Up</button>
          </div>
          <label className="label">
            <p className="text-center">
              <small> Already have an account? Please</small>{" "}
              <Link className="hover:underline  font-bold text-blue-500 " to="/login">
                Sign in
              </Link>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
