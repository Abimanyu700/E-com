import React, { useState, useEffect } from 'react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import './ImageSlider.css';
import image1 from '../Images/Banner-Image/image1.webp';
import image2 from '../Images/Banner-Image/image2.webp';
import image3 from '../Images/Banner-Image/image3.webp';
import image4 from '../Images/Banner-Image/image4.webp';
const ImageSlider = () => {
    const images = [image1, image2, image3, image4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious =()=>{
        setCurrentIndex((prevIndex)=>(prevIndex === 0 ? images.length - 1 : prevIndex-1));
    };
    const goToNext =()=>{
        setCurrentIndex((prevIndex)=>(prevIndex === images.length - 1 ? 0 : prevIndex+1))
    };
    useEffect(()=>{
        const interval = setInterval(goToNext, 3000);
        return ()=> clearInterval(interval);
    },[currentIndex]);
  return (
    <>
    <div className='slider-container'>
        <div className='image-wapper'>
            <img src={images[currentIndex]} className='slider-image'></img>
        </div>
        <button onClick={goToPrevious} className='slider-button-left'>
            <FaArrowLeft/>
        </button>
        <button onClick={goToNext} className='slider-button-right'>
            <FaArrowRight/>
        </button>
    </div>
    </>
  )
}

export default ImageSlider