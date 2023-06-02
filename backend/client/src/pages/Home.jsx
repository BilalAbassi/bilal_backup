import React,{useState,useEffect} from 'react'
import Layout from '../compunents/layout/Layout'
import { Checkbox, Radio } from "antd";
import axios from 'axios'
import { Prices } from '../compunents/Prices';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
   //get all cat
   const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:8080/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:8080/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    
    <Layout title={"ALl Products - Best offers "}>
      <div className='grid md:grid-cols-4 gap-4 grid-cols-1 '>

<div className='col-span-1 text-center min-h-screen bg-gray-500'><h1 className='text-5xl pt-4 pl-1'>Filters</h1>

<div className='grid grid-cols-1 co md:ml-2'> {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) =>handleFilter(e.target.checked, c._id)} className='text-white mb-4'
              >
                {c.name}
              </Checkbox>
            ))}</div>
            {/* price filter */}

            <div className=' grid mt-10  '>
          <h4 className=" text-4xl text-center">Filter By Price</h4>
          <div className=" justify-start grid">
            <Radio.Group  onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id} className=' grid grid-cols-1'>
                  <Radio className='font-bold p-2 text-lg ' value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
            </div>
            <button className='p-2 ml-10 mr-10 text-white bg-red-600 mb-4' onClick={()=>window.location.reload()}>Reset</button>

          </div>



</div>
<div className='col-span-3'><h1 className='text-4xl pt-4 text-center font-sans'>All Products</h1>
{JSON.stringify(checked)}
{JSON.stringify(radio)}

<div>
<div className="grid md:grid-cols-3 gap-1 justify-center md:justify-start">
            {products?.map((p) => (
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
        
            ))}</div>
 


</div>
<div className="m-4 p-4 text-center">
            {products && products.length < total && (
              <button
                className="bg-gray-600 px-2 py-4 rounded-md text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>




</div>




      </div>
    </Layout>
  )
}

export default Home