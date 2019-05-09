import React, { Component } from 'react';

class AccountsManage extends Component {
  constructor() {
    super()
    this.state = {
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

  buttonClick(account, amount, operator) {
    let balance = account.accountBalance;

    if (operator === 'deposit') {
      balance = account.deposit(balance, amount);

      this.setState({amount: 0})
    } else if (operator === 'withdraw') {
      balance = account.withdraw(balance, amount);

      this.setState({amount: 0})
    }

    return balance;
  }

  deleteAccount(account, accounts) {
    var index = accounts.indexOf(account);

    if (index > -1) {
      accounts.splice(index, 1);
    }
  }

  render() {
    let accountId = this.props.modal.account;
    let accounts = this.props.modal.accounts;

    let account = accounts.find(account => { return account.id === accountId } );

    let amount = this.state.amount;
    let operator = this.state.operator;

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

        <button onClick={ this.props.modal.modalOff }>Cancel</button>
        <button onClick={ (e) => { this.buttonClick(account, amount, operator); this.props.modal.modalOff(e) } }>Submit</button>
        <br />
        <button onClick= { (e) => {this.deleteAccount(account, accounts); this.props.modal.modalOff(e)} }>Delete Account</button>
      </div>
    );
  }
}


export default AccountsManage;
