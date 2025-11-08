import React from 'react'
import { useNavigate } from 'react-router-dom';
const Product = ({ product  }) => {

    console.log(product);

    const navigate =  useNavigate()

  return (
    <div className="h-auto w-[300px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group">
      <div className="h-56 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={'Product'}
          className="h-full w-full object-cover"
          onClick={()=>{
            navigate(`/product/detail/${product._id}`)
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg line-clamp-2">{product.title}</h3>
        
        <h3 className="text-gray-900  text-lg line-clamp-2">{product.category}</h3>
    

        <p className="mt-2 text-indigo-600 font-bold text-xl">₹{product.price}</p>

      </div>
    </div>
  )
}

export default Product
