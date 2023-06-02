import React from "react";
import Layout from ".././compunents/layout/Layout";
import { useSearch } from "../context/search";
const Search = () => {
    const [values, setValues] = useSearch();
    return (
      <Layout title={"Search results"}>
        <div className="">
          <div className="text-center">
            <h1>Search Resuts</h1>
            <h6>
              {values?.results.length < 1
                ? "No Products Found"
                : `Found ${values?.results.length}`}
            </h6>
            <div className="flex gap-4 ml-10">
              {values?.results.map((p) => (
                 <div className="">
             
                 <div className="w-64 justify-center bg-white shadow shadow-black/30 dark:shadow-black/90
                  my-4 pb-2 ">
                     
                   <img
                     src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                     className=" w-[100%] h-44 p-1   "
                     alt={p.name}
                   />
                   <div className=" text-left ml-1 font-serif">
                    <p className="font-bold text-center text-xl">{p.name}</p>
                    <p className="font-bold">{p.description.substring(0,30)}</p>
 
 
                    <p className="font-bold">${p.price}</p>
                    
 
                    
                     <div className='grid gap-1 grid-cols-2 text-white'><button className='bg-blue-600 p-2 rounded-lg'>See Details</button>
                     <button  className='bg-gray-800 p-2 mr-1 rounded-lg '>Add TO Cart</button></div>
                   </div>
                 </div>
               </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Search;