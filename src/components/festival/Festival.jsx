import React from 'react';
import { Carousel } from 'antd';
import './festival.css';
import { Element } from 'react-scroll';

const festivalData = [
  {
    imgSrc: '/src/assets/festival/sankrant.jpg',
    title: 'Makar Sankranti',
    date: 'January 14, 2025',
    description: 'Makar Sankranti, celebrated on January 14th, marks the sun\'s transition into Capricorn.It\'s a joyous Hindu festival symbolizing the end of winter and the arrival of longer days. People celebrate by flying kites, preparing sweets like tilgul, and sharing festive meals, welcoming prosperity and new beginnings. 🪁🍬🌞'
  },
  {
    imgSrc: 'https://images.pexels.com/photos/9099493/pexels-photo-9099493.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Chh. Shivaji Maharaj Jayanti',
    date: 'February 19, 2025',
    description: 'Chhatrapati Shivaji Maharaj Jayanti, celebrated on February 19th, honors the birth anniversary of the great Maratha warrior, Shivaji Maharaj. It\'s a day of grand processions, cultural performances, and tributes, recognizing his valor, leadership, and contribution to the Maratha Empire.👑'
  },
  {
    imgSrc: 'https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Maha Shivratri',
    date: 'February 26, 2025',
    description: 'Maha Shivratri, celebrated on the 13th night and 14th day of the Hindu month of Phalguna, honors Lord Shiva. Devotees fast, offer prayers, and perform night-long vigils in temples. The festival symbolizes overcoming darkness and ignorance in life. 🌙🙏'
  },
  {
    imgSrc: 'https://images.pexels.com/photos/2041707/pexels-photo-2041707.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Holi',
    date: 'March 13, 2025',
    description: 'Holi, the Festival of Colors, celebrates the arrival of spring and the divine love between Radha and Krishna. People joyfully throw colored powders and water, dance, sing, and share festive meals, fostering unity and the triumph of good over evil. 🌸🎨🌞'
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/watercolour-ugadi-flag-with-tropical-leaves-flowers_52683-34024.jpg?ga=GA1.1.1385923089.1738566357&semt=ais_hybrid_sidr',
    title: 'Gudi Padwa',
    date: 'March 30, 2025',
    description: 'Gudi Padwa marks the Marathi New Year, celebrated with vibrant rangolis, hoisting the Gudi flag, and traditional feasts. It signifies the arrival of spring, victory, and prosperity, bringing families together for joyous festivities. 🌸🎉'
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/simple-eid-mubarak-design-with-mosque_1017-8576.jpg?ga=GA1.1.1385923089.1738566357&semt=ais_hybrid_sidr',
    title: 'Eid',
    date: 'March 31, 2025',
    description: 'Eid, celebrated at the end of Ramadan, is a joyous Islamic festival marked by prayers, feasting, and giving. Families come together to share meals, exchange gifts, and extend charity, celebrating unity and gratitude. 🌙🕌🍽️'
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/happy-raksha-bandhan-indian-festival-celebration-cultural-background_1055-21389.jpg?ga=GA1.1.1385923089.1738566357&semt=ais_hybrid_sidr',
    title: 'Raksha Bandhan',
    date: 'August 9, 2025',
    description: 'Raksha Bandhan, celebrated with the tying of a protective rakhi bracelet by sister\'s on their brother\'s wrists, symbolizes the bond of protection and love between siblings. Families come together to exchange gifts, share sweets, and reaffirm their familial bonds. 🎁💖🎉'
  },
  {
    imgSrc: 'https://img.freepik.com/premium-vector/vector-illustration-lord-ganesha-happy-ganesh-chaturthi_30996-9545.jpg?ga=GA1.1.1385923089.1738566357&semt=ais_hybrid_sidr',
    title: 'Ganesh Chaturthi',
    date: 'August 27, 2025',
    description: 'Ganesh Chaturthi, a Hindu festival, celebrates the birth of Lord Ganesha. Devotees install Ganesha idols at home and in public, perform prayers, and chant hymns. The festival culminates with the immersion of idols, symbolizing Ganesha\'s return to his heavenly abode. 🌟🙏'
  },
  {
    imgSrc: 'https://img.freepik.com/premium-vector/vector-illustration-happy-dussehra-greeting_230831-1560.jpg?ga=GA1.1.1385923089.1738566357&semt=ais_hybrid_sidr',
    title: 'Dussehra',
    date: 'October 2, 2025',
    description: 'Dussehra, also known as Vijayadashami, marks the victory of good over evil. Celebrated with grand processions, effigy burning of Ravana, and cultural performances, it symbolizes Lord Rama\'s triumph over the demon king Ravana, promoting righteousness and the power of good. 🎉🔥🕉️.'
  },
  {
    imgSrc: 'https://img.freepik.com/premium-vector/happy-diwali-decorative-background_30996-1310.jpg?ga=GA1.1.1385923089.1738566357&semt=ais_hybrid_sidr',
    title: 'Diwali',
    date: 'October 21, 2025',
    description: 'Diwali, the Festival of Lights, celebrates the victory of light over darkness and good over evil. Homes are illuminated with diyas, fireworks light up the sky, and families exchange sweets and gifts, fostering joy and togetherness. 🎆🪔✨'
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/beautiful-merry-christmas-banner-with-silver-ribbon_69286-51.jpg?ga=GA1.1.1385923089.1738566357&semt=ais_hybrid_sidr',
    title: 'Christmas',
    date: 'December 25, 2025',
    description: 'Christmas, celebrated on December 25th, commemorates the birth of Jesus Christ. It\'s a season of joy, giving, and family gatherings. Homes are adorned with decorations, Christmas trees, and lights, while carols and festive feasts bring warmth and togetherness. 🎄✨🎶'
  }
];

const Festival = () => {
  return (
    <Element name="festival">
    <div className="festivals-container">
        <div className='mainFest'>Festivals</div>

      <Carousel autoplay dots={{className:'fest-dots'}} arrows>
        {festivalData.map((festival, index) => (
          <div key={index} className="festival-slide">
            <div className="festival-grid">
              <div className="festival-image">
                <img src={festival.imgSrc} alt={festival.title} />
              </div>
              <div className="festival-info">
                <h2>{festival.title}</h2>
                <p><strong>Date:</strong> {festival.date}</p>
                <p>{festival.description}</p>
              </div>
            </div>
          </div>
    
        ))}
      </Carousel>
    </div>
    </Element>
  );
}

export default Festival;
