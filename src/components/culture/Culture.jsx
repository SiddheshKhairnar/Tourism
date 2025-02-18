import React from 'react'
import './culture.css';
import { Carousel } from 'antd';

const images = [
    'https://maharashtratourism.gov.in/wp-content/uploads/2024/05/KADAKLAKSHMI.png',
    'https://maharashtratourism.gov.in/wp-content/uploads/2024/05/WASUDEV.png',
    'https://maharashtratourism.gov.in/wp-content/uploads/2024/05/WARI.png',
    'https://maharashtratourism.gov.in/wp-content/uploads/2024/05/MAHASHIVRATRI.png',
    'https://maharashtratourism.gov.in/wp-content/uploads/2024/05/ganesh.png',
    'https://maharashtratourism.gov.in/wp-content/uploads/2024/05/GUDHIPADWA.png',
  ];

const Culture = () => {
  return (
    <>
    <div className="culture-container">
      <div className='mainConCul'>Culture</div>
      <Carousel autoplay dots={{ className: 'cus-dots' }} arrows>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Slide ${index + 1}`} className="caro-image" />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  )
}

export default Culture