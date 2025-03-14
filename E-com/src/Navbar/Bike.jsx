import React from 'react';
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import './Bike.css';
import hero from '../Images/Banner-Image/Bike/Hero.jpg';
import honda from '../Images/Banner-Image/Bike/Honda.png';
import ktm from '../Images/Banner-Image/Bike/Ktm.jpeg';
import pulsar from '../Images/Banner-Image/Bike/Pulsar.jpeg';
import re from '../Images/Banner-Image/Bike/Royal Enfield.png';
import tvs from '../Images/Banner-Image/Bike/Tvs.jpeg';
import yamaha from '../Images/Banner-Image/Bike/Yamaha.jpeg';
import Footer from '../Components/Footer';
const Bike = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="bike-container">
      <Link to="/bike/yamaha">
        <div className="bike-block">
          <img src = {yamaha} />
          <p>YAMAHA</p>
        </div>
      </Link>

      <Link to="/bike/pulsar">
        <div className="bike-block">
          <img src = {pulsar} />
          <p>PULSAR</p>
        </div>
      </Link>

      <Link to="/bike/hero">
        <div className="bike-block">
          <img src = {hero} />
          <p>HERO</p>
        </div>
        </Link>

        <Link to="/bike/royal enfield">
        <div className="bike-block">
          <img src = {re} />
          <p>ROYAL ENFIELD</p>
        </div>
        </Link>

        <Link to="/bike/KTM">
        <div className="bike-block">
          <img src = {ktm} />
          <p>KTM</p>
        </div>
        </Link>

        <Link to="/bike/TVS">
        <div className="bike-block">
          <img src = {tvs} />
          <p>TVS</p>
        </div>
        </Link>

        <Link to="/bike/honda">
        <div className="bike-block">
          <img src = {honda} />
          <p>HONDA</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default Bike