import React from 'react';
import home from '../img/home.jpg';
import '../App.css'

function Home () {

  return (
    <div className= "home">
      <div className='home-img'>
          <img className= "image-home"src={home} alt='home image'/>
      </div>
      <div className="accueil">
        BIENVENUE
      </div>
    </div>
  )
}

export default Home;