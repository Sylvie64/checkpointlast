import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Performances from './components/Performances';
import Booking from './components/Booking';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className= "title-circus">
        Wild Circus
      </div>

      <Switch>
        <Route path="/Home"component={Home}/>
        <Route path="/Performances"component={Performances}/>
        <Route path="/Booking"component={Booking}/>   
      </Switch >

      <div className= "footer">
        <NavLink to="/Home">Accueil</NavLink>
        <NavLink to="/Performances">Performances</NavLink>
        <NavLink to="/Booking">Réservation</NavLink>
      </div>

    </div>
  );
}


export default App;
