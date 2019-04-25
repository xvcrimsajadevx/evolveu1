import React, { Component } from 'react';
import { accounts } from './accountsData';
import AccountsList from './AccountsList';
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
    const filteredAccounts = this.state.accounts.filter(accounts => {
      return accounts.accountName.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    const sortAccounts = (accounts) => {
      let sortedAccounts = []

      if (this.state.sorter === "low") {
        sortedAccounts = accounts.sort(function(a, b){return a.accountBalance - b.accountBalance});
      }
      else if (this.state.sorter === "high") {
        sortedAccounts = accounts.sort(function(a, b){return b.accountBalance - a.accountBalance});
      }
      else if (this.state.sorter === "alpha") {
        sortedAccounts = accounts.sort(function(a, b){
          var x = a.accountName.toLowerCase();
          var y = b.accountName.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;})
      }
      else {
        sortedAccounts = accounts;
      }
      return sortedAccounts;
    }

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
        <AccountsList accounts= { sortAccounts(filteredAccounts) } />
        <span className="accTotal">Total: ${accounts.reduce((accumulator, currentValue) => (accumulator + currentValue.accountBalance), 0)}</span>
      </div>
    );
  }
}

export default AccountsController;
