import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = {};

  if (window.currentUser) {
    let preloadedState = { session: {
                             currentUser: window.currentUser,
                           errors: [] }
                         };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  // TODO remove from window
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
