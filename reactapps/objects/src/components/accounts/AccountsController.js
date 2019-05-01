import React, { Component } from 'react';
import { accounts } from './accountsData';
import AccountsList from './AccountsList';
import scripts from './scripts';
import './accounts.css';
import AccountsModal from './AccountsModal';

class AccountsController extends Component {
  constructor() {
    super()
    this.state = {
      accounts: accounts,
      sorter: null,
      searchfield: '',
      showModal: false,
      modalFunction: '',
    }
    this.handleModal = this.handleModal.bind(this);
  }

  onSearchChange = (event) => {
      this.setState( { searchfield: event.target.value } )
  }

  onSortChange = (event) => {
    this.setState( { sorter: event.target.value } )
  }

  handleModal = (event) => {
    this.state.showModal ?
    this.setState({ showModal: false, modalFunction: '' }) :
    this.setState({ showModal: true, modalFunction: event.target.id });
  }

  render() {
    const sortAccounts = scripts.sortAccounts;
    const filteredAccounts = scripts.filteredAccounts;

    const accounts = this.state.accounts;
    const searchfield = this.state.searchfield;
    const sorter = this.state.sorter;

    const modalFunction = this.state.modalFunction;

    return(
      <div className="accountsController" id='accController'>
        <h1>Your Accounts</h1>
        <label className="addAccLabel"><button className="addAccButton" onClick={ this.handleModal } id="addAccount">+</button>Add Account</label>
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

        { this.state.showModal ? <AccountsModal
          modalFunction={modalFunction}
          modalOff={this.handleModal}
        /> : "" }
      </div>
    );
  }
}

export default AccountsController;
