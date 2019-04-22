import React from 'react';
import ReactDOM from 'react-dom';
import MathComp from './MathComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MathComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
