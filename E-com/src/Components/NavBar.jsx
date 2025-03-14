import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
  return (
    <>
       <nav>
          <ul>
            <li><Link to = "/dress">Dress</Link></li>
            <li><Link to = "/footwear">Footwear</Link></li>
            {/* <li><Link to = "/watch">Watch</Link></li> */}
            <li><Link to = "/bag">Bag</Link></li>
            <li><Link to = "/phone">Phone</Link></li>
            <li><Link to = "/laptop">Laptop</Link></li>
            <li><Link to = "/bike">Bike</Link></li>
            <li><Link to = "/car">Car</Link></li>
          </ul>
       </nav>
    </>
  )
}

export default NavBar
