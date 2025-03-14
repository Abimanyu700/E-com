import React from 'react'
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import Men_foot from '../Images/Banner-Image/Foot wear/Men_foot.jpg';
import Women_foot from '../Images/Banner-Image/Foot wear/Women_foot.jpg';
import Kid_foot from '../Images/Banner-Image/Foot wear/Kid_foot.jpg';
import './Footwear.css';
import Footer from '../Components/Footer';

const Footwear = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="foot-container">
      <Link to="/footwear/mens">
        <div className="foot-block">
          <img src = {Men_foot} />
          <p>Men's Foot Wear</p>
        </div>
      </Link>

      <Link to="/footwear/womens">
        <div className="foot-block">
          <img src = {Women_foot} />
          <p>Women's Foot Wear</p>
        </div>
      </Link>

      <Link to="/footwear/kids">
        <div className="foot-block">
          <img src = {Kid_foot} />
          <p>Kid's Foot Wear</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default Footwear