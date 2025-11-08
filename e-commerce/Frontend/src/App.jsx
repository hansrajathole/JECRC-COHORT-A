import React from 'react'
import Navber from './components/Navber'
import {Routes , Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import UpdateProduct from './pages/UpdateProduct'

const App = () => {
  return (
    <div>
      <Navber/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/product/create' element={ <CreateProduct/>}/>
        <Route path='/product/detail/:productId' element={ <ProductDetail/>}/>
        <Route path='/product/update/:productId' element={ <UpdateProduct/>}/>

      </Routes>
    </div>

  )
}

export default App
