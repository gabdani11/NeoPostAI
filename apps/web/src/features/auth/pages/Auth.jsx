import React from 'react'
import Login from '../components/Login'
import './auth.scss'

const Auth = () => {
  return (
    <div className="authPage">
        <div className="loginContainer">
            <Login/>
        </div>
        <div className="registerContainer">

        </div>
        <div className="imgContainer">
            <img src="/authImg.png" alt="loginImg" />
        </div>
        
    </div>
  )
}

export default Auth