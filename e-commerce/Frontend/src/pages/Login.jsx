import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen w-full bg-gray-400 flex justify-center items-center'>
      <form className='border w-[450px] p-5 rounded-2xl bg-white'>
        <h1 className='text-center text-2xl font-semibold'>Login Here</h1>
        <br />
        <label htmlFor="email">Email :</label>
        <br />
        <input type="email"  id="email" className='border w-full p-1 rounded'  />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <br />
        <input type="password"  id="password" className='border w-full p-1 rounded'  />

        <br />
        <br />
        <div className='flex justify-center'>
            <button className='bg-blue-500 text-white py-1 px-3 rounded-xl text-xl '>Login</button>
        </div>
        <br />
        <p>if you don't have an account? <Link to={'/register'}>Register</Link></p>
      </form> 
    </div>
  )
}

export default Login
