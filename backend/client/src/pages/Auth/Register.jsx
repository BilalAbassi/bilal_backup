import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import React from 'react'

import Layout from '../../compunents/layout/Layout'
import toast  from 'react-hot-toast';



const Register = () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [phone,setphone]=useState("")
  const [address,setaddress]=useState("")
  const [answer,setanswer]=useState("")

  const navagate = useNavigate()

  const handelSubmite =async(e)=>{e.preventDefault()
 try {
const res = await axios.post("http://localhost:8080/api/v1/auth/register",{name,email,password,phone,address,answer}) 
if(res.data.success){toast.success(res.data.message)
  navagate("/login")} 
else{toast.error(res.data.message)}


 } catch (error) {
  console.log(error)
  toast.error("Something went Worng")
  
 }
  }

  return (
    <Layout>
      <div>
<div className='grid place-items-center h-screen'><div className='  shadow shadow-black/30 dark:shadow-black/50 w-screen h-screen lg:w-[50%] lg:h-[80%] text-center bg-gray-900 lg:rounded-3xl text-white  bg-opacity-75 border border-gray-300'>
  <h1 className='text-4xl font-bold p-4  2xl:p-16 2xl:text-8xl' style={{fontFamily: 'Playfair Display'}}>Register page</h1>
  <form className="grid grid-cols-1 " onSubmit={handelSubmite}>
    

  <input type='text' placeholder='Enter your Name' className='mt-4 p-2 md:mr-10 md:ml-10 ml-1 mr-1  bg-gray-900 bg-opacity-75 
  shadow shadow-black/30 dark:shadow-black/75 2xl:p-7 2xl:text-2xl' style={{fontFamily: 'Poppins'}}
  value={name} onChange={(e)=> setname(e.target.value)}
  required />
  <input type='email' placeholder='Enter your Email' className='mt-4 p-2 md:mr-10 md:ml-10 ml-1 mr-1 
  shadow shadow-black/30 dark:shadow-black/75 bg-gray-900 bg-opacity-75 2xl:p-7 2xl:text-2xl' required style={{fontFamily: 'Poppins'}}
 value={email} onChange={(e)=> setemail(e.target.value)}/>
  <input type='password' placeholder='Enter your Password' className='mt-4 p-2 md:mr-10 md:ml-10 
  shadow shadow-black/30 dark:shadow-black/75   ml-1 mr-1  bg-gray-900 bg-opacity-75 2xl:p-7 2xl:text-2xl'
  value={password} onChange={(e)=> setpassword(e.target.value)}  required style={{fontFamily: 'Poppins'}}/>
  <input type='number' placeholder='Enter your Phone Number' className='mt-4 p-2 md:mr-10 md:ml-10 
  shadow shadow-black/30 dark:shadow-black/75 ml-1 mr-1 bg-gray-900 bg-opacity-75 2xl:p-7 2xl:text-2xl'
   value={ phone} onChange={(e)=> setphone(e.target.value)} required style={{fontFamily: 'Poppins'}} />
  <input type='text' placeholder='Enter your Address' className='mt-4 p-2 md:mr-10 md:ml-10 ml-1
  shadow shadow-black/30 dark:shadow-black/75 mr-1 m  bg-gray-900 bg-opacity-75 2xl:p-7 2xl:text-2xl'
  value={address} onChange={(e)=> setaddress(e.target.value)} required  style={{fontFamily: 'Poppins'}}/>
  <input type='text' placeholder='Your Hobby or Favourite Sport' className='mt-4 p-2 md:mr-10 md:ml-10 ml-1
  shadow shadow-black/30 dark:shadow-black/75 mr-1 m  bg-gray-900 bg-opacity-75 2xl:p-7 2xl:text-2xl'
  value={answer} onChange={(e)=> setanswer(e.target.value)} required  style={{fontFamily: 'Poppins'}}/>


  <div><button className='bg-blue-900  mt-5 mb-4 2xl:px-24 2xl:text-2xl  2xl:mt-24 2xl:py-10 p-2  shadow shadow-black/30 dark:shadow-black/75'>Register</button></div>
  


  </form>
  
  </div>
</div>
      </div>
    </Layout>
  )
}

export default Register