import React from 'react'
import { useState } from 'react';
import './nature.css'
const Nature = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
            <>

        
          
          <div className='beachInfo'>
            <h2 className='mainHeading'>Bhimashankar Wildlife Sanctuary</h2>
            <p className='name'>Pune</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628792641456FOREST_bhimashankar_banner02.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Home to the state animal of Maharashtra, Indian Giant Squirrel, the Bhimashankar Wildlife Sanctuary is a vast, bio-diverse wonder located 138 kilometres from the city of Pune. A certified IBA (Important Bird Area) sanctuary, it also boasts a diverse range of flora and fauna, making it one of the top 12 biodiversity hotspots across the world today! </p>
            <p className='info1'>
            If you are an adventure enthusiast, the reserve offers wonderful trekking paths that allow you to explore this natural wonder at leisure. And if you’re a shutterbug, get ready to capture striped hyenas, golden jackals, and barking deers through the lens of your camera. The sanctuary also houses the Bhimashankar temple, one of only twelve self-emerged Shiva temples in India, known as Jyotirlingas. The monsoon season is the perfect time to experience the sanctuary in all its glory.</p>

          </div>

        


          <div className='beachInfo'>
            <h2 className='mainHeading'>Kaas Plateau Reserved Forest </h2>
            <p className='name'>Satara</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628792928814FOREST_kaas_gallery02.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>With its dense forests and beautiful vegetation, the Kaas Plateau Reserved Forest is a gem waiting to be explored. Located just 30 mins ahead of Satara, the plateau houses Maharashtra’s very own valley of flowers and was declared a UNESCO World Natural Heritage Site in 2012. Filled with colourful flowers and viridian forests, Kaas is home to more than 850 species of flowers including 33 endangered species. The valley comes alive in the monsoon and winter months and offers fascinating views of the Koyna Sanctuary that borders the plateau.   </p>
            <p className='info1'>
            August, September and October are the best months to visit, as you can enjoy light drizzles and pleasant weather, making the walk around the plateau even more delightful. You can also spend the evening camping near the plateau and enjoy breathtaking views of fireflies as they light up the area.</p>

          </div>

          <div className='beachInfo'>
            <h2 className='mainHeading'>Pench National Park and Tiger Reserve</h2>
            <p className='name'>Seoni and Chhindwara</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793438593FOREST_pench_gallery03.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Named after the river that flows through it, Pench is also the only National Park and Tiger Reserve in India that is spread across two states - Madhya Pradesh and Maharashtra. In Maharashtra, you can visit it through any of these six safari gates - Chorbahuli, Khursapar, Khubada, Surewani, and Sillari. </p>
            <p className='info1'>
            So rich is the biodiversity of the reserve that it has been the inspiration behind Rudyard Kipling's classic The Jungle Book. The Reserve is home to a variety of animal species including the Bengal Tiger, crocodiles, Spotted Deer and Nilgai among others. If you’re a birdwatcher you will be delighted to know that the reserve is home to over 225 species of resident and migrant birds, including hawk eagles, honey buzzards, colourful fowl, kingfishers and a variety of owls! Thus the best way to experience Pench is to take multiple safaris over a few days and explore it at leisure.</p>

          </div>


          <div className='beachInfo'>
            <h2 className='mainHeading'>Bor Tiger Reserve</h2>
            <p className='name'>Wardha District</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628792779785FOREST_bor_gallery03.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Situated in Hingni, in the Wardha district of Maharashtra, the Bor Tiger Reserve spans a vast expanse of 138 km and is home to a number of mammals, reptiles, and birds. It was formerly a wildlife sanctuary that was converted into a tiger reserve in 2014 to conserve and sustain the tiger population in India. Besides rare animal and bird species, the reserve is also home to a variety of flora including Bamboo, Tendu and Teak. </p>
            <p className='info1'>
            While it is open to tourists all year round, April and May are the best months to trek through the picturesque region, watching animals in their natural habitat or capturing the scenic beauty through the lens of your camera. Explore the reserve by booking a safari, plan excursions to the various temples in the vicinity or enjoy camping in a forest lodge to make the most of your stay in the wilderness.</p>

          </div>
          <div className='beachInfo'>
            <h2 className='mainHeading'>Koyna Wildlife Sanctuary </h2>
            <p className='name'>Satara</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793191009FOREST_koyna_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Nestled amidst the scenic Sahyadri Mountain Ranges in the Satara district of Maharashtra, the Koyna Wildlife Sanctuary is a UNESCO World Heritage Site famous for its stunning landscapes, multiple heritage sites, and abundant flora. It is one of Maharashtra's tiger reserves and home to many species of animals such as the Indian Bison, Sambar Deer, King Cobra, and the Giant Squirrel among others. </p>
            <p className='info1'>
            If you’re a bird lover, Asian Fairy Bluebirds and Rufous Woodpeckers are two of the many bird species found in the wilderness here. You can also visit the Koyna Dam, a massive hydroelectric marvel, or the Vasota Fort, a heritage site constructed by Malwa King Raja Bhoja in the 12th century. So whether you’re a nature enthusiast or a history buff, the Koyna Wildlife Sanctuary has something for everyone.</p>
          </div>
        

        </>
     )
    case 2:
      return (

            <>
          <div className='beachInfo'>
            <h2 className='mainHeading'>Tadoba-Andhari Tiger Reserve </h2>
            <p className='name'>Chandrapur district</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793832749FOREST_tadoba_gallery02.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>In the Chandrapur district of Maharashtra lies the state’s oldest and largest national park, best known for its tiger sightings - the Tadoba-Andhari Tiger Reserve. The reserve is home to a large population of big cats, including the Indian Leopard, Jungle Cat and the Bengal Tiger. With its grasslands and a large number of water bodies, Tadoba-Andhari is also one of the best birding areas in the state. </p>
            <p className='info1'>
            A safari is the best way to explore Tadoba-Andhari and view the diverse animal, flora and fauna that the reserve is home to. And while you are sure to spot Wild Dogs, Chitals or Nilgai on your drive, you could be in luck and get a glimpse of the majestic Bengal Tiger as well. Tadoba-Andhari promises to be a memorable holiday experience for the entire family.</p>
            </div>
          
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Karnala Bird Sanctuary</h2>
            <p className='name'>Raigad District</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793103204FOREST_karnala_gallery03.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Situated about 30 km from Panvel, the Karnala Bird Sanctuary is a paradise for bird watchers with over 200 beautiful species of birds residing here. The sanctuary boasts of glorious nature trails and is the best place to spot the Small Sunbird, Slaty Legged Crake, Bulbul, Malabar Lark, Nilgiri Wood Pigeon, and other rare bird species.</p>
            <p className='info1'>
            If adventures are what you enjoy, trek through the ancient 12th century Karnala Fort and take in the serene views of the Mumbai shoreline from the top. Don’t forget to take a look around and enjoy the sights of colourful butterflies in the wilderness. If you want to see the sanctuary in its complete green glory, monsoons are the best time to plan your visit.</p>
    
          </div>
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Nawegaon Nagzira Tiger Reserve </h2>
            <p className='name'>Nishani</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793342720FOREST_nawegaon_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Situated in the North-eastern corner of Maharashtra, Nawegaon-Nagriza is the 5th tiger reserve of the state and home to almost all the major flora and fauna species found in central India. The best time to visit the reserve is during winters when it comes alive with green foliage and the song of migratory birds.</p>
            <p className='info1'>
            With multiple lakes inside the reserve, Nawegaon-Nagzira is a paradise for bird watchers. Enjoy an open jeep jungle safari through the forests as you spot Tigers, Leopards, Sloths, Wild Boars, Giant Flying Squirrels and more. You can also enjoy a walk through the local villages bordering the reserve, enjoying a glimpse of the local culture and food as you do so. Neighbouring destinations such as Kanker, Narayanpur and Kawardha are recommended if you are looking to get a glimpse of tribal life and culture.</p>
    
          </div>
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Thane Creek Flamingo Sanctuary</h2>
            <p className='name'>Airoli</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793887616FOREST_thanecreek_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Accessible from Airoli, the Thane Creek Flamingo Sanctuary is a little-known spot flocked by migratory flamingos every year. The majority of these are Lesser Flamingos who come from Kutch, while the Greater Flamingos are said to come from as far as Iran. The creek itself is classified as an IBA (Important Bird Area) as more than 160 species of birds can be found here.</p>
            <p className='info1'>
            You can take a boat tour to see the flamingos out on the water and if you’re lucky, you might even spot a dolphin! While the best time to see flamingos is from December to May, there’s plenty to delight throughout the year. If you are travelling with young children, do visit the state-of-the-art museum that provides interactive information on marine wildlife. Be sure not to miss the walking trails that go through the wetlands as you can see a wider variety of birds and experience the biodiverse flora and fauna up close.</p>
    
          </div>
          
          </>
        

    
      )
      case 3:
        return (

            <>
          <div className='beachInfo'>
            <h2 className='mainHeading'>Sahyadri Tiger Reserve</h2>
            <p className='name'>Park in Kathi</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793532249FOREST_sahadri_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Located just north of Alibaug, Kihim beach is a bird watcher’s paradise. With a stunning view, Kihim is a colourful haven brimming with greenery and wildflowers. Take a walk around the village to visit the various temples including a rare Kalbhairav Temple. Indulge in various water adventure sports like Motorbiking, Paragliding, Banana Boating and more as you enjoy the bustling sea waves and the clean beaches on the Konkani coastline. </p>
            <p className='info1'>
            Enjoy picturesque views of the sun rising and setting when you visit this beach. During its blooming season, it attracts colourful butterflies and bees drawn to its wildflowers. Unwind at this charming village while soaking in the natural beauty and enjoying the pleasures it offers!</p>
         
            </div>
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Gautala Wildlife Sanctuary</h2>
            <p className='name'>Sambhajinagar</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628792847609FOREST_gautala_gallery02.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Barely a two-hour drive from Sambhajinagar, Gautala Wildlife Sanctuary lies in the Satmala and Ajanta hill ranges of the Western Ghats. Established in the year 1986 as a protected wildlife reserve, Gautala is home to more than 230 birds and animal species. It is said that Gautam Buddha spent several years fasting in the forest before reaching enlightenment.</p>
            <p className='info1'>
            For all the history buffs, you can explore some of the oldest specimens of rock-cut cave temples of India. Pray at the Mahadev Temple or the Patnadevi Temple situated inside the Pitalkhora Caves. Take a walk in the lap of nature as you spot several different bird and animal species and explore the Sita Khori waterfall and the Gautala Lake. Visit in the winter months for the best experience at Gautala!</p>
    
          </div>
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Melghat Tiger Reserve </h2>
            <p className='name'>Amravati</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793255355FOREST_melghat_gallery02.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Located 225 km away from Nagpur, the Melghat Tiger Reserve rests in the South of the Satpura Hill Range and was the first official tiger reserve of Maharashtra in 1974. Among other exotic animal and bird species, this reserve is one of the few areas around the world to house the critically endangered Forest Owlet. </p>
            <p className='info1'>
            While you can book a safari through the forest to spot the Indian Gaur, Leopard, Nilgai, Sambar Deer, Sloth Bear, and other species of wild animals, a night safari is an experience that you will not forget in a long time. While the Melghat Tiger Reserve enjoys pleasant weather all year long, it is best enjoyed during the winter months. If you are an adventure enthusiast, you can enjoy activities such as elephant rides, kayaking, zorb balling, trekking and river-crossing among others. And if you have an interest in culture, you can book a tribal dance show to view the culture of the tribes native to this region.</p>
    
          </div>
    
    
          <div className='beachInfo'>
            <h2 className='mainHeading'>Lonar Crater </h2>
            <p className='name'>Buldhana district</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628794714454HERITAGE_lonar_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Maharashtra is home to a variety of heritage sites but none surpass the uniqueness of the meteorological marvel that is the Lonar Crater. Based in the Buldhhana district of Amravati, Lonar was formed as a result of a meteor collision that occurred roughly 50,000 years ago that created a dense crater with a rim of 1.8 kilometres and a partly alkaline and partly saline lake within. It has links to mythology too - locals believe the lake was formed when a demon named Lonasura was pushed into the netherworld by Lord Vishnu.</p>
            <p className='info1'>
            Its mysterious origins and religious roots have made the site a notable tourist attraction. The temples nearby are more than a thousand years old, while the presence of migratory birds has made it a popular spot for wildlife photographers to visit. Scientists have aptly named Lonar the bowl of biodiversity, it is one of the only four basaltic rock craters in the world and has been classified as a national geo-heritage monument.</p>
    
          </div>

          
          <div className='beachInfo'>
            <h2 className='mainHeading'>Sanjay Gandhi National Park</h2>
            <p className='name'>Mumbai</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793627066FOREST_sanjaygandhi_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>One of the largest protected areas in the state can be found within one of the busiest cities in India and forms 20% of Mumbai’s geographical area. Sanjay Gandhi National Park is home to 274 bird species, 170 butterfly species, and 35 mammal species. The easy access to nature attracts around 2 million visitors each year, making it one of the most visited national parks in the country.</p>
            <p className='info1'>What makes the park so popular is the immediate connection that you can feel with nature once you enter as it takes you away from the city noises to the chirping of birds. You’re also likely to come across monkeys and deers as they freely roam around. There is a lot to experience here and multiple visits are recommended if you want to explore everything that the park has to offer - from scaling the rocks to visit the Kanheri Caves to riding the Van Rani toy train to paddle boating at the lake. The place is a special treat for birdwatchers as there are plenty of opportunities to spot diverse species, especially on the Bamboo Hut, Kanheri, and Nagala Block Trails. The national park is open all year round and there’s a unique charm to be experienced in each season, so don’t hesitate to visit if you are in the area.</p>
            
    
          </div>

          <div className='beachInfo'>
            <h2 className='mainHeading'>Umred Karhandla Wildlife Sanctuary  </h2>
            <p className='name'>Khaksi</p>
            <img src="https://mtdc-main.s3.ap-south-1.amazonaws.com/1628793984802FOREST_umredkarandla_banner01.jpg" alt="" className='imgInfo' />
            <h3 className='aboutBeach'>About</h3>
            <p className='info'>Located a mere 50 kilometres from Nagpur, the Umred Karhandla Wildlife Sanctuary is a link between the Tadoba-Andhari, Bor, Pench, and Nawegaon-Nagzira and Umred Karhandla reserves. In this bird haven, you can spot over 180 species of birds, including 10 migratory birds and 7 endangered species in the reserve. Some of the common birds found here are Parakeets, Shikras, Junglefowls, and Buzzards. There’s no shortage of mammals or reptiles either, making the sanctuary a great destination for a pleasant safari.</p>
            <p className='info1'>For an ideal getaway, consider visiting this destination between March and June. You can even visit the mighty Wainganga river and the massive Gose Khurd Dam that bounds the sanctuary. When you do visit Umred Karhandla, be ready to enjoy a serene and secluded vacation away from the chaos of the city. </p>
            
    
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
      <button className='prev' onClick={() => setCurrentPage(currentPage === 1 ? 3 : currentPage - 1)}></button>
      <button onClick={() => setCurrentPage(1)}>1</button>
      <button onClick={() => setCurrentPage(2)}>2</button>
      <button onClick={() => setCurrentPage(3)}>3</button>
      <button className='next' onClick={() => setCurrentPage(currentPage === 3 ? 1 : currentPage + 1)}></button>
    </div>
  </div>
)
}

export default Nature