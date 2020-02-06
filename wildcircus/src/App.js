import React from 'react';
import { Link, NavLink, Switch, Route} from 'react-router-dom';
import Performances from './components/Performances';
import Booking from './components/Booking';
import './App.css';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/Performances"component={Performances}/>
        <Route path="/Booking"component={Booking}/>   
      </Switch >

      <NavLink to="/Performances">Performances</NavLink>
      <NavLink to="/Booking">Booking</NavLink>
      
    </div>
  );
}

export default App;
