import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center bg-slate-300 ">
        <div className="grid grid-cols-1 ">
          <h4 className="text-4xl 2xl:text-8xl mt-10"style={{fontFamily:'Playfair Display'}}>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="md:p-4 mt-8 p-2 md:text-2xl 2xl:p-10 2xl:my-12 2xl:text-4xl
           bg-slate-900 2xl:mx-44  mx-28 text-white hover:animate-pulse"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="md:p-4 my-4 p-2 md:text-2xl 2xl:p-10 2xl:my-12 2xl:text-4xl hover:animate-pulse
            bg-slate-900 2xl:mx-44  mx-28 text-white"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="md:p-4 :my-4 p-2 md:text-2xl 2xl:p-10 2xl:my-12 2xl:text-4xl bg-slate-900 mx-28 2xl:mx-44 hover:animate-pulse
             text-white"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="md:p-4 my-4 p-2 md:text-2xl 2xl:p-10 2xl:my-12 2xl:text-4xl bg-slate-900 mx-28 2xl:mx-44 hover:animate-pulse
            text-white"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="md:p-4 p-2 md:text-2xl 2xl:p-10 2xl:my-12 2xl:text-4xl hover:animate-pulse
           bg-slate-900 mx-28 2xl:mx-44 
            text-white "
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;