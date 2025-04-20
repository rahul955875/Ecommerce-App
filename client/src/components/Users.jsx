import React from "react";
import AdminMenu from "./AdminMenu";

const Users = () => {
    return <div className="flex mt-20 p-4 ">
    <div className="side-menu text-center bg-amber-300 w-4/12">
        <AdminMenu/>
    </div>
    <div className="content bg-slate-200 w-full border border-gray p-4 ">
    Users
    </div>
  </div>;;
};

export default Users;
