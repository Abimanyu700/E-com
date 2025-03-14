import React from 'react'
import './SignUp.css';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import SignupImage from '../Images/SignUp-Image/signup.jpg';

const SignUp = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const handleSignup=(e)=>{
    e.preventDefault();
    if(firstname && lastname && email && password && phonenumber){
      const user = {firstname, lastname, email, password, phonenumber};
      localStorage.setItem("user", JSON.stringify(user));
      setAlertMessage('Signup Successfull! Now Login');
      setTimeout(()=>setAlertMessage(''),3000);
      navigate('/');
    }
    else{
      alert('Please fill all fields');
      setTimeout(()=>setAlertMessage(''),3000)
    }
  }
  return (
    <>
    {alertMessage && <div className='alert_box'>{alertMessage}</div>}
     <div className="signup-container">
      <img src = {SignupImage} alt='Background' className='Signup-image'/>
        <form className='signup-form' onSubmit={handleSignup}>
          <h2 className='signup-h2'>Create an Account !!!</h2>
            <div className='signup-label'>
               <div className='names'>
               <label>
                  <input type="text" name="firstname" placeholder='FirstName' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/><br />
               </label>
               <label>
                  <input type="text" name="lastname" placeholder='LastName' value={lastname} onChange={(e)=>setLastname(e.target.value)}/><br />
               </label>
               </div>
               <label>
                  <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
               </label>
               <label>
                  <input type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
               </label>
               <label>
                  <input type="number" name="phone" placeholder='PhoneNumber' value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/><br />
               </label>
               <input type="submit" value="SignUp"/>
            </div>
        </form>
        </div>
    </>
  )
}

export default SignUp
