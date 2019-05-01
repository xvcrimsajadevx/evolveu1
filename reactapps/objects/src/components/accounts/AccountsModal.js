import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AccountCreator from './AccountCreator';
import './accounts.css';


class AccountsModal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'overlay';
    document.getElementById('accController').appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.getElementById('accController').removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(
      <div className='modal'>
        { (this.props.modalFunction === "addAccount") ? <AccountCreator modal={ this.props } /> : ''}
      </div>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />;
  }
}

export default AccountsModal;
