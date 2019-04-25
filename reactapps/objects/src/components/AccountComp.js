import React, { Component } from 'react';
import Account from './Account';

class AccountComp extends Component {
  constructor() {
    super()
    this.state = {
      account: new Account("Checking Account", 25),
      amount: 0,
      operator: "deposit",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

  buttonClick(e, account, amount, operator) {
    let balance = account.balance;

    if (operator === 'deposit') {
      balance = account.deposit(balance, amount);

      this.setState({balance: balance, amount: 0})
    } else if (operator === 'withdraw') {
      balance = account.withdraw(account.balance, amount);

      this.setState({balance: account.balance, amount: 0})
    }
  }

  render() {
    let account = this.state.account;
    let amount = this.state.amount;
    let operator = this.state.operator;

    return(
      <div>
        <h1>{this.state.account.accountName}</h1>
        <h3>Balance: ${this.state.account.balance}</h3>
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
        <button onClick={ (e) => { this.buttonClick(e, account, amount, operator) } }>Submit</button>
      </div>
    );
  }
}

export default AccountComp;
