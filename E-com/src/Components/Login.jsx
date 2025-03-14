import React, { useState } from 'react'
import './Login.css'
import LoginImage from '../Images/Login-Image/Login.jpg';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
  const [name, setName]=useState(""); 
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");   
  const [error, setError] = useState('');  
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

const handleLogin=(e)=>{
  e.preventDefault();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log("Stored User:", storedUser);
  if(!storedUser){
    setError("No user data found. Please sign up");
    return;
  }
  if(storedUser.email !== email){
    setError("Invalid email. Please enter a valid email");
    return;
  }
  if(storedUser.password !== password){
    setError("Invalid password. Please enter a valid password");
    return;
  }

    setAlertMessage('Login Successful! 🎉');
    setTimeout(() => setAlertMessage(''), 2000);
    navigate('/home');
};

  return (
    <>
    {alertMessage && <div className="alert-box">{alertMessage}</div>}
    <div className="login-container">
    <img src = {LoginImage} alt='Background' className='Login-image'/>
    <form className='login-form' onSubmit={handleLogin}>
      <h2 className='login-h2'>Welcome Back !!!</h2>
        <div className='login-label'>
           <label>
              <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/><br />
           </label>
           <label>
              <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
           </label>
           <label>
              <input type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
           </label>
           <input type="submit" value="Login"/>
           {error && <p className='error_message'>{error}</p>}
        </div>
      <p className='signup_p'>Don't have an account? <a href="/signup">Sign Up</a></p>
      <p className='password_p'>Forgot Password? <a href="/forgotpassword">Reset Password</a></p>
      <h3>Or</h3>
      <div className='login-buttons'>
      <button >Login with Google</button>
      <button >Login with Facebook</button>
      </div>
    </form>
    </div>
    </>
  )
}

export default Login