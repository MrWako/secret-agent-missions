import Expo from 'expo';
import Immutable from 'immutable';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import { missionsReducer } from './store/missionsReducer.js';
import { App } from './containers/App.js';

console.disableYellowBox = true;

const initialState = Immutable.Map({missionsReducer: undefined});
const rootReducer = combineReducers({missionsReducer: missionsReducer});
const store = createStore(rootReducer, initialState);

/*
class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>);
      }
}
*/

class Root extends React.Component {
    render() {
      return (
          <App/>)
      }
}

Expo.registerRootComponent(Root);
