import React, { Component } from 'react';
import { accounts } from './accountsData';
import AccountsList from './AccountsList';
import './accounts.css';

class AccountsController extends Component {
  render() {
    return(
      <div className="accountsController">
        <h1>Your Accounts</h1>
        <label className="addAccLabel"><button className="addAccButton">+</button>Add Account</label>
        <select className="accSort" id="sort">
          <option defaultValue >Sort</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
          <option value="alpha">Alphabetical</option>
        </select>
        <input
          className="accSearch"
          type="text"
          placeholder="Search Accounts"
        />
        <AccountsList accounts= { accounts } />
        <span className="accTotal">Total: ${accounts.reduce((accumulator, currentValue) => (accumulator + currentValue.accountBalance), 0)}</span>
      </div>
    );
  }
}

export default AccountsController;
