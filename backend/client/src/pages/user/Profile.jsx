import React from 'react'
import Layout from '../../compunents/layout/Layout'
import UserMenu from "../../compunents/layout/UserMenu"

const Profile = () => {
  return (
<Layout title={"Dashboard - Create Category"}>
    <div className="text-center bg-slate-300 shadow shadow-black/30 dark:shadow-black/50 h-screen">
      <div className="grid md:grid-cols-3 ">
        <div className="col-md-3">
          <UserMenu/>
        </div>
        <div className="col-md-9 col-span-2">
          <h1 className='text-4xl'>Profile</h1>
        </div>
      </div>
    </div>
  </Layout>

    )
}

export default Profile