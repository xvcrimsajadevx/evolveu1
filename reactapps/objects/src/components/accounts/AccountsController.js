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
      sorter: null,
      searchfield: '',
      showModal: false,
      modalFunction: '',
      accountId: '',
    }
    this.handleModal = this.handleModal.bind(this);
  }

  onSearchChange = (event) => {
      this.setState( { searchfield: event.target.value } )
  }

  onSortChange = (event) => {
    this.setState( { sorter: event.target.value } )
  }

  handleModal = (event, accountId) => {
    //console.log(event.target)
    this.state.showModal ?
    this.setState({ showModal: false, modalFunction: '' }) :
    this.setState({ showModal: true, modalFunction: event.target.id, accountId: accountId})
  }

  render() {
    const sortAccounts = scripts.sortAccounts;
    const filteredAccounts = scripts.filteredAccounts;

    const accountId = this.state.accountId;
    const searchfield = this.state.searchfield;
    const sorter = this.state.sorter;

    const modalFunction = this.state.modalFunction;

    // console.log(this.state.showModal);
    //console.log(this.state.modalFunction);
    // console.log(this.state.accountId);

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
        <AccountsList accounts= { sortAccounts(sorter, filteredAccounts(accounts, searchfield)) } toggleModal={ this.handleModal } />
        <span className="accTotal">Total: ${accounts.reduce((accumulator, currentValue) => (accumulator + currentValue.accountBalance), 0)}</span>

        { this.state.showModal ? <AccountsModal
          accounts={ accounts }
          account={ accountId }
          modalFunction={ modalFunction }
          modalOff={ this.handleModal }
        /> : "" }
      </div>
    );
  }
}

export default AccountsController;
