import React from 'react'
import "./cuisine.css"
import { Minus } from 'lucide-react';
import { Carousel, Card } from 'antd';

const { Meta } = Card;

const images = [
    { src: '/src/assets/food/Modak.jpg', title: 'Modak', description: ' A sweet dumpling with coconut and jaggery, divine taste. 🍬🌟' },
    { src: '/src/assets/food/vada-pav.jpg', title: 'Vada Pav', description: ' Iconic spicy potato fritter with chutney, beloved streetfood. 🍔🔥' },
    { src: '/src/assets/food/misal-pav.jpg', title: 'Misal Pav', description: 'Spicy sprout curry with pav, a delightful street delicacy. 🌶️🍞' },
    { src: '/src/assets/food/Kolhapur.jpeg', title: 'Mutton Thali', description: 'Spicy mutton curry, bhakri, and flavorful side dishes. 🍖🔥' },
    { src: '/src/assets/food/puranpoli.jpg', title: 'Puran Poli', description: ' Sweet lentil-stuffed flatbread, heavenly festival treat from Maharashtra. 🍬✨' },
    { src: '/src/assets/food/Thalipeeth.jpg', title: 'Thalipeeth', description: ' Multigrain savory pancake, nutritious and packed with flavors. 🥞' },
    { src: '/src/assets/food/kokan.jpg', title: ' Fish Thali', description: ' Coastal delight with spicy fish curry, rice, and sides. 🐟🌶️' },
    { src: '/src/assets/food/Kothimbir-vadi.jpeg', title: 'Kothimbir Vadi', description: ' Savory coriander fritters, crispy and bursting with flavors. 🍴🌿' },
    { src: '/src/assets/food/bakarwadi.jpg', title: 'Bakarwadi', description: ' Crispy, spicy spiral snack, bursting with delightful flavors. 🌶️🍪' },
    { src: '/src/assets/food/Shrikand.jpeg', title: 'Shrikhand', description: ' Creamy, saffron-infused yogurt dessert, sweet and luscious. 🍨🌼' },
  ];

const Cuisine = () => {
  return (
    <>
    <div className='mainCuisine'>
    <div className='mainWrapperHead'>Maharashtra Cuisine</div>
    <Minus size={44} strokeWidth={1} className='logoMinu'/>
    <div className="description">
     Maharashtra's cuisine is a harmonious blend of diverse flavors and textures. It offers a unique balance of spicy, sweet, tangy, and aromatic dishes that reflect the region's rich culinary heritage. 🍛✨
    </div>

    <Card
          hoverable 
          className="carousel-card"
        >
          <Carousel dots={false} autoplay>
            {images.map((image, index) => (
              <div key={index}>
                <img alt={image.title} src={image.src} className="carousel-image" />
                <Meta title={image.title} description={image.description} className="carousel-meta" />
              </div>
            ))}
          </Carousel>
        </Card>
    
    </div>
    </>
  )
}

export default Cuisine