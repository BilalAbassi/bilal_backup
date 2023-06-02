import React from 'react'
import Layout from '../../compunents/layout/Layout'
import AdminMenu from '../../compunents/layout/AdminMenu'
const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
    <div className="text-center bg-slate-300 shadow shadow-black/30 dark:shadow-black/50 h-screen">
      <div className="grid grid-cols-3">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 col-span-2">
          <h1 className='text-4xl'>Users</h1>
        </div>
      </div>
    </div>
  </Layout>
    )
}

export default Users