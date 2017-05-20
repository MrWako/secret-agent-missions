import Expo from 'expo';
import React from 'react';
import { Screen, Text } from '@shoutem/ui';

import { Clues } from '../containers/Clues.js';

export class Edit extends React.PureComponent {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <Clues navigation={this.props.navigation}/>
        <Text onPress={() => navigate('Frontpage')}>Frontpage</Text>
      </Screen>
    );
  }
}
