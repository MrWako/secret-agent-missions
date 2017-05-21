import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { Keypad } from '../components/Keypad.js';
import { MissionsContainer } from '../containers/MissionsContainer.js';

export class AllMissions extends React.PureComponent {

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
        <MissionsContainer navigation={this.props.navigation}/>
      </Screen>
    );

  }
}
