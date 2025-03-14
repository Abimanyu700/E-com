import React from 'react'
import Header from './Header'
import NavBar from "./NavBar";
import { useState } from'react';
import './Home.css';
import { useNavigate, useLocation } from 'react-router-dom'
import ImageSlider from './ImageSlider';
import dress_ad from '../Images/Banner-Image/Dress_Advertisement.jpg';
import bike_ad from '../Images/Banner-Image/Bike_Advertisement.jpg';
import foot_ad from '../Images/Banner-Image/Foot_Advertisement.jpg';
import electronics_ad from '../Images/Banner-Image/Electronics_Advertisement.jpg';
import phone_ad from '../Images/Banner-Image/Phone_Advertisement.jpg';
import Footer from './Footer';
const Home = () => {


const location = useLocation();
const name = location.state?.name || 'Guest';
const navigate = useNavigate();

  return (
    <>
      <div className='home-page'>
      <Header />
    <NavBar />
      <ImageSlider/>
      <div className="Dress_Ad" onClick={() => navigate('/dress')}>
          <h2 className='marquee-text'>
          <marquee scrollamount = "12">
          "Explore trendy dresses and enjoy up to 20% off – Find your perfect style today!"
          </marquee>
            </h2>
          <img src={dress_ad} alt="Dress Ad" className="dress-ad-image" />
      </div>
      <div className="Foot_Ad" onClick={() => navigate('/footwear')}>
          <h2 className='marquee-text'>
            <marquee  scrollamount = "12">
            "Step into comfort and style with up to 15% off  – Your perfect pair is waiting!"
            </marquee>
          </h2>
          <img src={foot_ad} alt="Foot Ad" className="foot-ad-image" />
      </div>
      <div  onClick={() => navigate('/bike')}className="Bike_Ad">
          <h2 className='marquee-text'>
            <marquee  scrollamount = "12">
            "Ride in style and comfort with our range of bikes – Built to take you further!"
            </marquee>
          </h2>
          <img src={bike_ad} alt="Bike Ad" className="bike-ad-image" />
      </div>
      <div className="Phone_Ad" onClick={() => navigate('/phone')}>
          <h2 className='marquee-text'>
            <marquee  scrollamount = "12">
            "Get up to 10% off on the latest phones – Experience innovation at your fingertips!"  
            </marquee>          
          </h2>
          <img src={phone_ad} alt="Phone Ad" className="phone-ad-image" />
      </div>
      <div className="Electronics_Ad" onClick={() => navigate('/laptop')}>
          <h2 className='marquee-text'>
            <marquee  scrollamount = "12">
            "Enjoy up to 10% off on all electronic devices – Power up your life with the latest tech!"
            </marquee>
          </h2>
          <img src={electronics_ad} alt="Electronics Ad" className="electronics-ad-image" />
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Home