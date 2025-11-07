import React from 'react'
import Navber from './components/Navber'
import {Routes , Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <div>
      <Navber/>
     
      <Routes>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={ <Register/>}/>
      </Routes>
    </div>

  )
}

export default App
