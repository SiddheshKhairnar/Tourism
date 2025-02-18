import React from 'react'
import "./home.css"
import Navbar from '../navbar/Navbar'
import Explore from '../explore/Explore'
import Cuisine from '../cuisine/Cuisine'
import Culture from '../culture/Culture'
import Festival from '../festival/Festival'
import Footer from '../footer/Footer'
import Login from '../login/Login'

const Home = () => {
  return (
    <>
        <div className="main">
            <div className="homeContainer">   
                <Navbar img src="/src/assets/bgimg.jpg" alt=""  />
            </div>

            <div>
                <Explore />
            </div>
            <div>
                <Cuisine />
            </div>

            <div>
               <Culture />
            </div>
            <div>
              <Festival />
            </div>
            <div>
              <Footer />
            </div>

           <Login />

   
        </div>
    </>
  )
}

export default Home