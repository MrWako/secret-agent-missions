import Expo from 'expo';
import Immutable from 'immutable';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer } from './store/reducer.js';
import { App } from './containers/App.js';

console.disableYellowBox = true;

const initialState = Immutable.Map({missions: undefined});
const rootReducer = combineReducers({missions: reducer});

const store = createStore(rootReducer, initialState);

class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>);
      }
}

Expo.registerRootComponent(Root);
