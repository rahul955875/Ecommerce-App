import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Auth = () => {
  return (
    <>
    <Header/>
      <Toaster />
      <div className="mt-25">
      <Outlet />
      </div>
    </>
  );
};

export default Auth;
