import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { Keypad } from '../components/Keypad.js';
import { BarcodeScanner } from '../components/BarcodeScanner.js';
import { Missions } from '../containers/Missions.js';

export class Home extends React.PureComponent {

  render() {

    /*
    return (
      <View style={{flex: 1}}>
        <BarcodeScanner/>
      </View>
    );
    */

    return (
      <Screen>
        <Missions navigation={this.props.navigation}/>
      </Screen>
    );

  }
}
