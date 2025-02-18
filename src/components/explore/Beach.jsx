import React from 'react'
import { useState } from 'react';
import './beach.css'
const Beach = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (

        <>
          
          <div className='beachInfo'>
            <h2 className='mainHeading'>DIVEAGAR</h2>
            <p className='name'>Raigad</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628789959326BEACH_diveagar_banner02.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Nestled along the famous Konkan coast, Diveagar is a paradise waiting to be explored. If you’re looking for a unique experience, you should definitely tick this hidden gem off your bucket list. </p>
            <p className='info1'>
            Gallop on a horse along the Konkan coastline that is adorned with a glittering beach and panoramic sunset view. Enjoy thrilling water sports like parasailing and banana boat rides. On one end, you will spot fishermen at work and on the other, a flock of migratory seagulls will catch your eye. Take a break from your regular life as you step into the paradise that is Diveagar!</p>

          </div>


          <div className='beachInfo'>
            <h2 className='mainHeading'>TARKARLI</h2>
            <p className='name'>Sindhudurg</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628832951627BEACH_tarkali_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Immerse yourself in the tranquility of Tarkarli where you can experience swooshing waves and tropical coral reefs. It won’t be too hard to spot the swirling barracuda, giant squids, and turtles gliding by. Tarkarli is also an adventure hub known for its thrilling water sports which include boating, jet ski, parasailing and much more. </p>
            <p className='info1'>
            Hidden in the heart of Sindhudurg district, Tarkarli is India’s most popular scuba diving destination, which makes it as adventurous as it is mesmerizing. Lined with beach shacks across its sandy paths, this destination offers a beautiful sunset view and an exquisite underwater experience. If you are looking to unwind and enjoy an experience like no other, Tarkarli is the holiday destination for you! </p>

          </div>

          <div className='beachInfo'>
            <h2 className='mainHeading'>Shrivardhan</h2>
            <p className='name'>Raigad</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628790715051BEACH_shrivardhan_banner04.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Escape to one of the oldest, secluded and most beautiful beach towns - Shrivardhan. With the relaxing sound of the waves and the wind creating the best music for your ears, this breathtaking beach is sure to fascinate you. Known for its pristine white sand and long coastline, Shrivardhan beach is an idyllic place to escape the busy schedule of your fast-paced life. </p>
            <p className='info1'>
            An easy drive away from local attractions like Laxmi Narayan temple and Suvarna Ganesh temple, Shrivardhan beach is an excellent destination for a much-awaited long, calm holiday.</p>

          </div>


          <div className='beachInfo'>
            <h2 className='mainHeading'>VELNESHWAR</h2>
            <p className='name'>Ratnagiri</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628792464761BEACH_velneshwar_banner05.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>With its scenic crescent-shaped shoreline dotted with towering coconut trees, Velneshwar truly is Maharashtra’s hidden gem when it comes to beaches. The rock-free sandy beaches are perfect for swimming or simply lounging around in peace by yourself or with your family.  </p>
            <p className='info1'>
            Art and architecture enthusiasts are sure to enjoy a visit to the vibrant Velneshwar temple that rests right on the seashore, with part of it submerged in the sea - the 'Merumandal'. Decked in bright colours with shades of blue, yellow, and pink, this Shiva temple dates back to when the village was founded approximately 1,200 years ago. For pilgrims, Maha Shivratri is the best time to visit as the place comes alive with celebrations, dance, and music.</p>

          </div>
          <div className='beachInfo'>
            <h2 className='mainHeading'>BORDI DAHANU</h2>
            <p className='name'>Palghar</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628789755137BEACH_bordidahanu_banner03.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>At Bordi Dahanu, you can unwind leisurely as you meander along the 17-kilometer coastline, surrounded by mangroves on one side and the calm waters of the Konkan region on the other. Since this is a green zone, it is free of any urbanisation making it the perfect getaway for an unwinding experience.</p>
            <p className='info1'>
            Adorned with chikoo and fruit orchards, this destination boasts of a splendid view as you stroll along the spotless beach. You can also find the Bahrot caves near Dahanu that are home to the only Zoroastrian Cave temple in the country and host the Iran Shah Flame which is believed to be kept burning for over a thousand years. Whether you want to see the sunrise early in the morning or view the breathtaking sunset on Bordi Dahanu, this spot is just for you.</p>
          </div>
        
        </>
     )
    case 2:
      return (

          <>
          <div className='beachInfo'>
            <h2 className='mainHeading'>GANPATIPULE</h2>
            <p className='name'>Ratnagiri</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628790061140BEACH_ganpatipule_banner02.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Home to one of the few white sand beaches in the state, Ganpatipule is a small town of just 100 houses mainly marked by neatly drawn roads, red soil and roofed houses. Spirituality and nature come together in this town dedicated to Lord Ganesha. Come, experience the divine in this serene land that welcomes thousands of pilgrims from all over the country each year. </p>
            <p className='info1'>
            The 400-year-old Swayambhu Ganpati Temple is a sight to behold where you will find the self-created idol that illuminates when the rays of the sun fall upon it at sunrise and sunset. It is also one of the few Indian temples where the deity faces west, giving it the name the Paschim Dwarpalak (Western Sentinel God of India). Right beside the temple, you can find some thrilling water sports like jet skiing, speed boating, and more at pocket-friendly prices. And if you are an adventure enthusiast you are in for a treat because here you can ride a horse, a camel, or even hop onto an ATV bike!</p>
         
            </div>
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>HARNAI-MURUD</h2>
            <p className='name'>Dapoli</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628790409709BEACH_harnai_banner03.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>The twin towns of Harnai and Murud may be small but they are lined with some of the finest beaches in the state. Harnai is the livelier counterpart with fishermen's boats visible in the distance who come later to the shore to sell their catch in an auction where you can bargain for the best price. Many water sports are available in the area as well, making it a good spot for a picnic. Murud is quieter with a long stretch of black sands, perfect for swimmers. </p>
            <p className='info1'>
            With Harnai being an ancient port, there are a lot of forts here for the history buffs to explore including the sea fort Suvarnadurg which you can only reach through a boat. Murud’s beautifully constructed Durga Devi Temple and Anjarle’s hilltop Kadyavarcha Ganpati Temple are a must-visit for pilgrims in the area.</p>
    
          </div>
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>GUHAGAR</h2>
            <p className='name'>Guhagar</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628790182908BEACH_guhagar_banner05.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Pair a long pristine beach with heritage temples and locally-grown coconuts, betel, and Alphonso mangoes and you start to get a pretty good idea of what awaits you in Guhagar. Tucked away in the Ratnagiri district, this coastal town is great for pilgrims and anyone seeking some calmness by the sea. </p>
            <p className='info1'>
            In the middle of the town, you will find a 12th-century Shiva temple, Vyadeshwar, painted in bright holy colours. Here, you will also find four smaller shrines around the central temple dedicated to Ganesha, Parvati, Vishnu, and Lakshmi. Don't forget to also visit the ancient Durga Devi Temple where you can receive blessings from the goddess and also have some delicious food. So, if you are looking to explore the relatively unexplored Konkan coast and visit holy temples that have centuries of history associated with them, head to Guhagar for a weekend of peace and spirituality.</p>
    
          </div>
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>SHIRODA BEACH</h2>
            <p className='name'>Shiroda</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628790590555BEACH_shiroda_banner04.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Alluring panoramic views, ample privacy and crystal clear water are the most enchanting things about the small town of Shiroda located in the Sindhudurg district. The cerulean waters and the cool breeze enrich the surrounding of the place, making it worth a visit. You get to witness over a hundred palm and coconut trees throughout the stretch of the beach making the seashore look even more beautiful. </p>
            <p className='info1'>
            This extensive beach has feasible connectivity with all the major cities. It is surrounded by a ton of restaurants and shacks offering some of the best food in town! That’s not all, there are plenty of water sports activities like surfing, parasailing, kite surfing, and much more. Shiroda beach gives you a wholesome experience that keeps you captivated throughout your trip.</p>
    
          </div>
          
          </>

    
      )
      case 3:
        return (

          <>
          <div className='beachInfo'>
            <h2 className='mainHeading'>KIHIM BEACH</h2>
            <p className='name'>Alibaug</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628790489670BEACH_kihim_banner04.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Located just north of Alibaug, Kihim beach is a bird watcher’s paradise. With a stunning view, Kihim is a colourful haven brimming with greenery and wildflowers. Take a walk around the village to visit the various temples including a rare Kalbhairav Temple. Indulge in various water adventure sports like Motorbiking, Paragliding, Banana Boating and more as you enjoy the bustling sea waves and the clean beaches on the Konkani coastline. </p>
            <p className='info1'>
            Enjoy picturesque views of the sun rising and setting when you visit this beach. During its blooming season, it attracts colourful butterflies and bees drawn to its wildflowers. Unwind at this charming village while soaking in the natural beauty and enjoying the pleasures it offers!</p>
            </div>
          
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>VENGURLA BEACH</h2>
            <p className='name'>Konkan</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628792570169BEACH_vengurla_banner03.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Vengurla enjoys lush green foliage of berry, mango, and cashew trees. It is an alluring beach town that hosts a lot of beautiful and clean beaches. The town has a rich cultural heritage and is home to a lot of old temples like Sargeshwar Shiva Temple, Khajana Devi Temple that you can visit. The town was burnt twice in the 17th century and the residue from the attack can still be seen on the Vengurla rocks on the Burnt Island. You may even spot the Indian Swiftlet birds sailing through the sky during your visit to the town. The town is its most beautiful self during the pre-winter and winter months. </p>
            <p className='info1'>
            With crystal clear water, the beaches of Vengurla offer a range of water sports including parasailing, banana boat rides, scuba diving, rod fishing, and more. The roasted cashews and cashew-based sweets are a must-try in the town. If you are a beach baby, Vengurla is definitely a must-add to your vacation list!</p>
    
          </div>
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>HARIHARESHWAR BEACH</h2>
            <p className='name'>Konkan</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628790265877BEACH_harihareshwar_banner05.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>When it comes to must-visit beaches around Maharashtra, Harihareshwar can’t be missed. Often referred to as the “House of God”, this beach is considered to be a hamlet of peace. Nestled in Raigad district, this auspicious town is where the river Savitri makes its way to the big Arabian sea. </p>
            <p className='info1'>
            Surrounded by hills and temples, this beach is nothing less than a spiritual tour. It boasts of crystal clear waters that offer a scenic backdrop as you walk around its sandy pathway. With a host of water adventure sports at your disposal, you can have a wonderful experience as you kick back and relax on your trip at Harihareshwar.</p>
    
          </div>
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>VELAS BEACH</h2>
            <p className='name'>Velas Agar</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628792382399BEACH_velas_banner05.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>Velas beach offers an encapsulating view and is surrounded by hilocks. This beautiful paradise is just a short drive away from Madangad or Dapoli. It is considered as one of the cleanest and most unique beaches you can visit. </p>
            <p className='info1'>
            Due to its immaculate quality, each year, from February till mid-April, the tiny village of Velas bears witness to a truly heart-warming sight as thousands of newly hatched Olive Ridley turtles take their first steps towards the big blue sea. Experience the cool breeze as you stroll along this unspoiled beach while you admire the beautiful coconut trees.</p>
    
          </div>

          
          <div className='beachInfo'>
            <h2 className='mainHeading'>JUHU BEACH</h2>
            <p className='name'>Mumbai</p>
            <img src="https://images.pexels.com/photos/2589693/pexels-photo-2589693.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About The Beach</h3>
            <p className='info'>It is known for the sprawling Juhu Beach. It is surrounded by the Arabian Sea to the west, Versova to the north, Vile Parle to the east and Santacruz to the south. Juhu is among the most expensive and affluent areas of the metropolitan area and home to many Bollywood celebrities. The nearest railway stations are Santacruz, Andheri and Vile Parle on the Western Line and Harbour Line of the Mumbai Suburban Railway. The nearest metro stations are D. N. Nagar and Andheri West. There are two minor B.E.S.T bus depots in Juhu.</p>
            
    
          </div>


          
        
          </>
    
      )

      default:
        return null;
}
}

return (
  <div className='mainBeach' >
    <h1 className='mainPage'>BEACHES</h1>
    {renderPageContent()}
    <div className='pagination'>
      <button className='prev' onClick={() => setCurrentPage(currentPage === 1 ? 3 : currentPage - 1)}></button>
      <button onClick={() => setCurrentPage(1)}>1</button>
      <button onClick={() => setCurrentPage(2)}>2</button>
      <button onClick={() => setCurrentPage(3)}>3</button>
      <button className='next' onClick={() => setCurrentPage(currentPage === 3 ? 1 : currentPage + 1)}></button>
    </div>
  </div>
)
}

export default Beach