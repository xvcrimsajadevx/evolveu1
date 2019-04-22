import React, { Component } from 'react';
import math from './math'

class MathComp extends Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      sum: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

    buttonClick(event, a, b) {
    let buttonId = event.target.id;

    if (buttonId === "add") {
      this.setState({ sum: math.sumAdd(a, b) });
    } else if (buttonId === "sub") {
      this.setState({ sum: math.sumSub(a, b) });
    } else if (buttonId === "mult") {
      this.setState({ sum: math.sumMult(a, b) });
    } else {
      this.setState({ sum: math.sumDiv(a, b) });
    }

    //console.log(buttonId);
    }

  render(){
    let num1 = this.state.num1;
    let num2 = this.state.num2;

    return(
      <div>
        <h1>Hello World from MathComp</h1>
        <h2>Calculator</h2>
        Enter first number:
          <input
            onChange = {this.handleChange}
            value = {this.state.num1}
            type = "number"
            id = "num1"
          />
          <br />
        Enter Second number:
          <input
            onChange = {this.handleChange}
            value = {this.state.num2}
            type = "number"
            id = "num2"
          />
          <br />

        <button onClick={ (e) => {this.buttonClick(e, num1, num2)} } id="add">+</button>
        <button onClick={ (e) => {this.buttonClick(e, num1, num2)} } id="sub">-</button>
        <button onClick={ (e) => {this.buttonClick(e, num1, num2)} } id="mult">x</button>
        <button onClick={ (e) => {this.buttonClick(e, num1, num2)} } id="div">/</button>

        <br />

        <h4 id="total">Total: { this.state.sum }</h4>

      </div>

    );
  }
}

export default MathComp;
