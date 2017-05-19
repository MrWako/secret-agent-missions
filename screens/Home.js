import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

import { Keypad } from '../components/Keypad.js';

export class Home extends React.PureComponent {

  render() {
    return (
      <View style={{flex: 1}}>
        <Keypad/>
      </View>
    );

    /*
    return (
      <View style={{flex: 1}}>
        <Missions navigation={this.props.navigation}/>
      </View>
    );
    */
  }
}
