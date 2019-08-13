import React, { Component } from 'react';
import './App.css';
import CardDetails from './CardDetails.js';

class Card extends Component{
  render(){
    let userData = {name: "Dan the Unpure", type: "Coder", ability: "If you have 3 or more cards on the table, Dan evolves into pop culture icon Dan Blitzerian", power: "7", cost: "6"};
  return (
    <div className = "App">
      <CardDetails userData={userData} />
     
    </div>
  )
}
}

export default Card;
