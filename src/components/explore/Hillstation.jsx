import React from 'react'
import { useState } from 'react';
import './hillstation.css'

const Hillstation = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
            <>

        
          
          <div className='beachInfo'>
            <h2 className='mainHeading'>Amboli</h2>
            <p className='name'>Amboli</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/16854301207262.png" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Also known as the 'Queen of Maharashtra', Amboli is one of the lesser-visited hill stations of Maharashtra. It is situated in the Sahyadri hills in the Sindhudurg district of Maharashtra and receives heavy rainfall in the monsoon, making the climate pleasant and covering the ground with lush green foliage. Located about 128 km away from Kolhapur and 90 km away from Panjim, Amboli is the source of the Hiranyakeshi river and is a peaceful, unexplored vacation spot that shouldn't be missed when in Maharashtra. </p>
            <p className='info1'>
            Amboli is the ideal weekend getaway if you’re looking to spend a few days close to nature. Rich in biodiversity, there are many trails you can take to go trekking. Amboli also has an ancient Shiva temple and an exquisite view of the Sahyadri range that is sure to take your breath away.</p>

          </div>

        


          <div className='beachInfo'>
            <h2 className='mainHeading'>Igatpuri </h2>
            <p className='name'>Nashik</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/16856919676745.png" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Located in the Nashik district of Maharashtra, Igatpuri is one of the most popular hill retreats in the state. About 130 kilometres away from Mumbai, this weekend getaway is ideal for adventure sports junkies and nature lovers. The gushing waterfalls, mystic lakes, and lush forests offer some of the most beautiful views that make you feel one with nature. Apart from old forts and scenic views, Igatpuri is also a great place to indulge in activities like rock climbing and trekking. The hill station is also surrounded by some of the highest peaks of the Sahyadri range. </p>
            <p className='info1'>
            Primarily known for its Vipassana International Academy, the hill station sees hundreds of people who enrol themselves in this form of meditation. From meditation to rafting, you can indulge in many activities that rejuvenate your mind and body at Igatpuri. Plan your visit to this hill retreat that offers you an escape from the hustle of the city.</p>

          </div>

          <div className='beachInfo'>
            <h2 className='mainHeading'>Lonavala - Khandala</h2>
            <p className='name'>Khandala</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/16854359811661.png" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Located in the Pune district of Maharashtra, these are twin hill stations that have been a popular spot for tourists for decades. Also known as the 'Jewel of Sahyadri', Lonavala city is only about 3 km away from Khandala. Situated at an altitude of 2,041 ft. above sea level, these beautiful retreats are a popular weekend getaway destination owing to their convenient location and easy accessibility from the Mumbai-Pune expressway.</p>
            <p className='info1'>
            With some of the most spectacular views and breathtaking sunsets to offer, these two spots boast a picture-perfect landscape. Their growing popularity can also be attributed to a number of ancient caves and beautiful natural waterfalls present in the region. With a host of fun activities and stunning scenery, Lonavala and Khandala are sure to mesmerise you with their beauty. </p>

          </div>


          <div className='beachInfo'>
            <h2 className='mainHeading'>Bhandardara </h2>
            <p className='name'>Bhandardara</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1685436753352bhandardara_3.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Situated beautifully amidst the Sahyadri ranges in Maharashtra, Bhandardara is a beautiful hill station for nature lovers. Often called the Queen of the Sahyadri ranges for its lush green landscapes, Bhandardara is located about 185 kilometres away from Mumbai and 155 kilometres away from Ahmednagar. It offers some of the most scintillating landscapes and the perfect weather to relax and break free. Home to Mount Kalsubai, the highest peak in Maharashtra, the hill station is a great place for adventure junkies and trekkers. </p>
            <p className='info1'>
            With several attractions and the serenity of nature, Bhandardara is a must-visit. The gorgeous hill station offers a soothing environment with a cool climate throughout the year making it perfect for you to enjoy the panoramic vistas of the Sahyadri ranges. Head to this hill station when you’re looking for a rejuvenating holiday. </p>

          </div>
          <div className='beachInfo'>
            <h2 className='mainHeading'>Mahabaleshwar </h2>
            <p className='name'>Mahabaleshwar  </p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/16854385811592.png" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Nestled in the picturesque Western Ghats, Mahabaleshwar is one of the most popular hill stations in Maharashtra. The scenic views from this beautiful hill station can captivate your senses and will instantly make you fall in love with its magnificent cascades and majestic peaks. One of the most sought-after weekend getaways for people from metropolitan cities like Mumbai and Pune, Mahabaleshwar offers you the perfect respite with its manicured lush green forests, valleys and waterfalls. </p>
            <p className='info1'>
            Located about 120 kilometres from Pune and 285 kilometres from Mumbai, Mahabaleshwar sees an increase in tourists closer to the winter months. Witness some of the most fascinating sunrises and sunsets while on your trip there and enjoy your experience in strawberry farms whilst gorging on some irresistible fresh strawberry and cream (a popular dessert of Mahabaleshwar). Plan a trip to this hill retreat and come back feeling rejuvenated and relaxed.</p>
          </div>
        

        </>
     )
    case 2:
      return (

            <>
          <div className='beachInfo'>
            <h2 className='mainHeading'>Lavasa </h2>
            <p className='name'>Pune</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/16856927023931587653628_shutterstock_1538032181.jpg.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Lavasa city is India's first planned hill city. This new hill station is a beautiful project that takes inspiration from the Italian town, Portofino. Spread over 7 hills, covering about 25000 acres, Lavasa offers a luxurious escape from city life. It is the perfect getaway for a luxurious vacation in the lap of nature. Located in the Pune district, it has a lot to offer to its tourists other than scenic beauty.  </p>
            <p className='info1'>
            From hotels, resorts, malls and plenty of watersports activities, Lavasa city has something for everyone. You can also unwind and rejuvenate yourself at a spa as well as relish some mouth-watering food at the different restaurants. It covers about 65 km of the lakefront area which makes this city look mesmerising and breathtaking.</p>
            </div>
          
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Tamhini Ghat </h2>
            <p className='name'>Lonavla</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1685696660845Tahmini%20%20%284%29_11zon.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>A mountain passage located between Mulshi and Tamhini, the Tamhini Ghats (40 km away from Pune) offers you beautiful and scenic sights that one can never forget. With magnificent mountain views, breathtaking waterfalls and serene lakes, this getaway is the perfect place to get closer to nature. The Tamhini Ghat road cuts the Sahyadri range to join Mulshi and Tamhini and is almost a 15-kilometre long stretch. During the monsoons, this place transforms into a green bed that boasts a wide variety of flora and fauna. The Tamhini Ghat can be accessed from Mumbai via the Mumbai-Goa highway.</p>
            <p className='info1'>
            A visit to Tamhini Ghat will be a serene experience with the views of the Western Ghat range you might not have ever seen before. Even the drive up to the Ghat during the rains is going to be one worth remembering. Once here, you can go trekking, swim at the Tamhini Waterfalls, try river rafting, or simply enjoy the cool, fresh breeze as you relax in the lap of nature.</p>
    
          </div>
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Chikaldara </h2>
            <p className='name'>Chikaldara</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1685698088018Chikhardhara%20%20%20%284%29.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>The sole hill retreat in the Vidarbha region, Chilkaldara is perched at a height of 1,118 metres above sea level. Located in the Amravati district of Maharashtra, Chikaldara boasts of a mention in the epic text of Mahabharata. According to folklore, this is the spot where Bheema killed the villainous Keechaka and threw him down the valley, thereby lending this town a historical significance. As soon as you step foot in Chikaldara, you can smell the whiff of coffee in the air as this is the only coffee-growing area in the region. </p>
            <p className='info1'>
            Located right where Madhya Pradesh begins and Maharashtra ends, this hill station is enriched by a variety of flora and fauna that can be explored during your visit here. This hill station is even popular for its growing tiger population and bountiful wildlife. So if you are a true nature lover and are an outdoor person, Chikaldara offers the best vacation and get away from the city.</p>
    
          </div>
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Matheran</h2>
            <p className='name'>Matheran</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1685699488958Matheran%20%287%29.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Situated at an elevation of 2600 feet above sea level, Matheran is a hill station that is only about 100 kilometres away from Mumbai. Matheran literally means 'forest on the forehead (of the mountains)’ and it is a popular weekend getaway for many urban residents looking for a break from the bustling city life. Matheran was developed by the British as a resort to beat the summer heat and is Asia's only automobile-free hill station. Without any buzzing of horns and no pollution, this hill retreat offers you a peaceful experience of nature at its very best.</p>
            <p className='info1'>
            Matheran should be on your list of must-visit hill stations as it takes you back to the old days without any metalled roads. You’ll have a memorable time as you explore this tiny hill station, walking and traversing along the narrow lanes and witness some of the most magnificent views. Head to this breathtaking getaway to get lost in nature and forget about city life. </p>
    
          </div>
          
          </>
        

    
      )
      

      default:
        return null;
}
}

return (
  <div className='mainBeach' >
    <h1 className='mainPage'>NATURE & WILDLIFE</h1>
    {renderPageContent()}
    <div className='pagination'>
      <button className='prev' onClick={() => setCurrentPage(currentPage === 1 ? 2 : currentPage - 1)}></button>
      <button onClick={() => setCurrentPage(1)}>1</button>
      <button onClick={() => setCurrentPage(2)}>2</button>
      
      <button className='next' onClick={() => setCurrentPage(currentPage === 2 ? 1 : currentPage + 1)}></button>
    </div>
  </div>
)
}

export default Hillstation