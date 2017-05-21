import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { BarcodeScanner } from '../components/BarcodeScanner.js';

export class CheckBarcode extends React.PureComponent {

  render() {
    return (
      <Screen>
        <BarcodeScanner/>
      </Screen>
    );
  }
}
