import React from "react";
import LoginImg from "../../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content grid grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={LoginImg} className="w-3/4" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="card-body">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-orange-400 border-orange-400"
                value="Sign In"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
