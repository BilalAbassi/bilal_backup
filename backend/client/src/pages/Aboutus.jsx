import React from 'react'
import Layout from '../compunents/layout/Layout'
import image from "../assets/freeabout.jpg"

const Aboutus = () => {
  return (
    <Layout title="about us "><div className='grid grid-cols-2 min-h-screen'>
      <img src={image} className='h-screen w-screen '/>
    <div className='  bg-slate-200'>
    
    <h1 className='text-6xl pb-10 font-bold text-center'>About us</h1>
    <p className='text-xl pl-20 '>Lorem ipsum dolorsit amet consectetur adipisicing elit.Illo ex ipsa sint labore neque sed beatae dicta magni doloribus enim molestiae eius facere, inventore, ipsum porro hic sunt dignissimos autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad porro voluptas accusamus nisi repellat culpa harum aperiam nostrum perferendis? Magni reprehenderit ducimus dolore minima recusandae dicta reiciendis tenetur sint itaque laudantium impedit, praesentium earum quasi neque rem voluptates eaque illum quia, accusamus incidunt. Blanditiis atque cum distinctio officia impedit, necessitatibus tempora recusandae iste animi voluptatem aperiam doloremque suscipit? Deleniti laboriosam eos minima, ullam, illum, consectetur expedita vero esse natus labore animi qui? Sequi officiis ipsa modi magnam, nam eaque vel, quos culpa nemo suscipit debitis obcaecati atque.
      Consequuntur asperiores quam dolorum mollitia nesciunt animi dignissimos dolorem laboriosam libero exercitationem.</p>
    
    </div></div></Layout>
  )
}

export default Aboutus