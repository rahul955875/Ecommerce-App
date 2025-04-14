import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const cartLength = useSelector((state) => state.cart.items);
  const getLinkClass = ({ isActive }) =>
    `py-2 px-4  hover:bg-gray-200 transition-all duration-300 ${
      isActive ? "border-b-2 border-blue-700 text-blue-950 font-bold" : ""
    }`;

  return (
    <header className="fixed top-0 section-container flex justify-between w-full py-4 px-8 shadow-lg bg-white">
      <div className="app-logo">
        <Link to="/" className="text-2xl font-bold">
          🛒 JMD Collections
        </Link>
      </div>
      <nav className="nav-links flex gap-2">
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
        <NavLink to="/contactus" className={getLinkClass}>
          Contact Us
        </NavLink>
        <NavLink to="/login" className={getLinkClass}>
          Login
        </NavLink>
        <NavLink to="/cart" className={getLinkClass}>
          <span>🛒</span>{" "}
          <span className="bg-red-500 inline-block w-6 text-center text-white  h-6 rounded-full">
            {cartLength.reduce((acc, curr) => curr.count + acc, 0)}
          </span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
