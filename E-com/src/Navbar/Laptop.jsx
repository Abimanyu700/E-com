import React from 'react'
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import './Laptop.css';
import acer from '../Images/Banner-Image/Laptop/Acer.jpeg';
import apple from '../Images/Banner-Image/Laptop/Apple.jpeg';
import asus from '../Images/Banner-Image/Laptop/Asus.jpeg';
import dell from '../Images/Banner-Image/Laptop/Dell.jpeg';
import hp from '../Images/Banner-Image/Laptop/Hp.jpeg';
import lenovo from '../Images/Banner-Image/Laptop/Lenova.jpeg';
import Footer from '../Components/Footer';
const Laptop = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="laptop-container">
      <Link to="/laptop/HP">
        <div className="laptop-block">
          <img src = {hp} />
          <p>HP</p>
        </div>
      </Link>

      <Link to="/laptop/dell">
        <div className="laptop-block">
          <img src = {dell} />
          <p>DELL</p>
        </div>
      </Link>

      <Link to="/laptop/acer">
        <div className="laptop-block">
          <img src = {acer} />
          <p>ACER</p>
        </div>
      </Link>

      <Link to="/laptop/apple">
        <div className="laptop-block">
          <img src = {apple} />
          <p>APPLE</p>
        </div>
      </Link>

      <Link to="/laptop/asus">
        <div className="laptop-block">
          <img src = {asus} />
          <p>ASUS</p>
        </div>
      </Link>

      <Link to="/laptop/lenovo">
        <div className="laptop-block">
          <img src = {lenovo} />
          <p>LENOVO</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default Laptop