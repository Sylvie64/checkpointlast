import React from 'react';
import troupeCirque from '../img/troupeCirque.jpg';
import clown from '../img/clown.jpg';
import ruban from '../img/ruban.jpg';
import troupeFilles from '../img/troupeFilles.jpg';
import acrobate from '../img/acrobate.jpg';

function Performances () {
  return (
    <div className= "performance">
      
      <div className= "title-laugh">    
        RIRE
      </div>
      <div className= "laugh">
        Venez découvrir notre fabuleuse troupe de clowns et redécouvrez le plaisir de rire.
      </div>
      <div classsName= "img-laugh">
        <img className= "img-troupe-clowns" src = {troupeCirque} alt="clowns" />
        <img className= "img-clowns" src = {clown} alt="clowns" />
      </div>

      <div className= "title-dream">    
        REVER
      </div>
      <div className= "dream">
        Laissez-vous emporter dans un autre monde, où le réel et l'imaginaire ne font plus qu'un, avec nos artistes acrobates, voltigeurs, magiciens...
      </div>
      <div className= "img-dream">
        <img className= "img-ruban" src = {ruban} alt="ruban" />
        <img className= "img-acrobate" src = {acrobate} alt="acrobate" />
        <img className= "img-troupe-filles" src = {troupeFilles} alt="acrobates" />
      </div>
    </div>
  );
}

export default Performances;