import React, { Component } from 'react';
import WebIcons from './components/WebIcons';
import MathComp from './components/MathComp';
import AccountComp from './components/AccountComp';
import AccountsController from './components/accounts/AccountsController';
import CitiesComp from './components/cities/CitiesComp'
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

    (this.state.id === eventId) ? this.setState({ id: null }) : this.setState({ id: eventId });
  }

  render() {
    const buttonActive = this.state.id;

    return (
      <div className="App">
          <WebIcons
            buttonClick = { this.onButtonClick }
            iconState = { buttonActive }
          />
          { buttonActive ? "" : <img src={ logo } className="App-logo" alt="logo" /> }
          { (this.state.id === 'wolf') ? <MathComp /> : "" }
          { (this.state.id === 'phoenix') ? <AccountComp /> : "" }
          { (this.state.id === 'faerie') ? <AccountsController /> : "" }
          { (this.state.id === 'kraken') ? <CitiesComp /> : "" }
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
      </div>
    );
  }
}

export default App;
