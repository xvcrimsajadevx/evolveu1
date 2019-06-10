import React, { Component } from 'react';
import IconComp from "./components/IconComp.js";
import MathComp from "./components/MathComp.js";
import './App.css';

import AccountsManager from "./components/AccountsManager";
import AccountsController from './components/Accounts/AccountsController.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      destination: "Undefined",
      test: "Unknown"
    }
  }
  handleClick = (event) => {
    this.setState({
      destination: event.target.id
    }
    )
    if (event.target.id === 'Rocket Ship') {
      this.setState({
        destination: <MathComp />
      })
    } else if (event.target.id === "Jupiter") {
      this.setState({
        destination: <AccountsManager/>
      })
    }
    else if (event.target.id === "Mars") {
      this.setState({
        destination: <AccountsController/>
      })
    }
  }
  render() {
    return (
      <div>
        <IconComp
          destinationState={this.state.destination}
          handleClick={this.handleClick}
        ></IconComp>
      </div>
    );
  }
}
export default App;
