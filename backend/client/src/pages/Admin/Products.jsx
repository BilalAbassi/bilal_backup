import React, { useState, useEffect } from "react";
import AdminMenu from "../../compunents/layout/AdminMenu";
import Layout from "../../compunents/layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    //getall products
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/v1/product/get-product");
        setProducts(data.products);
      } catch (error) {
        console.log(error);
        toast.error("Someething Went Wrong");
      }
    };
  
    //lifecycle method
    useEffect(() => {
      getAllProducts();
    }, []);

  return (
    <Layout title={"Dashboard - Create Category"}>
    <div className="text-center bg-slate-300 shadow shadow-black/30 dark:shadow-black/50">
      <div className="grid md:grid-cols-3 ">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 col-span-2">
          <h1 className='text-5xl mb-10 font-bold'>Products</h1>
          <div className="grid grid-cols-3 gap-1">
            {products?.map((p) => (
                <div className="">
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className=""
              >
                <div className="w-64 justify-center bg-white shadow shadow-black/30 dark:shadow-black/50
                rounded-md">
                    
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className=" w-[100%] h-48 p-1   "
                    alt={p.name}
                  />
                  <div className=" text-left ml-1 font-serif">
                    Name<h5 className="font-bold">{p.name}</h5>
                    Description<p>{p.description}</p>
                  </div>
                </div>
              </Link></div>
            ))}
          </div>
          
          
          
          
          </div></div></div></Layout>
  )
}

export default Products