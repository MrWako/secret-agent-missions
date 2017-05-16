import Expo from 'expo';
import Immutable from 'immutable';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import { clues } from './store/clues.js';
import { selection } from './store/selection.js';
import { summary } from './store/summary.js';

import { Edit } from './screens/Edit.js';
import { Frontpage } from './screens/Frontpage.js';
import { Home } from './screens/Home.js';
import { Play } from './screens/Play.js';

console.disableYellowBox = true;

const initialState = Immutable.Map();
const rootReducer = combineReducers(
  {summary, clues, selection});
const store = createStore(rootReducer, initialState);

const App = StackNavigator({
  Home: { screen: Home },
  Frontpage: { screen: Frontpage },
  Edit: { screen: Edit },
  Play: { screen: Play },
});

class Root extends React.Component {

  state = {
    fontsAreLoaded: false,
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });
    this.setState({fontsAreLoaded: true});
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <Expo.AppLoading/>;
    }

    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

Expo.registerRootComponent(Root);
