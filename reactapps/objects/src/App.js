import React, { Component } from 'react';
import WebIcons from './components/WebIcons';
import MathComp from './components/MathComp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
    }
  }

  onButtonClick = (event) => {
    let eventId = event.target.id;

    this.setState({ id: eventId });
  }


  render() {
    const buttonActive = this.state.id;

    return (
      <div className="App">
        <header className="App-header">
          <WebIcons
            buttonClick = {this.onButtonClick}
            iconState = {this.state.icons}
          />

          { buttonActive ? <h4>You clicked {this.state.id}</h4> : <img src={logo} className="App-logo" alt="logo" /> }
          { (this.state.id === 'wolf') ? <MathComp /> : "" }
          { (this.state.id === 'kraken') ? <img src={logo} className="App-logo" alt="logo" /> : "" }
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
