import '../App.css';
import React from 'react';
class Bike extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"ROYAL ENFIELD",
            model:"Himalayan",
            color:"Black",
            year:2022
        };
    }
    changeColor =()=>{
        this.setState({color:"Red"})
    }
    render(){
      return(
        <div>
            <h3>My {this.state.brand}</h3>
            <p>
                It is a {this.state.color} {this.state.model} from {this.state.year}.
            </p>
            <button type='button' onClick={this.changeColor}>Change Color</button>
        </div>
      )
    }
}
export default Bike;