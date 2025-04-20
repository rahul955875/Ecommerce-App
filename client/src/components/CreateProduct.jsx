import React from "react";
import AdminMenu from "./AdminMenu";

const CreateProduct = () => {
  return <div className="flex mt-20 p-4 ">
  <div className="side-menu text-center bg-amber-300 w-4/12">
      <AdminMenu/>
  </div>
  <div className="content bg-slate-200 w-full border border-gray ">
  Create Product
  </div>
</div>;
};

export default CreateProduct;
