import React, { useState, useEffect } from 'react'
import Layout from '../../compunents/layout/Layout';
import AdminMenu from '../../compunents/layout/AdminMenu'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


import axios from "axios";

import { Select } from "antd";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");



//get all category
const getAllCategory = async () => {
  try {
    const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
    if (data?.success) {
      setCategories(data?.category);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something wwent wrong in getting catgeory");
  }
};

useEffect(() => {
  getAllCategory();
}, []);
  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };


// jsx 
  return (
    <Layout title={'Dashboard - Create Product'}>
    <div className="text-center bg-slate-300 shadow shadow-black/30 dark:shadow-black/50">
      <div className="grid grid-cols-3 ">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 col-span-2">
          <h1 className='text-4xl'>Create Product</h1>
          <div className='ml-1 px-20'>
          <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="mb-3 bg-slate-50 rounded-full w-full p-1"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (<>
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                  </>
                ))}
              </Select>
              <div className="mt-10 mb-10 ">
                <label className="p-2  bg-slate-50 px-10  cursor-pointer rounded-lg  ">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="justify-center grid">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"

                      className="w-96 "
                    />
                  </div>
                )}
              </div>
              
              
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write the name of Product"
                  className="mb-3 bg-slate-50  w-full p-2"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="mb-3 bg-slate-50  w-full p-2 pb-8"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="mb-3 bg-slate-50  w-full p-2"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="mb-3 bg-slate-50  w-full p-2"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="mb-3 bg-slate-50  w-full p-2 t"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="bg-slate-800 p-2 text-white" onClick={handleCreate}>
                  CREATE PRODUCT
                </button></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
    )
}

export default CreateProduct