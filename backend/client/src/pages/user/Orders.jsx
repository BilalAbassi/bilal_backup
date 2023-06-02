import React from 'react'

import UserMenu from "../../compunents/layout/UserMenu"
import Layout from '../../compunents/layout/Layout'
const Orders = () => {
  return (
<Layout title={"Dashboard - Create Category"}>
    <div className="text-center bg-slate-300 shadow shadow-black/30 dark:shadow-black/50 h-screen">
      <div className="grid md:grid-cols-3 ">
        <div className="col-md-3">
          <UserMenu/>
        </div>
        <div className="col-md-9 col-span-2">
          <h1 className='text-4xl'>Orders</h1>
        </div>
      </div>
    </div>
  </Layout>

    )
}

export default Orders