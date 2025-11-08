import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
const Home = () => {


    const [productData, setproductData] = useState([])

    useEffect(() => {
     getProductData()
    }, [])
    



    const getProductData = ()=>{
        axios.get("http://localhost:3000/product/")
        .then((res)=>{
            // console.log(res.data.products);
            setproductData(res.data.products)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div className='bg-gray-300 w-full flex gap-1.5 p-4'>
    {
        productData?.map((product, index)=>{
            return <Product product={product} />
            
        })
    }
    </div>
  )
}

export default Home
