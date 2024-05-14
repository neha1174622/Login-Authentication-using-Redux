import React from 'react'
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import Home from '../components/feature/Home'

import Login from '../components/feature/Login'
import Logout from '../components/feature/Logout'
import Profile from '../components/feature/Profile'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
          
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            
            <Route path='' element={<ProtactedRoute />}>
                  <Route path='profile' element={<Profile />} />
            </Route>

        </Routes>
    </>
  )
}


let ProtactedRoute = ()=>{
  
  
    if(! localStorage.getItem("access-token"))
      {
        return <Navigate to="/login" />        
      }
  
  return(
    <Outlet />
  )
}

export default AllRoutes