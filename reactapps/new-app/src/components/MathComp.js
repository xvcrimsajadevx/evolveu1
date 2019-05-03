import React, { Component } from 'react';
import math from './math';

class MathComp extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      num1: 0,
      num2: 0,
      sum: "Undefined"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { id, value } = event.target
    this.setState({
      [id]: value
    })
  }
  buttonClick (event, a, b) {

    let buttonId = event.target.id;

      if (buttonId === "add") {
        this.setState({sum: math.sumAdd(a,b) })
      } else if (buttonId === "sub") {
        this.setState({sum: math.sumSub(a,b) })
      } else if (buttonId === "mult") {
        this.setState({sum: math.sumMult(a,b) })
      }  else if (buttonId === "div") {
        this.setState({sum: math.sumDiv(a,b) })
      } else {
        this.setState({sum:"Error"})
      }
  }
  render() {
    let num1 = this.state.num1;
    let num2 = this.state.num2;
    return (
      <div>
        <h1 style={{ color: 'White' }}>Hello from math comp</h1>
        <h2 style={{ color: 'White' }}>Calculator</h2>
        <h3 style={{ color: 'White' }}>Number 1</h3>
        <input onChange={this.handleChange} value={this.state.num1} type="number" id="num1"></input>
        <br></br>
        <h3 style={{ color: 'White' }}>Number 2</h3>
        <input onChange={this.handleChange} value={this.state.num2} type="number" id="num2"></input>
        <br></br>
        <button id = "add" onClick= {(e) => {this.buttonClick(e, num1,num2)}}>+</button>
        <button id = "sub" onClick={(e) => {this.buttonClick(e, num1,num2)}}>-</button>
        <button id = "mult" onClick={(e) => {this.buttonClick(e, num1,num2)}}>x</button>
        <button id = "div" onClick={(e) => {this.buttonClick(e, num1,num2)}}>/</button>
        <h1 style={{ color: 'White' }}>Total: {this.state.sum}</h1>
      </div>
    )
  }
}
export default MathComp;