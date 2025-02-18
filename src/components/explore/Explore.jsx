import React from 'react';
import "./explore.css";
import { Carousel } from 'antd';
import naturewildlife from "../../assets/images/nature-wildlife.jpeg";
import beaches from "../../assets/images/beaches.jpeg";
import uniqueExp from "../../assets/images/unique-exp.jpg";
import Unesco from "../../assets/images/UNESCO.jpeg";
import HillStation from "../../assets/images/HillStation.jpeg";

import Temples from "../../assets/images/Temples.jpeg";
import Forts from "../../assets/images/Forts.jpeg";
import { Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const handleCardClick = (destination) => {
    if (destination === 'beach') {
      navigate('/beach'); 
    }
    else if (destination === 'nature'){
      navigate('/nature');
    }
    else if (destination === 'unique-exp'){
      navigate('/unique')
    }
    else if (destination === 'unesco'){
      navigate('/unesco')
    }
    else if (destination === 'hillstations'){
      navigate('/hillstations')
    }
    else if (destination === 'aquatic'){
      navigate('/aquatic')
    }
    else if (destination === 'forts'){
      navigate('/forts')
    }
    else if (destination === 'temples'){
      navigate('/temples')
    }
  };

  const cardsData = [
    { title: "Nature Wildlife", imagePath: naturewildlife, destination: 'nature' },
    { title: "Beaches", imagePath: beaches, destination: 'beach' },
    { title: "Unique Experiences", imagePath: uniqueExp, destination: 'unique-exp' },
    { title: "UNESCO Heritage Site", imagePath: Unesco, destination: 'unesco' },
    { title: "Hill Stations", imagePath: HillStation, destination: 'hillstations' },
    { title: "Aquatic Sports", imagePath: 'https://images.pexels.com/photos/15763646/pexels-photo-15763646/free-photo-of-scuba-divers-with-equipment-underwater.jpeg?auto=compress&cs=tinysrgb&w=600', destination: 'aquatic' },
    { title: "Temples", imagePath: Temples, destination: 'temples' },
    { title: "Forts", imagePath: Forts, destination: 'forts' },
  ];

  const renderCard = (card) => (
    <>
      <div key={card.title} className="card" onClick={() => handleCardClick(card.destination)}>
        <img src={card.imagePath} alt={card.title} className="cardImage" />
        <div className="cardTitleOverlay">
          <div className="cardTitle">{card.title}</div>
        </div>
      </div>
    </>
  );

  return (
    <div className='expoApp'>
      <div className='mainExp'>Explore Maharashtra</div>
      <Minus size={44} strokeWidth={1} className='logoMinus'/>
      <div className="description">
        Maharashtra is a land of contrasts and vibrancy. From the bustling streets of Mumbai to the serene beaches of Konkan, and the majestic forts of Marathas to the rich cultural heritage, this state offers a unique blend of history, culture, and natural beauty.
      </div>
      <div className="cardsWrapper">
        <Carousel className="horizontalCarousel" dots={false} slidesToShow={3} effect="scrollx" autoplay>
          {cardsData.map(renderCard)}
        </Carousel>  
      </div>
    </div>
  );
};

export default Explore;
