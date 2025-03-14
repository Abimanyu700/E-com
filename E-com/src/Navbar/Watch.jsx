import React from 'react'
import NavBar from "../Components/NavBar";
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import './Watch.css';
import Men_watch from '../Images/Banner-Image/Watch/Men_watch.jpg';
import Women_watch from '../Images/Banner-Image/Watch/Women_watch.jpg';
import Kid_watch from '../Images/Banner-Image/Watch/Kid_watch.jpg';
import Footer from '../Components/Footer';
const Watch = () => {
  return (
    <>
    <Header />
    <NavBar />
    <div className="watch-container">
      <Link to="/watch/mens">
        <div className="watch-block">
          <img src = {Men_watch} />
          <p>Men's Watch</p>
        </div>
      </Link>

      <Link to="/watch/womens">
        <div className="watch-block">
          <img src = {Women_watch} />
          <p>Women's Watch</p>
        </div>
      </Link>

      <Link to="/watch/kids">
        <div className="watch-block">
          <img src = {Kid_watch} />
          <p>Kid's Watch</p>
        </div>
      </Link>
    </div>
    <Footer />
    </>
  )
}

export default Watch