import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='head-nav'>
        <ul>
          <li><Link to = "/home">Home</Link></li>
          <li><Link to = "/">Login</Link></li>
          <li><Link to = "/signup">SignUp</Link></li>
          <li><Link to = "/cart">Cart</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Header