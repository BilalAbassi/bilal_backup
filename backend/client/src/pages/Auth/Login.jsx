import React from 'react'
import Layout from '../../compunents/layout/Layout'
import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import toast  from 'react-hot-toast';
import { useAuth } from '../../context/Auth'




const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [auth,setauth]=useAuth()

  const navagate = useNavigate()


  const handelSubmite =async(e)=>{e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login",{email,password}) 
      if(res.data.success){
        localStorage.setItem("auth", JSON.stringify(res.data));


        navagate("/")
        toast.success(res.data.message)
        setauth({
          ...auth,user:res.data.user,token:res.data.token,
        })
      } 
      else{toast.error(res.data.message,), {
        duration: 4000,}}
      
      
       } catch (error) {
        console.log(error)
        toast.error("Something went Worng")
        
       }
        }

  return (
<Layout>
    <div>
    <div className='grid place-items-center h-screen'><div className='  shadow shadow-black/30 dark:shadow-black/50 w-screen h-screen lg:w-[50%] lg:h-[80%] text-center bg-gray-900 lg:rounded-3xl text-white  bg-opacity-75 border border-gray-300'>
      <h1 className='text-4xl font-bold p-4  2xl:p-16 2xl:text-8xl' style={{fontFamily: 'Playfair Display'}}>Login Form</h1>
      <form className="grid grid-cols-1" onSubmit={handelSubmite}>
        
      <input type='email' placeholder='Enter your Email' className='mt-4 p-4 md:mr-10 md:ml-10 ml-1 mr-1   xl:mb-12 xl:mt-12
      shadow shadow-black/30 dark:shadow-black/75 bg-gray-900 bg-opacity-75 2xl:p-12 2xl:text-4xl md:p-6' required style={{fontFamily: 'Poppins'}}
     value={email} onChange={(e)=> setemail(e.target.value)}/>
      <input type='password' placeholder='Enter your Password' className='mt-4 p-4 md:mr-10 md:ml-10 xl:mb-10 xl:mt-8
      shadow shadow-black/30 dark:shadow-black/75   ml-1 mr-1   bg-gray-900 bg-opacity-75 2xl:p-12 2xl:text-4xl md:p-6'
      value={password} onChange={(e)=> setpassword(e.target.value)}  required style={{fontFamily: 'Poppins'}}/>
      
    
      <button className='bg-blue-900 
      ml-28  mr-28 p-3 text-md md:ml-52 mt-4 md:mr-52 md:text-lg xl:ml-60 xl:mr-60 xl:p-6 
      2xl:mr-96 2xl:ml-96 2xl:p-10 2xl:text-4xl shadow shadow-black/30 dark:shadow-black/75'>Login</button>
      <Link className=' p-4 2xl:text-4xl' to="/forgot-password">Forget Password</Link>
      
    
    
      </form>
      
      </div>
    </div>
          </div>
        </Layout>
  )
}

export default Login