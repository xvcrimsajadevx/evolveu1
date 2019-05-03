import React, { Component } from 'react';
import math from './math';
import accountMath1 from './AccountMath';


class AccountController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountName: "Chequing",
            balance: accountMath1.balance,
            inputValue: 0
         };
         this.accountHandleChange = this.accountHandleChange.bind(this)
        }
        buttonClick (event, a, b) {

            let buttonId = event.target.id;

              if (buttonId === "widthdraw") {
                this.setState({balance: math.sumSub(a,b) })
              } else if (buttonId === "deposit") {
                this.setState({balance: math.sumAdd(a,b) })
              }
          }

    accountHandleChange(event) {
        const { id, value } = event.target
        this.setState({
          [id]: value
        })}

    render() {
// accountMath1.deposit();
// console.log (accountMath1.balance);
// accountMath1.widthdraw();
// console.log (accountMath1.balance);

let num1 = this.state.balance;
let num2 = this.state.inputValue;
        return (
            <div >
            <h1>{accountMath1.accName} Account</h1>
            <input onChange={this.accountHandleChange} value={this.state.inputValue} type="number" id="inputValue"></input>
            <br/>
            <button onClick= {(e) => {this.buttonClick(e, num1, num2)}} id = "deposit">Deposit</button>
            <button onClick= {(e) => {this.buttonClick(e, num1,num2)} } id = "widthdraw" >Widthdraw</button>
            <h1>{accountMath1.accName} Account Balance = ${this.state.balance}</h1>
            </div>
        );
    }
}

export default AccountController;
