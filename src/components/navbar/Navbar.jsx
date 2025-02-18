import "./navbar.css"
import React from 'react'
import {  MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const redirectToAbout = () => {
    navigate('/about');
  };

  const redirectToWhere = () =>{
    window.location.href = 'https://www.clubmahindra.com/states/maharashtra-tourism/how-to-reach-maharashtra';
  }

    const redirectToGoogle = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Tourism_in_Maharashtra';
      };

    
  return (
    <>

        <nav className="navbar">
            <ul className="navbarMenu">
                <h2 className="navbarItem1">Visit <br></br>Maharashtra</h2>
                <button className="navbarItem"onClick={redirectToAbout}>About Us</button>

                <button className="navbarItem" onClick={redirectToWhere}>How to Reach</button>
                <li className="navbarButton">
                <button className="navbarItem" >Accommodations</button>
                <div className="dropdownContent">
                <a href="https://www.mtdc.co/en/stays">Hotels and Resorts</a>
                <a href="https://rural.tourism.gov.in/Maharashtra-RT-homestay.html">Homestays and Guesthouses</a>
                <a href="https://www.treksandtrails.org/collections/camping-in-maharashtra">Camping Sites</a>
                </div>
                </li>
                <li className="navbarButton">
                <button className="navbarItem" onCbuttonck={redirectToGoogle}>Multimedia</button>
                <div className="dropdownContent">
                    <a href="https://www.maharashtra-tourism.org/">Photo Gallery</a>
                    <a href="https://www.youtube.com/@MaharashtraTourismOfficial">Video Tour</a>
                </div>
                </li>
                
                

            </ul>

        </nav>

        <div className="wrapper">
            <div className="mainContext">
                <div className="h1Div">
                <h1 className="headContext">Welcome to Maharashtra</h1>
                </div>
                <div className="h2Div">
                <h4 className="downContext">Where every journey is a discovery of history, nature, and adventure.</h4>
                </div>
                <div className="buttonDiv">
                <button className="navConButton" onClick={redirectToGoogle}>Read More <MoveRight className="moveButton"/></button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Navbar