import React from "react";
import Layout from "../../compunents/layout/Layout";
import { useAuth } from "../../context/Auth";
import UserMenu from "../../compunents/layout/UserMenu"

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
    <div className="">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <ul className="md:ml-4 col-span-2">
            <li>{auth?.user?.name}</li>
            <li>{auth?.user?.email}</li>
            <li>{auth?.user?.address}</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default Dashboard;