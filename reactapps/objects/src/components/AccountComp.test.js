import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import AccountComp from './AccountComp';
import Account from './Account';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountComp />, div);

  let thisAccountComp = new AccountComp;

  let account = new Account("Checking Account", 25);
  let amount = 15;
  let operator = 'deposit';

  thisAccountComp.buttonClick(account, amount, operator);

  expect(account.accountBalance).toBe(40);

  let newAccount = new Account("Checking Account", 875);
  let newAmount = 400;
  let newOperator = 'withdraw';

  thisAccountComp.buttonClick(newAccount, newAmount, newOperator);

  expect(newAccount.accountBalance).toBe(475);

  // let mockEvent = ReactTestUtils.Simulate.change("account", 25)
  //
  // thisAccountComp.handleChange(mockEvent)
  //
  // expect(thisAccountComp.state.amount).toBe(25);

})
