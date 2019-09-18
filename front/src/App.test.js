import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// sguzmanm: Why are you using automated testing and why didn´t you do it for your other components?
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
