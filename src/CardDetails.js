import React, { Component } from 'react';
import './App.css';
import Dan from "./Dan.jpg"


class CardDetails extends Component {

    render() {
        return(
            <div className="Card">
                <div>
            <label id = "name">
           {this.props.userData.name}   
           </label>
            <label id = "cost">{this.props.userData.cost}</label>
            </div>
           <img id = "image" src={Dan}/>
           

           <p id = "type">
           {this.props.userData.type}
           </p>
           <p id = "ability">
           {this.props.userData.ability}
           </p>
           <p id = "power">
            {this.props.userData.power}
            </p>
            
            </div>
            
        )
    }
}

export default CardDetails;
