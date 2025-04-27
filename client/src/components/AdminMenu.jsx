import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-medium">
        <NavLink
          to="/dashboard/admin"
          className=" px-2 py-4 block border-b-1 border-gray-400"
        >
          Admin Panel
        </NavLink>
      </h2>
      <div className="list flex flex-col">
        <NavLink
          className={({ isActive }) =>
            `border-b-1 border-gray-400 px-2 py-4 ${isActive ? "bg-blue-600 text-white" : ""}`
          }
          to="/dashboard/admin/create-category"
        >
          Create Category
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border-b-1 border-gray-400 px-2 py-4 ${isActive ? "bg-blue-600 text-white" : ""}`
          }
          to="/dashboard/admin/create-product"
        >
          Create Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border-b-1 border-gray-400 px-2 py-4 ${isActive ? "bg-blue-600 text-white" : ""}`
          }
          to="/dashboard/admin/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border-b-1 border-gray-400 px-2 py-4 ${isActive ? "bg-blue-600 text-white" : ""}`
          }
          to="/dashboard/admin/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
