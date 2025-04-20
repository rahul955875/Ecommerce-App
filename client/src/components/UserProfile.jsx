import React from "react";
import UserMenu from "./UserMenu";

const UserProfile = () => {
  return <div className="flex mt-20 p-4 ">
     <div className="side-menu text-center bg-amber-300 w-4/12">
         <UserMenu/>
     </div>
     <div className="content bg-slate-200 w-full border border-gray ">
     User Profile
     </div>
   </div>;
};

export default UserProfile;
