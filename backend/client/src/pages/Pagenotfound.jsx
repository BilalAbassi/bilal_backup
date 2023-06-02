import React from 'react'
import Layout from '../compunents/layout/Layout'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout><div className='bg-white min-h-[80vh] text-center'><h1 className='text-6xl font-extrabold pt-32 mb-8'>
    404  Page not found</h1><Link to='/' className='p-2 bg-slate-300 mt-10'><button>Go Back</button></Link></div></Layout>
  )
}

export default Pagenotfound