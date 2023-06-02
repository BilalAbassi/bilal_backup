import React from 'react'
import Layout from '../../compunents/layout/Layout'
import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import toast  from 'react-hot-toast';


const ForgetPassword = () => {
  const [email,setemail]=useState("")
const [newPassword,setNewpassword]=useState("")
const [answer,setAnswer]=useState("")


const navagate = useNavigate()


const handelSubmite =async(e)=>{e.preventDefault()
  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth//forgot-password",{email,newPassword,answer}) 
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);

      navagate("/login");
    } else {
      toast.error(res.data.message);
    }
    
     } catch (error) {
      console.log(error)
      toast.error("Something went Worng")
      
     }
      }


  return (
    <>
    <Layout>
    <div>
    <div className='grid place-items-center h-screen'><div className='  shadow shadow-black/30 dark:shadow-black/50 w-screen h-screen lg:w-[50%] lg:h-[80%] text-center bg-gray-900 lg:rounded-3xl text-white  bg-opacity-75 border border-gray-300'>
      <h1 className='text-4xl font-bold p-4  2xl:p-16 2xl:text-8xl' style={{fontFamily: 'Playfair Display'}}>Reset Password</h1>
      <form className="grid grid-cols-1" onSubmit={handelSubmite}>
        
      <input type='email' placeholder='Enter your Email' className='mt-4 p-3 md:mr-10 md:ml-10 ml-1 mr-1 xl:mt-12
      shadow shadow-black/30 dark:shadow-black/75 bg-gray-900 bg-opacity-75 2xl:p-12 2xl:text-4xl md:p-6' required style={{fontFamily: 'Poppins'}}
     value={email} onChange={(e)=> setemail(e.target.value)}/>
      <input type='password' placeholder='Enter your Password' className='mt-4 p-3 md:mr-10 md:ml-10  xl:mt-8
      shadow shadow-black/30 dark:shadow-black/75   ml-1 mr-1   bg-gray-900 bg-opacity-75 2xl:p-12 2xl:text-4xl md:p-6'
      value={newPassword} onChange={(e)=> setNewpassword(e.target.value)}  required style={{fontFamily: 'Poppins'}}/>
       <input type='text' placeholder='enter hoby or sport' className='mt-4 p-3 md:mr-10 md:ml-10  xl:mt-8
      shadow shadow-black/30 dark:shadow-black/75   ml-1 mr-1   bg-gray-900 bg-opacity-75 2xl:p-12 2xl:text-4xl md:p-6'
      value={answer} onChange={(e)=> setAnswer(e.target.value)}  required style={{fontFamily: 'Poppins'}}/>
      
    
      <button className='bg-blue-900 
      ml-24  mr-24 p-2 lg:p-4    md:ml-40 mt-4 md:mr-40  xl:ml-60 xl:mr-60 xl:p-6 
      2xl:mr-96 2xl:ml-96 2xl:p-10 2xl:text-4xl shadow shadow-black/30 dark:shadow-black/75'>RESET</button>
      
    
    
      </form>
      
      </div>
    </div>
          </div>
        </Layout>
    
    
    
    
    </>
  )
}

export default ForgetPassword