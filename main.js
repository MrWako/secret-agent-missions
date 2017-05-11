import Expo from 'expo';
import Immutable from 'immutable';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import { Button, Text, View } from 'react-native';

import { missionsReducer } from './store/missionsReducer.js';
//import { App } from './containers/App.js';

console.disableYellowBox = true;

const initialState = Immutable.Map();
const rootReducer = combineReducers({missionsReducer});
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

Expo.registerRootComponent(Root);
*/

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Secret Agent Missions',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Chat')}
          title="Nature Base Mission"
        />
      </View>
    );
  }
}


class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Nature Base Mission',
  };
  render() {
    return (
      <View>
        <Text>Nature Base Mission</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SimpleApp/>
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
