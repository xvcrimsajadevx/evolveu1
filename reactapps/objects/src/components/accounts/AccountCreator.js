import React, { Component } from 'react';
import { accounts } from './accountsData';
import Account from './Account';

let accountId = 1;

class AccountCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: "Account " + accountId,
      selectedOption: '',
    };
  }

  handleOptionChange = (event) => {
    this.setState({
      accountName: event.target.value,
      selectedOption: event.target.value,
    });
  }

  createAccount = () => {
    let accountName = this.state.accountName;
    let initBalance = 0;

    let account = new Account(accountId, accountName, initBalance);

    accounts.push(account);
    accountId++;
    console.log(account);
    console.log(accounts);
    this.props.modal.modalOff()
  }

  render() {
    //console.log ("Accounts creator", this.props.modal)
    //console.log ("Accounts creator", this.state.accountName)


    console.log("accountId: ", accountId)

    return (

      <div>
        <h1>Create New Account</h1>
        <span>Account Name: </span> <input value={this.state.accountName} onChange={this.handleOptionChange}></input>
        <br/>
        <h2>Starting Balance: $0</h2>

        <div>
          <fieldset>
            <legend>Would you like to:</legend>

          <label htmlFor = "Transfer"><input
            type = "radio"
            id= "Transfer"
            name = "transferDepositRadio"
            value='transfer'
            onChange={this.handleOptionChange}
          />
            Transfer</label>
            <label htmlFor = "Deposit"><input
              type = "radio"
              id= "Deposit"
              name = "transferDepositRadio"
              value='deposit'
              onChange={this.handleOptionChange}
            />
            Deposit</label>
          <br />
            { (this.state.selectedOption === 'deposit' ) ? <input type = "number"></input> : "" }
            { (this.state.selectedOption === 'transfer' ) ? "Function not yet intruduced" : "" }
          </fieldset>

          <br/>
          <button onClick={this.props.modal.modalOff}>Cancel</button>
          <button onClick= {this.createAccount}>Submit</button>
          <br/>

        </div>
      </div>
    );
  }
}

export default AccountCreator;
