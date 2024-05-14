import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { doLogin } from '../../redux/UserAuthSlice'

const Header = () => {

  let userLogin = useSelector(state=>state.UserAuthSlice);
  let dispatch = useDispatch();
	useEffect(()=>{
		if(localStorage.getItem("access-token")){
			dispatch(doLogin());
		}
	},[])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Task</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <NavLink className="nav-link" to="/">Home</NavLink>
       
        {
          userLogin
          ?
          <>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </>
          :
          <NavLink className="nav-link" to="/login">Login</NavLink>
        }
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header