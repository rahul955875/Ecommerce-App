import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-medium">
        <NavLink
          to="/dashboard/user"
          className=" px-2 py-4 block border-b-1 border-gray-400"
        >
          Dashboard
        </NavLink>
      </h2>
      <div className="list flex flex-col">
        <NavLink
          className={({ isActive }) =>
            `border-b-1 border-gray-400 px-2 py-4 ${isActive ? "bg-blue-600 text-white" : ""}`
          }
          to="/dashboard/user/Profile"
        >
          Profile
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border-b-1 border-gray-400 px-2 py-4 ${isActive ? "bg-blue-600 text-white" : ""}`
          }
          to="/dashboard/user/orders"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
