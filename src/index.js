import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';

import store from './store';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Prevent content from being hidden underneath the Virtual Keyboard by means of the VirtualKeyboard API
if ("virtualKeyboard" in navigator) {
navigator.virtualKeyboard.overlaysContent = true;
}

ReactDOM.render(
  
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
