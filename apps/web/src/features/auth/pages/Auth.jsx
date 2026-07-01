import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import './auth.scss'
import {Outlet, useLocation} from 'react-router-dom'
import {motion} from 'motion/react'

const Auth = () => {
  const {pathname} = useLocation()
  
  const isRegister = pathname === "/auth/register";

  return (
    <div className="authPage" style={{flexDirection: isRegister ? "row-reverse" : "row"}}>
        <motion.div
         animate={{ x: 0, opacity: 1 }}
         initial={{ x: -100, opacity: 0 }}
         exit={{ x: 100, opacity: 0 }}
         transition={{ duration: 0.5 }}
         className="formContainer">
            <Outlet />
        </motion.div>
        <motion.div 
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="imgContainer">
             <div className="holdTextAndImg">
             <img src="/neoposttypowhite.svg" alt="logowhite" />
            <img className="authImg" src="/authImg.png" alt="loginImg" />
            <div className="imgText">
              <h5>GENERATE BETTER</h5>
              <h5>CONTENT, FASTER</h5>
              {isRegister ? (<h5>SIGN UP TO</h5>): (<h5>SIGN IN TO</h5>)}
              <h5>CONTINUE.</h5>

            </div>
            </div>
            
        </motion.div>
        
    </div>
  )
}

export default Auth