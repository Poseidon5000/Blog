import React from 'react'
import './Register.css'
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input type='text' className='registerInput' placeholder='Enter Your Username...'/>

            <label>Email</label>
            <input type='email' className='registerInput' placeholder='Enter Your Email...'/>

            <label>Password</label>
            <input type='password' className='registerInput' placeholder='Enter Your Password...'/>

            <label>Confirm Password</label>
            <input type='password' className='registerInput' placeholder='Confirm Your Password...'/>

            <button className='registerButton' >Register</button>


           
        </form>
         <button className='registerLoginButton' >
          <Link to = "/login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link>
          </button>
    </div>
  )
}

export default Register