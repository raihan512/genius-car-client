import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link className="hover:bg-transparent focus:rounded-none" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:bg-transparent focus:rounded-none" to="/">
          About
        </Link>
      </li>
      <li>
        <Link className="hover:bg-transparent focus:rounded-none" to="/">
          Services
        </Link>
      </li>
      <li>
        <Link className="hover:bg-transparent focus:rounded-none" to="/">
          Blog
        </Link>
      </li>
      <li>
        <Link className="hover:bg-transparent focus:rounded-none" to="/">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}{" "}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="h-12" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-orange-400 border-orange-400 rounded-sm"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Header;
