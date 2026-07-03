import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import useAuth from '../hook/UseAuth.jsx'
import './style.scss'
import GoogleBtn from './googleLoginBtn/GoogleBtn'

const Login = () => {
  const {loginUser} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
    loginUser({email, password})
  }
  return (
    <div className="login-form form">
      <div className="top">
        <img src="/neoposttypo.svg" alt="Logo" />
        <h1 className="topTitle">
            Welcome Back
        </h1>
        <p className="topDesc">
            Continue creating and managing <br/>
            content with AI.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="formBox">
        <label htmlFor="email">Email</label>
        <div className="emailBox inputBox">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22">
	            <path d="M0 0h22v22H0z" fill="none" />
	            <path fill="currentColor" d="M1 5h1V4h18v1h1v13h-1v1H2v-1H1zm2 12h16V9h-1v1h-2v1h-2v1h-2v1h-2v-1H8v-1H6v-1H4V9H3zM19 6H3v1h2v1h2v1h2v1h4V9h2V8h2V7h2z" />
            </svg>
            <input type="email" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </div>
        
        <label htmlFor="password">Password</label>
        <div className="passwordBox inputBox">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M5 8h14v2H5zm0 12h14v2H5zM3 10h2v10H3zm16 0h2v10h-2zM7 4h2v4H7zm2-2h6v2H9zm6 2h2v4h-2z" />
            </svg>

            <input type={passwordVisible ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <div className="passwordToggle" onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	                <path d="M0 0h24v24H0z" fill="none" />
	                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		                <path d="M3 13c3.6-8 14.4-8 18 0" />
		                <path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
	                </g>
                </svg>) : 
                (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
	            <path d="M0 0h256v256H0z" fill="none" />
	            <path fill="currentColor" d="M226 171.47a3.9 3.9 0 0 1-2 .53a4 4 0 0 1-3.47-2l-21.15-37a120 120 0 0 1-41.91 19.53l6.53 38.81a4 4 0 0 1-3.29 4.6a4 4 0 0 1-.67.06a4 4 0 0 1-3.94-3.34l-6.41-38.5a128.2 128.2 0 0 1-43.28 0l-6.41 38.5a4 4 0 0 1-4 3.34a4 4 0 0 1-.67-.06a4 4 0 0 1-3.29-4.6l6.48-38.83A120 120 0 0 1 56.62 133l-21.15 37a4 4 0 0 1-3.47 2a3.9 3.9 0 0 1-2-.53a4 4 0 0 1-1.47-5.47l21.68-37.94a148.2 148.2 0 0 1-21.32-21.56a4 4 0 1 1 6.22-5C52.25 122.71 82.29 148 128 148s75.75-25.29 92.89-46.51a4 4 0 1 1 6.22 5a148.2 148.2 0 0 1-21.32 21.56L227.47 166a4 4 0 0 1-1.47 5.47" />
            </svg>
              )}
            </div>
            

        </div>
        <a href="#" id="forgotPassword">Forgot Password?</a>
        
        <button className='loginBtn submitBtn' type="submit">Login</button>
      </form>
      <div className="bottom">
        <label>or</label>
         <GoogleBtn/>
        <p className="registerLabel">
          Don't have an account?{" "}
         <Link to="/auth/register" style={{textDecoration:"underline"}}>Register</Link>
        </p>
      </div>
      
    </div>
  )
}

export default Login