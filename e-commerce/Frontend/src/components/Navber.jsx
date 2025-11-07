import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='h-16 w-full bg-red-400 flex justify-between items-center px-4'>
      <h1 className='text-2xl font-semibold'>Shoppy</h1>
      <div className='border py-1 px-4 rounded-2xl'>
        <input type="text" className='outline-none' />
        <button><i className="ri-search-line"></i></button>
      </div>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  )
}

export default Navber
