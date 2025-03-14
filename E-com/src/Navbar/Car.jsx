import React from 'react'
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import './Car.css';
import audi from '../Images/Banner-Image/Car/Audi.jpg';
import bentley from '../Images/Banner-Image/Car/Bentley.jpg';
import benz from '../Images/Banner-Image/Car/Benz.jpg';
import bmw from '../Images/Banner-Image/Car/BMW.jpg';
import ford from '../Images/Banner-Image/Car/Ford.jpg';
import jaguar from '../Images/Banner-Image/Car/Jaguar.jpg';
import rr from '../Images/Banner-Image/Car/Rolls Royce.jpg';
import toyota from '../Images/Banner-Image/Car/Toyota.jpg';
import volvo from '../Images/Banner-Image/Car/Volvo.jpg';
import Footer from '../Components/Footer';
const Car = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="car-container">
      <Link to="/car/BMW">
        <div className="car-block">
          <img src = {bmw} />
          <p>BMW</p>
        </div>
      </Link>

      <Link to="/car/audi">
        <div className="car-block">
          <img src = {audi} />
          <p>AUDI</p>
        </div>
      </Link>

      <Link to="/car/bentley">
        <div className="car-block">
          <img src = {bentley} />
          <p>BENTLEY</p>
        </div>
      </Link>

      <Link to="/car/rolls royce">
        <div className="car-block">
          <img src = {rr} />
          <p>ROLLS ROYCE</p>
        </div>
      </Link>

      <Link to="/car/ford">
        <div className="car-block">
          <img src = {ford} />
          <p>FORD</p>
        </div>
      </Link>

      <Link to="/car/jaguar">
        <div className="car-block">
          <img src = {jaguar} />
          <p>JAGUAR</p>
        </div>
      </Link>

      <Link to="/car/benz">
        <div className="car-block">
          <img src = {benz} />
          <p>BENZ</p>
        </div>
      </Link>

      <Link to="/car/volvo">
        <div className="car-block">
          <img src = {volvo} />
          <p>VOLVO</p>
        </div>
      </Link>

      <Link to="/car/toyota">
        <div className="car-block">
          <img src = {toyota} />
          <p>TOYOTA</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default Car