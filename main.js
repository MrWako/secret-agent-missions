import Expo from 'expo';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './containers/redux.js';
import { App } from './containers/App.js';

console.disableYellowBox = true;
const store = createStore(reducer);

class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>);
      }
}

Expo.registerRootComponent(Root);
