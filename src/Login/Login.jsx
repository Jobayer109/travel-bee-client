import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [error, setError] = useState(null);
  const { logIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };


  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        navigate(from, {replace:true})
        console.log(result.user);
      })  
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center font-mono mt-2 text-3xl">Sign in</h2>
        <form onSubmit={handleSubmit} className="card-body">
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
            <label className="label">
              <Link href="/" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
            <p>{error}</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning btn-sm w-3/5 mx-auto">Sign in</button>
          </div>
          <div className="divider text-xs">OR</div>
          <div className="flex items-center justify-center">
            <FaGoogle
              onClick={handleGoogleSignIn}
              className="mr-4 text-4xl text-info"
            ></FaGoogle>
            <FaGithub className="text-4xl"></FaGithub>
          </div>
          <p className="text-center">
            <small> Didn't have account? Please</small>{" "}
            <Link className="hover:underline font-bold text-blue-500 " to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
