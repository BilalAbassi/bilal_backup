import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-gradient-to-b from-gray-900 to-gray-600  text-white p-4 '><h4 className='text-center text-xl'>
      All right reserved &copy; </h4>
      <p className='text-center mt-1'>
        <Link to="/about" className='p-4 hover:text-red-800'>About Us</Link>
        |
        <Link to="/contact" className='p-4 hover:text-red-800'> Contact Us </Link>
        |
        <Link to="/Policy" className='p-4 hover:text-red-800'> Our Policy</Link>

      </p>
      
      
      </div>
  )
}

export default Footer