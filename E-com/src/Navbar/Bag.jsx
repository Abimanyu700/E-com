import React from 'react'
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import './Bag.css';
import Men_bag from '../Images/Banner-Image/Bag/Men_bag.jpg';
import Women_bag from '../Images/Banner-Image/Bag/Women_bag.jpg';
import Kid_bag from '../Images/Banner-Image/Bag/Kid_bag.png';
import Footer from '../Components/Footer';
const Bag = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="bag-container">
      <Link to="/bag/mens">
        <div className="bag-block">
          <img src = {Men_bag} />
          <p>Men's Bag</p>
        </div>
      </Link>

      <Link to="/bag/womens">
        <div className="bag-block">
          <img src = {Women_bag} />
          <p>Women's Bag</p>
        </div>
      </Link>

      <Link to="/bag/kids">
        <div className="bag-block">
          <img src = {Kid_bag} />
          <p>Kid's Dress</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default Bag