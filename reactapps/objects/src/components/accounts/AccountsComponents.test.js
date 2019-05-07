import React from 'react';
import ReactDOM from 'react-dom';
import AccountsController from './AccountsController';
import AccountsList from './AccountsList';
import AccountsCard from './AccountsCard';
import AccountsModal from './AccountsModal';
import AccountsManage from './AccountsManage';
import AccountCreator from './AccountCreator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsController />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountsManage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountCreator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
