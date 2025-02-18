import React from 'react';
import './Footer.css'; 
import { Link } from 'react-scroll';


const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-address">
          <h3 className='h3Cont'>Contact Us</h3>
          <div className='pInfo'>
          <p className='p1' >Maharashtra Tourism Development Corporation</p>
          <p className='p2'>Colaba Causeway Fort, Mumbai, Maharashtra, India. 431200</p>
          <p className='p3'>Phone: +91 9533219808</p>
          <p className='p4'>Email: info@maharashtratourism.gov.in</p>
          </div>
        </div>
        <div className="footer-logos">
          <img src="/src/assets/mahaLogo.png" alt="Maharashtra Tourism Logo" />
          <img src="/src/assets/inc-india.jpg" alt="Incredible India Logo" />
        </div>
        <div className="footer-insights">
          <h3 className='footNav'>Helpful Insights</h3>
          <ul>
            <Link to='navbar' smooth={true} duration={200} className='fest'>
            <li>How to Reach</li>
            </Link>
            <Link onClick={'https://en.wikivoyage.org/wiki/Maharashtra'} className='fest'>
            <li>Travel Tips</li>
            </Link>
            <Link to='festival' smooth={true} duration={300} className='fest'>
            Events & Festivals
            </Link>
            <Link to='navbar' smooth={true} duration={200} className='fest'>
            <li>Accommodation</li>
            </Link>
            <Link to='navbar' smooth={true} duration={200} className='fest'>
            <li>Back to Top</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;