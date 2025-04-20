import React from "react";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const authObj = useSelector(state=> state.login.auth)
  return <>
  <div className="flex mt-20 p-4 ">
        <div className="side-menu text-center bg-amber-300 w-4/12">
            <UserMenu/>
        </div>
        <div className="content bg-slate-200 w-full border border-gray ">
        <div className="card p-4 space-y-2 font-medium ">
            <h3 className="text-2xl">User Name : {authObj?.user.name}</h3>
            <h3 className="text-2xl">User Email : {authObj?.user.email}</h3>
            <h3 className="text-2xl">User Contact : {authObj?.user.phone}</h3>
        </div>
        </div>
    </div>

  </>;
};

export default Dashboard;
