import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Navber = () => {

  const token = localStorage.getItem("token")

  const navigate = useNavigate()


  return (
    <div className='h-16 w-full bg-red-400 flex justify-between items-center px-4'>
      <h1 className='text-2xl font-semibold'>Shoppy</h1>
      <div className='border py-1 px-4 rounded-2xl'>
        <input type="text" className='outline-none' />
        <button><i className="ri-search-line"></i></button>
      </div>
      <div className='flex gap-5'>

        {
          token && <Link to={'/product/create'} className=' border py-1 px-2 rounded-xl bg-green-400 '>Create Product</Link>
        }
        {
          token ? <button onClick={()=>{
            localStorage.removeItem("token")
            navigate("/login")
          }} >Logout</button> : <button onClick={()=>{
            navigate("/login")
          }}>Login</button>


      
        }
        
      </div>
    </div>
  )
}

export default Navber
