import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {

    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState(0)
    const [category, setcategory] = useState("")
    const [image, setimage] = useState("")


    const [error, seterror] = useState("")

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const submitHandler = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/product/create",{ title , description, price, category , image}, {
            headers : {
                Authorization : `bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data);
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
            seterror(err.response.data.message)
            setTimeout(()=>{
                seterror("")
            },5000)
        })

    }


  return (
    <div className='h-screen w-full bg-gray-400 flex justify-center items-center'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='border w-[450px] p-5 rounded-2xl bg-white'>
        <h1 className='text-center text-2xl font-semibold'>Product Create</h1>
        <br />
        <label htmlFor="title">Title :</label>
        <br />
        <input 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        type="text"  id="title" className='border w-full p-1 rounded'  />
        <br />
        <br />
        <label htmlFor="description">Description :</label>
        <br />
        <input
         value={description}
        onChange={(e)=>{
          setdescription(e.target.value)
        }}
        type="text"  id="description" className='border w-full p-1 rounded'  />

        <br />
        <br />
         <label htmlFor="image">Image :</label>
         <br />
        <input
         value={image}
        onChange={(e)=>{
          setimage(e.target.value)
        }}
        type="text"  id="image" className='border w-full p-1 rounded'  />

        <br />
        <br />
         <label htmlFor="category">Category :</label>
        <input
         value={category}
        onChange={(e)=>{
          setcategory(e.target.value)
        }}
        type="text"  id="category" className='border w-full p-1 rounded'  />

        <br />
        <br />
         <label htmlFor="price">Price :</label>
        <input
         value={price}
        onChange={(e)=>{
          setprice(e.target.value)
        }}
        type="number"  id="price" className='border w-full p-1 rounded'  />

        <br />
        <br />
        <div className='flex justify-center'>
            <button className='bg-blue-500 text-white py-1 px-3 rounded-xl text-xl '>Submit</button>
        </div>
        {
            error && <p className='text-red-500'>{error}</p>
        }
        <br />
       
      </form> 
    </div>
  )
}

export default CreateProduct
