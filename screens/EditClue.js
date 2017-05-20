import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { BarcodeScanner } from '../components/BarcodeScanner.js';

export class EditClue extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <Text>Edit Clue</Text>
        <BarcodeScanner/>
      </Screen>
    );
  }
}
