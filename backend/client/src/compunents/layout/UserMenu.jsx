import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center bg-slate-300 shadow shadow-black/30 dark:shadow-black/50 h-screen">
        <div className="grid grid-cols-1 ">
          <h4 className="text-4xl 2xl:text-8xl mt-10"style={{fontFamily:'Playfair Display'}}>User Panel</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="md:p-4 mt-8 p-2 md:text-2xl 2xl:p-10 2xl:my-12 2xl:text-4xl
           bg-slate-900 2xl:mx-44  mx-28 text-white hover:animate-pulse"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="md:p-4 my-4 p-2 md:text-2xl 2xl:p-10 2xl:my-12 2xl:text-4xl hover:animate-pulse
            bg-slate-900 2xl:mx-44  mx-28 text-white"
          >
            Orders
          </NavLink>
          
         
        </div>
      </div>
    </>
  );
};

export default AdminMenu;