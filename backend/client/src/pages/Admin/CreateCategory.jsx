import React from 'react'
import Layout from '../../compunents/Layout/Layout';
import AdminMenu from '../../compunents/layout/AdminMenu'
import CategoryForm from "../../compunents/Form/CategoryForm";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";

const { Option } = Select;





const CreateCategory = () => {

const [categories, setCategories] = useState([]);
const [visible, setVisible] = useState(false);
const [updatedName, setUpdatedName] = useState("");
const [name, setName] = useState("");
const [selected, setSelected] = useState(null);



//handle Form
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post("http://localhost:8080/api/v1/category/create-category", {
      name,
    });
    if (data?.success) {
      toast.success(`${name} is created`);
      getAllCategory();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("somthing went wrong in input form");
  }
};
 //get all cat
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

// Update

const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.put(
      `http://localhost:8080/api/v1/category/update-category/${selected._id}`,
      { name: updatedName }
    );
    if (data.success) {
      toast.success(`${updatedName} is updated`);
      setSelected(null);
      setUpdatedName("");
      setVisible(false);
      getAllCategory();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("not updated ");
  }
};

 //delete category
 const handleDelete = async (pId) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8080/api/v1/category/delete-category/${pId}`
    );
    if (data.success) {
      toast.success(`category is deleted`);

      getAllCategory();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Somtihing went wrong");
  }
};





  return (
    <Layout title={"Dashboard - Create Category"}>
    <div className="text-center bg-slate-300 shadow shadow-black/30 dark:shadow-black/50">
      <div className="grid md:grid-cols-3 ">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 col-span-2">
          <h1 className='text-5xl mb-10 font-bold'>Manage Category</h1>
          
<div className="relative overflow-x-auto px-4">
<div className="p-3">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
  <table className="w-full text-md text-left text-black bg-white ">
    <thead className="">
      <tr>
        <th scope="col" className=" py-3 rounded-l-lg text-2xl px-2">
         Names
        </th>
        <th scope="col" className=" py-3 text-2xl px-2">
        Actions
        </th>
       
      </tr>
    </thead>
    <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr className='text-xl shadow shadow-black/30   bg-gray-900 lg:rounded-3xl text-white  bg-opacity-75 border border-gray-300'>
                        <td key={c._id} className='text-2xl pl-2'>{c.name} </td>
                        <td>
                          <button
                            className="p-2 bg-blue-600 m-1   rounded-full"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          
                          >
                            Edit
                          </button>
                          <button className='p-2 bg-red-600 rounded-full' onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>               
   
  </table>
</div>
<Modal
              onCancel={() => setVisible(false)}
              footer={null}
              open={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>

      
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default CreateCategory