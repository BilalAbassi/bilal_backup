import React from 'react'
import Layout from '../../compunents/Layout/Layout'
import AdminMenu from '../../compunents/layout/AdminMenu'
import { useAuth } from '../../context/Auth'
const AdminDashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout>
<div>
  <div className='grid lg:grid-cols-3 grid-cols-1'>
    <div className=''><AdminMenu/></div>
    <div className='md:ml-4 col-span-2'><div>
      <ul>
      <li className='text-center md:text-4xl p-8' style={{fontFamily:'Playfair Display'}}>{auth?.user?.name}</li>
    <li className='text-center md:text-4xl p-8' style={{fontFamily:'Playfair Display'}}>{auth?.user?.email}</li>
    <li className='text-center md:text-4xl p-8' style={{fontFamily:'Playfair Display'}}>{auth?.user?.phone}</li>
    <li className='text-center md:text-4xl p-8' style={{fontFamily:'Playfair Display'}}>{auth?.user?.adddress}</li>
      </ul>
    
    
    
    </div></div>
  </div>
</div>


    </Layout>
  )
}

export default AdminDashboard