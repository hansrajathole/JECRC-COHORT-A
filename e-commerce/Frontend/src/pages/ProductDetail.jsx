import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams()
    const navigate = useNavigate()
    const productId = params.productId
    const token = localStorage.getItem('token')

    const [productDetail, setProductDetail] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])

    const getProductDetail = () => {
        setLoading(true)
        axios
            .get(`http://localhost:3000/product/detail/${productId}`, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            })
            .then((res) => {
                setProductDetail(res.data.product)
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => setLoading(false))
    }

    const deleteHandler = ()=>{
        axios.delete(`http://localhost:3000/product/delete/${productId}`,{
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
                                    
                                })
    }

    const formatPrice = (p) => {
        if (p == null) return '0'
        return new Intl.NumberFormat('en-IN').format(p)
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-500">Loading product…</div>
            </div>
        )
    }

    if (!productDetail) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">Product not found</div>
            </div>
        )
    }

    const imageSrc = productDetail.image || productDetail.images?.[0] || 'https://via.placeholder.com/640x480?text=No+Image'

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    <div className="flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                        <img src={imageSrc} alt={productDetail.title || 'Product image'} className="w-full h-96 object-cover" />
                    </div>

                    <div className="p-2 flex flex-col">
                        <h1 className="text-2xl font-semibold text-gray-900">{productDetail.title || 'Untitled product'}</h1>
                        <div className="mt-2 flex items-center gap-3">
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded">{productDetail.category || 'Uncategorized'}</span>
                            <span className="text-gray-500 text-sm">SKU: {productDetail._id}</span>
                        </div>

                        <p className="mt-4 text-gray-700 flex-1">{productDetail.description || 'No description available.'}</p>

                        <div className="mt-4 flex items-end justify-between">
                            <div>
                                <div className="text-gray-500 text-sm">Price</div>
                                <div className="text-3xl font-bold text-indigo-600">₹{formatPrice(productDetail.price)}</div>
                            </div>

                           
                        </div>

                        <div className="mt-6 flex gap-3">
                            <button className="px-3 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                            onClick={()=>{
                                navigate(`/product/update/${productDetail._id}`)
                                
                            }}
                            >Update</button>
                            <button className="px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                            onClick={()=>{
                                deleteHandler()
                            }}
                            >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
