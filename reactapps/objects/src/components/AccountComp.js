import React, { Component } from 'react';
import Account from './Account';

let account = new Account("Checking Account", 25)

class AccountComp extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0,
      operator: "deposit",
    }
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange(event) {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

  buttonClick(account, amount, operator) {
    if (operator === 'deposit') {
      account.accountBalance = account.deposit(account.accountBalance, amount);
    } else if (operator === 'withdraw') {
      account.accountBalance = account.withdraw(account.accountBalance, amount);
    }

    this.setState({amount: 0})
  }

  render() {
    let amount = this.state.amount;
    let operator = this.state.operator;
    let buttonClick = this.buttonClick

    return(
      <div>
        <h1>{account.accountName}</h1>
        <h3>Balance: ${account.accountBalance}</h3>
        <input
          onChange = {this.handleChange}
          value = {this.state.amount}
          type = "number"
          id = "amount"
        />
        <select id="operator" onChange = {this.handleChange}>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        <br />
        <button onClick={ () => { buttonClick(account, amount, operator) } } >Submit</button>
      </div>
    );
  }
}

export default AccountComp;
