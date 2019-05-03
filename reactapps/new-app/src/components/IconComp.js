import React, { Component } from 'react';
//import logo from './logo.svg';
import iconJupiter from './jupiter.svg';
import iconEarth from './earth.svg';
import iconMars from './mars.svg';
import iconShip from './ship.svg';
import iconSun from './sun.svg';
import logo from './logo.svg';



class IconComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      destination: this.props.destinationState,
    }
    this.state = {
      destination: this.props.destinationState,
    }
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="App">
          <h1 style={{ color: 'White' }}>Space... The Final Frontier</h1>
          <br></br>
          <button onClick={this.props.handleClick} id="Jupiter">
            <h1 id="Jupiter">Jupiter</h1>
            <img id="Jupiter" src={iconJupiter} className="App-logo2" alt="logo" />
          </button>
          <button className="Button" onClick={this.props.handleClick} id="Rocket Ship">
            <h1 id="Rocket Ship" >Rocket Ship</h1>
            <img id="Rocket Ship" src={iconShip} className="App-logo2" alt="logo" />
          </button>
          <button className="Button" onClick={this.props.handleClick} id="Mars">
            <h1 id="Mars">Mars</h1>
            <img id="Mars" src={iconMars} className="App-logo2" alt="logo" />
          </button>
          <button className="Button" onClick={this.props.handleClick} id="Earth">
            <h1 id="Earth">Earth</h1>
            <img id="Earth" src={iconEarth} className="App-logo2" alt="logo" />
          </button>
          <button className="Button" onClick={this.props.handleClick} id="Sun">
            <h1 id="Sun">Sun</h1>
            <img id="Sun" src={iconSun} className="App-logo2" alt="logo" />
          </button>
          <br></br>
          <h1 style={{ color: 'White' }}>Destination</h1>
          <h2 style={{ color: 'White' }}> {this.props.destinationState} </h2>
          <h2 style={{ color: 'White' }}>{this.props.testState}</h2>
          <br></br>
        </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              DeVito Vision
          </p>
            <a
              className="App-link"
              href="https://www.youtube.com/watch?v=6IdKTZwdBb8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn About Danny DeVito
          </a>
          </header>
        </div>
      </div>
    )
  }
}
export default IconComp;