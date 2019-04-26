import React, { Component } from 'react';
import { accounts } from './accountsData';
import AccountsList from './AccountsList';
import scripts from './scripts';
import './accounts.css';

class AccountsController extends Component {
  constructor() {
    super()
    this.state = {
      accounts: accounts,
      sorter: null,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
      this.setState( { searchfield: event.target.value } )
  }

  onSortChange = (event) => {
    this.setState( { sorter: event.target.value } )
  }

  render() {
    const sortAccounts = scripts.sortAccounts;
    const filteredAccounts = scripts.filteredAccounts;

    const accounts = this.state.accounts;
    const searchfield = this.state.searchfield;
    const sorter = this.state.sorter;

    return(
      <div className="accountsController">
        <h1>Your Accounts</h1>
        <label className="addAccLabel"><button className="addAccButton">+</button>Add Account</label>
        <select className="accSort" id="sort" onChange={ this.onSortChange }>
          <option defaultValue >Sort</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
          <option value="alpha">Alphabetical</option>
        </select>
        <input
          className="accSearch"
          type="text"
          placeholder="Search Accounts"
          onChange={this.onSearchChange}
        />
        <AccountsList accounts= { sortAccounts(sorter, filteredAccounts(accounts, searchfield)) } />
        <span className="accTotal">Total: ${accounts.reduce((accumulator, currentValue) => (accumulator + currentValue.accountBalance), 0)}</span>
      </div>
    );
  }
}

export default AccountsController;
