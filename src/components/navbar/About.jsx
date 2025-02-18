import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
    <div className="about-us">
      <h1>About Us</h1>
      <p className='pTag'>
      We at MTDC are dedicated to expanding tourism in Maharashtra. We efficiently manage numerous well-established resorts and restaurants all across the state. Offering heritage walks, adventure activities, and aquatic sports, along with interesting tour packages, we give you the opportunity to explore the riches of this state to the fullest. Embracing Maharashtra's cultural heritage, our resorts are well-known for offering comfortable rooms with exclusive views, while our restaurants specialize in the preparation and service of a variety of local dishes of the area. We invite you to enjoy the tranquil beaches and the serenity of the mountains, to find peace in the pilgrimage sites or to adventures in the forests. Our resorts are perfectly based in each unique location so you have the best holiday break ever. Taking tremendous pride in preserving the environment, our teams run the resorts by providing employment opportunities for the locals, encouraging them to be a part of our efforts in giving every customer a delightful experience.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team">
        <div className="team-member">
          <img src="https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg?auto=compress&cs=tinysrgb&w=600" alt="John Doe" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://images.pexels.com/photos/26336883/pexels-photo-26336883/free-photo-of-man-in-shirt-sitting-with-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Marketing Head</p>
        </div>
        <div className="team-member">
          <img src="https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emily Johnson" />
          <h3>Emily Johnson</h3>
          <p>Content Creator</p>
        </div>
      </div>

      <h2 className='h2Last'>About Maharashtra Tourism</h2>
      <p>
      Maharashtra, a state in western India, is a treasure trove of cultural and natural wonders. Known for its bustling cities like Mumbai and Pune, Maharashtra offers a diverse travel experience. The state is home to stunning beaches along the Konkan coast, scenic hill stations such as Mahabaleshwar and Lonavala, and majestic forts like Raigad and Sinhagad. Maharashtra also boasts rich cultural heritage sites, including the ancient Ajanta and Ellora Caves, which are UNESCO World Heritage Sites. The vibrant festivals, delectable cuisine, and warm hospitality of the locals add to the charm of exploring this state. From the historical landmarks of Aurangabad to the spiritual centers of Nashik and Shirdi, Maharashtra provides a unique blend of tradition and modernity. Whether you're an adventure seeker, history buff, or nature lover, Maharashtra has something to offer for every traveler. Come and experience the magic of Maharashtra!
      </p>
    </div>
    </>
  );
};

export default About;
