import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { doLogout } from '../../redux/UserAuthSlice'

const Logout = () => {
  let disp = useDispatch();
    useEffect(()=>{
      disp(doLogout());
    },[])
    localStorage.removeItem("access-token");
    
  return (
    <Navigate to="/login" />
  )
}

export default Logout