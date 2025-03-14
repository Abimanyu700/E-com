import React from 'react'
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import './Dress.css';
import Footer from '../Components/Footer';
import Men_dress from '../Images/Banner-Image/Dress/Men_dress.jpg';
import Women_dress from '../Images/Banner-Image/Dress/Women_dress.jpg';
import Kid_dress from '../Images/Banner-Image/Dress/Kid_dress.jpg';
const Dress = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="dress-container">
      <Link to="/dress/mens">
        <div className="dress-block">
          <img src = {Men_dress} />
          <p>Men's Dress</p>
        </div>
      </Link>

      <Link to="/dress/womens">
        <div className="dress-block">
          <img src = {Women_dress} />
          <p>Women's Dress</p>
        </div>
      </Link>

      <Link to="/dress/kids">
        <div className="dress-block">
          <img src = {Kid_dress} />
          <p>Kid's Dress</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  );
};

export default Dress;
