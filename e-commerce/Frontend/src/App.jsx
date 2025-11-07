import React from 'react'
import Navber from './components/Navber'
import {Routes , Route} from 'react-router-dom'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
      <Navber/>
     
      <Routes>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={ <h1>Register page</h1>}/>
      </Routes>
    </div>

  )
}

export default App
