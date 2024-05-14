import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as YUP from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { doLogin } from '../../redux/UserAuthSlice'

let loginSchema = YUP.object({
    email : YUP.string().required("Insert Email Id") ,
    password : YUP.string().required("Insert Password") ,
})

const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [spinner, setSpinner] = useState(false);
    let [errMsg, setErrMsg] = useState("");
    let loginFrm = useFormik({
        validationSchema : loginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : async(formdata)=>{
            setSpinner(true);
            try{
                dispatch(doLogin());
                let response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", formdata);
                localStorage.setItem("access-token", response.data.access_token);
                navigate("/");
            }catch{
                
                setSpinner(false);
                setErrMsg("This Email and Password is Incorrect ");
            }
            
        }
    })

  return (
    <div className="container my-5">
        <div className="row">
            <form onSubmit={loginFrm.handleSubmit}>
            <div className="col-md-6 offset-md-3">
                <h4>Login</h4>
                <div className='my-2'>
                    <label>Username/Email</label>
                    <input name='email' onChange={loginFrm.handleChange} type='text' className={'form-control ' + (loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : '')} />
                </div>
                <div className='my-2'>
                    <label>Password</label>
                    <input name='password' onChange={loginFrm.handleChange} type='password' className={'form-control ' + (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} />
                </div>
                <p className='text-danger text-center'>{errMsg}</p>
                <br />
                <button type='submit' className='btn btn-success'>Login {spinner ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login