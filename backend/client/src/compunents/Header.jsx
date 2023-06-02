import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingBag} from "react-icons/fa"
import { useAuth } from '../context/Auth'
import { toast } from 'react-hot-toast'
import {IoMdArrowDropdown} from "react-icons/io"
import {IoMdArrowDropup} from "react-icons/io"
import SearchInput from './Form/SearchInput'




const Header = () => {
  const [auth,setAuth]=useAuth()
  const [open,setopen]=useState(false)
const handleLogout =()=>{
  setAuth({
    ...auth,user:null,token:""
  })
  localStorage.removeItem("auth")
  toast.success("Logout Successfully")
}

  return (
    <>
    <div className=' bg-gradient-to-b from-gray-900 to-gray-600  text-white p-4 flex flex-wrap justify-between   items-center' style={{fontFamily: 'Poppins'}}>
      <div className='p-2 flex'><FaShoppingBag className='inline mr-1 text-4xl'/><h1 className='p-2 text-xl'>Estore</h1></div>
      <SearchInput/>
      <div className=''
      ><ul  className='flex flex-wrap place-items-baseline  text-xl'><li className=' p-2  hover:animate-pulse'><Link to="/">HOME</Link></li>
      <li className=' p-2  hover:animate-pulse'><Link to="/category">CATEGORY</Link></li>
      {!auth.user ?(<>
      <li className=' p-2  hover:animate-pulse'><Link to="/register"><button className='bg-slate-500 rounded-sm p-2
       active:border-white duration-300 active:text-white border-2 border-transparent'>REGISTER</button></Link></li>
      <li className=' p-2  hover:animate-pulse '><Link to="/login"><button className='bg-slate-500 p-2 rounded-sm 
       active:border-white duration-300 active:text-white border-2 border-transparent'>LOGIN</button></Link></li></>)
       :(      
        <li className='p-2 flex '><button onClick={()=>{setopen((pre)=>!pre)}} className=' relative p-2'>{auth?.user?.name}
        
        { !open ?(<IoMdArrowDropdown className='inline text-xl'/>):
        <IoMdArrowDropup className='inline text-xl'/>
        }</button>
        {open ?<ul className='absolute top-[69px] text-lg'>
        <li className=' p-2 bg-slate-500 '><Link to={`/dashboard/${auth?.user?.role===1 ? "admin":""}`}>
          <button className=' text-white '>Dashbooard</button></Link></li>
        <li className=' p-2 bg-slate-500 border-b-2 border-blue-50  '><Link to="/"><button className=' text-slate-100 
         ' onClick={handleLogout}>LOGOUT</button></Link></li>
        

</ul> :""}
        
        
        </li>
             )} 

      <li className='p-2  hover:animate-pulse'><Link to="/cart">CART(0)</Link></li></ul></div>
      
      
    </div>
    
    
    
    </>
  )
}

export default Header