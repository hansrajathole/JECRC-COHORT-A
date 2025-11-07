import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {


    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/user/register",{username , email , password})
        .then((res)=>{
            console.log(res);
            localStorage.setItem("token", res.data.token)
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
            seterror(err.response.data.message)
            setTimeout(()=>{
                seterror("")
            },3000)
        })

    }


  return (
    <div className='h-screen w-full bg-gray-400 flex justify-center items-center'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='border w-[450px] p-5 rounded-2xl bg-white'>
        <h1 className='text-center text-2xl font-semibold'>Register Here</h1>
         <label htmlFor="username">Username :</label>
        <br />
        <input 
        value={username}
        onChange={(e)=>{
            console.log(e.target.value);
            setusername(e.target.value)
            
        }}
        type="text"  id="useranme" className='border w-full p-1 rounded'  />
        <br />
        <br />
        <label htmlFor="email">Email :</label>
        <br />
        <input
        value={email}
        onChange={(e)=>{
            setemail(e.target.value)
        }}
        
        type="email"  id="email" className='border w-full p-1 rounded'  />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <br />
        <input
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value)
        }}
        type="password"  id="password" className='border w-full p-1 rounded'  />

        <br />
        <br />
        <div className='flex justify-center'>
            <button className='bg-blue-500 text-white py-1 px-3 rounded-xl text-xl '>Register</button>
        </div>
        {
            error && <p className='text-red-500'>{error}</p>
        }
        <br />
        <p>if you have an account? <Link to={'/login'}>Login</Link></p>
      </form> 
    </div>
  
  )
}

export default Register
