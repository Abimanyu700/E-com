import React from 'react'
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import './Phone.css';
import apple from '../Images/Banner-Image/Phone/Apple.jpeg';
import iqoo from '../Images/Banner-Image/Phone/IQOO.jpeg';
import op from '../Images/Banner-Image/Phone/OnePlus.jpeg';
import oppo from '../Images/Banner-Image/Phone/Oppo.jpeg';
import poco from '../Images/Banner-Image/Phone/Poco.jpeg';
import realme from '../Images/Banner-Image/Phone/Realme.jpeg';
import samsung from '../Images/Banner-Image/Phone/Samsung.jpeg';
import vivo from '../Images/Banner-Image/Phone/Vivo.jpeg';
import redmi from '../Images/Banner-Image/Phone/Xiaomi.jpeg';
import Footer from '../Components/Footer';

const Phone = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="phone-container">
      <Link to="/phone/one plus">
        <div className="phone-block">
          <img src = {op} />
          <p>ONE PLUS</p>
        </div>
      </Link>

      <Link to="/phone/redmi">
        <div className="phone-block">
          <img src = {redmi} />
          <p>REDMI</p>
        </div>
      </Link>

      <Link to="/phone/realme">
        <div className="phone-block">
          <img src = {realme} />
          <p>REALME</p>
        </div>
      </Link>

      <Link to="/phone/vivo">
        <div className="phone-block">
          <img src = {vivo} />
          <p>VIVO</p>
        </div>
      </Link>

      <Link to="/phone/poco">
        <div className="phone-block">
          <img src = {poco} />
          <p>POCO</p>
        </div>
      </Link>

      <Link to="/phone/apple">
        <div className="phone-block">
          <img src = {apple} />
          <p>APPLE</p>
        </div>
      </Link>

      <Link to="/phone/samsung">
        <div className="phone-block">
          <img src = {samsung} />
          <p>SAMSUNG</p>
        </div>
      </Link>

      <Link to="/phone/iqoo">
        <div className="phone-block">
          <img src = {iqoo} />
          <p>IQOO</p>
        </div>
      </Link>

      <Link to="/phone/oppo">
        <div className="phone-block">
          <img src = {oppo} />
          <p>OPPO</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default Phone